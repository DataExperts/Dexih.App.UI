using System;
using System.IO.Compression;
using System.Reflection;
using System.Text.Json;
using dexih.api.Hubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using dexih.api.Services;
using dexih.api.Services.BackgroundTasks;
using dexih.repository;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using dexih.api.Services.Remote;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using dexih.functions;
using dexih.operations;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;

using StackExchange.Redis;
using SameSiteMode = Microsoft.AspNetCore.Http.SameSiteMode;


namespace dexih.api
{
    public class Startup
    {
	    
	    private readonly ILogger _logger;
	    private readonly string sessionId = Guid.NewGuid().ToString();


	    public Startup(IConfiguration configuration, ILogger<Startup> logger)
	    {
		    Configuration = configuration;
		    _logger = logger;
	    }

	    public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
//	        services.AddLogging(lb =>
//	        {
//		        lb.AddConfiguration(Configuration.GetSection("Logging"));
//		        lb.AddDebug();
//		        lb.AddAzureWebAppDiagnostics();
//	        });
//
//	        services.Configure<AzureFileLoggerOptions>(options =>
//	        {
//		        options.FileName = "azure-diagnostics-";
//		        options.FileSizeLimit = 50 * 1024;
//		        options.RetainedFileCountLimit = 5;
//	        }).Configure<AzureBlobLoggerOptions>(options =>
//	        {
//		        options.BlobName = "log.txt";
//	        });

	        var appSettings = Configuration.GetSection("AppSettings").Get<ApplicationSettings>();
        
	        
            // Add framework services.
            //services.AddApplicationInsightsTelemetry(Configuration);

			switch(appSettings.RepositoryType.ToLower())
			{
				case "sqlite":
					services.AddDbContext<DexihRepositoryContext>(options =>
						options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
					break;
			    case "mysql":
			        services.AddDbContext<DexihRepositoryContext>(options =>
			            options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
			        break;
				case "sqlserver":
					services.AddDbContext<DexihRepositoryContext>(options =>
                      options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
					break;
				case "npgsql":
				case "postgre":
				case "postgresql":
					services.AddDbContext<DexihRepositoryContext>(options =>
  						options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"), options => options.SetPostgresVersion(9,6)));
					break;
				default:
					throw new Exception("The repository type " + appSettings.RepositoryType + " was not recognised.  Use SqlServer, MySql, Npgsql or Sqlite");
			}

			services.AddScoped<DexihSignInManager, DexihSignInManager>();
			services.AddScoped<ErrorLogger, ErrorLogger>();
			
			if (!string.IsNullOrEmpty(appSettings.RedisCacheConnectionString))
			{
				services.AddStackExchangeRedisCache(options =>
				{
					options.InstanceName = appSettings.RedisCacheInstanceId;
					options.Configuration = appSettings.RedisCacheConnectionString;
				});
				
				var redis = ConnectionMultiplexer.Connect(appSettings.RedisCacheConnectionString);
				services.AddDataProtection().PersistKeysToStackExchangeRedis(redis, "dexih-keys");
			}
			// else
			// {
			// 	services.AddDistributedMemoryCache();
			// }

			services.AddSingleton<ICacheService, CacheService>();
			
            services.Configure<RemoteAuthenticationProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromDays(10000);
            });

            // Angular's default header name for sending the XSRF token.
            services.AddAntiforgery(options =>
            {
	            options.HeaderName = "X-XSRF-TOKEN";
            });

			// Add Identity services to the services container
			services.AddIdentity<ApplicationUser, IdentityRole>(options =>
			{
				//options.Cookies.ApplicationCookie.AccessDeniedPath = "/Home/AccessDenied";
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = false;
			})
			.AddEntityFrameworkStores<DexihRepositoryContext>()
			.AddDefaultTokenProviders()
			.AddTokenProvider<RemoteAuthenticationProvider<ApplicationUser>>("dexih-remote");

	        // Not required as authentication handled by angular pages.
	        services.AddAuthentication().AddCookie();


	        if (appSettings.UseResponseCompression)
	        {
		        services.Configure<GzipCompressionProviderOptions>(options =>
		        {
			        options.Level = CompressionLevel.Optimal;
		        });

		        services.AddResponseCompression(options =>
		        {
			        options.EnableForHttps = true;
			        options.Providers.Add<BrotliCompressionProvider>();
		        });
	        }

	        services.AddResponseCaching();

            // Add framework services.
            services.AddMvc()
	            .AddJsonOptions(options =>
	            {
		            options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
//		            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
		            options.JsonSerializerOptions.IgnoreNullValues = true;
		            options.JsonSerializerOptions.Converters.Add(new JsonObjectConverter());
		            options.JsonSerializerOptions.Converters.Add(new JsonTimeSpanConverter());
		            options.JsonSerializerOptions.Converters.Add(new JsonDateTimeConverter());
	            });
            
            // Add message services.
	        services.AddSingleton<IEmailSender, AuthMessageSender>();

	        // add applications settings
            services.AddSingleton(appSettings);

            // Add remote agent connectivity service.
            services.AddSingleton<IRemoteAgents, DexihRemoteAgents>();
            
	        // Add operations which allow controllers to interact with the repository.
	        services.AddTransient<IDexihOperations, DexihOperations>();
	        
	        // A service that queue and processes background tasks.
	        services.AddHostedService<QueuedHostedService>();
	        services.AddSingleton<IBackgroundTaskQueue, BackgroundTaskQueue>();
	        
	        services.AddHttpClient();

	        if (appSettings.Origins?.Length > 0)
	        {
		        services.AddCors(options =>
		        {
			        options.AddDefaultPolicy(builder =>
						builder.WithOrigins(appSettings.Origins)
					        .AllowAnyMethod()
					        .AllowAnyHeader()
					        .AllowCredentials());
		        });
	        }

	        // use the signalr service if specified.
	        var builder = services.AddSignalR().AddJsonProtocol(options =>
	        {
		        options.PayloadSerializerOptions.Converters.Add(new JsonObjectConverter());
		        options.PayloadSerializerOptions.Converters.Add(new JsonTimeSpanConverter());
		        options.PayloadSerializerOptions.Converters.Add(new JsonDateTimeConverter());
	        });
	        
	        if (!string.IsNullOrEmpty(appSettings.SignalRConnectionString))
	        {
		        builder.AddAzureSignalR(appSettings.SignalRConnectionString);
	        }
	        else
	        {
		        if (!string.IsNullOrEmpty(appSettings.RedisCacheConnectionString))
		        {
			        builder.AddStackExchangeRedis(appSettings.RedisCacheConnectionString);
		        }
	        }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IAntiforgery antiforgery)
		{
//			var ll = Configuration.GetSection("Logging:LogLevel").GetValue<LogLevel>("Default");
//            // loggerFactory.AddConsole();
//            
//			loggerFactory.AddDebug(ll);
//
//			loggerFactory.AddAzureWebAppDiagnostics(
//              new AzureAppServicesDiagnosticsSettings
//              { 
//                  OutputTemplate = "{Timestamp:yyyy-MM-dd HH:mm:ss zzz} [{Level}] {RequestId}-{SourceContext}: {Message}{NewLine}{Exception}"
//              }
//            );

			var appSettings = Configuration.GetSection("AppSettings").Get<ApplicationSettings>();
			
			_logger.LogInformation("Starting application at " + DateTime.Now + " with environment configuration: " + env.EnvironmentName);

			if (appSettings.UseResponseCompression)
			{
				app.UseResponseCompression();
			}

			app.UseStaticFiles(new StaticFileOptions
			{
				OnPrepareResponse = ctx =>
				{
					var headers = ctx.Context.Response.GetTypedHeaders();
					headers.CacheControl = new CacheControlHeaderValue
					{
						Public = true,
						MaxAge = TimeSpan.FromDays(365)
					};
				}
			});

			app.UseCors();

			app.UseRouting();
			app.UseResponseCaching();
			
            if (env.IsDevelopment())
            {
                _logger.LogInformation("Application is running in development configuration, detailed exceptions and errors will be displayed.");

                app.UseDeveloperExceptionPage();
            }
            else
            {
                _logger.LogInformation("Application is running in release configuration mode.");

                if (!string.IsNullOrEmpty(appSettings.ExceptionsDirectory))
                {
	                _logger.LogInformation($"Exceptions will be logged to {appSettings.ExceptionsDirectory}.");
	                app.UseExceptionHandler(appSettings.ExceptionsDirectory);    
                }
            }
            
            // these headers pass the client ipAddress from proxy servers (such as nginx)
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
	            ForwardedHeaders = ForwardedHeaders.XForwardedFor |
	                               ForwardedHeaders.XForwardedProto,
            });

            // enable the telemetry data.
            app.UseAuthentication();
            app.UseAuthorization();

            app.Use(async (context, next) =>
            {
                //force ssl connections for non-development environments.
	            if (context.Request.IsHttps || env.IsDevelopment())
	            {
		            _logger.LogInformation($"Request from path {context.Request.Path}");
		            
					// We can send the request token as a JavaScript-readable cookie, and Angular will use it by default.
					var tokens = antiforgery.GetAndStoreTokens(context);
					context.Response.Cookies.Append(
						"XSRF-TOKEN", 
						tokens.RequestToken, 
						new CookieOptions() { HttpOnly = false, SameSite = SameSiteMode.None, Secure = context.Request.IsHttps });	

		            await next();

		            if (context.Response.StatusCode == 404)
		            {
			            _logger.LogTrace("passing to client");
			            context.Request.Path = "/";
			            await next();
		            }
	            }
	            else
	            {
		            var withHttps = "https://" + context.Request.Host + context.Request.Path;
		            context.Response.Redirect(withHttps);
	            }
            });

			app.UseFileServer(false);

			app.UseEndpoints(endpoints =>
            {
	            endpoints.MapHub<RemoteAgentHub>("/remoteagent");
	            endpoints.MapHub<BrowserHub>("/browser");

	            endpoints.MapControllerRoute(
				  name: "api",
				  pattern: "api/{controller=Version}/{action=Index}/{id?}");
	            
	            endpoints.MapControllerRoute(
				  name: "remote",
				  pattern: "{controller=Version}/{action=Index}/{id?}");
				
            });

            if (appSettings.CreateRepository)
            {
	            //creates the seed data which is loaded into the initial database.
	            var repoDbContext = app.ApplicationServices.GetService<DexihRepositoryContext>();

	            switch (appSettings.RepositoryType.ToLower())
	            {
		            case "sqlite":
			            repoDbContext.DatabaseType = EDatabaseType.Sqlite;
			            break;
		            case "mysql":
			            repoDbContext.DatabaseType = EDatabaseType.MySql;
			            break;
		            case "sqlserver":
			            repoDbContext.DatabaseType = EDatabaseType.SqlServer;
			            break;
		            case "npgsql":
		            case "postgre":
		            case "postgresql":
			            repoDbContext.DatabaseType = EDatabaseType.Npgsql;
			            break;
		            default:
			            throw new Exception("The repository type " + appSettings.RepositoryType +
			                                " was not recognised.  Supported repositories are SqlServer, MySql, PostgreSql or Sqlite");
	            }

	            _logger.LogInformation($"Updating repository database (if necessary).");

	            var userManager = app.ApplicationServices.GetService<UserManager<ApplicationUser>>();
	            var roleManager = app.ApplicationServices.GetService<RoleManager<IdentityRole>>();
	            repoDbContext.Database.EnsureCreated();
	            repoDbContext.Database.Migrate();
	            var seedData = new SeedData();
	            seedData.UpdateReferenceData(roleManager, userManager).GetAwaiter().GetResult();
            }

            LoadCache(app.ApplicationServices);

            _logger.LogInformation("Startup has completed.");

        }

        void LoadCache(IServiceProvider services)
        {
	        var cache = services.GetService<ICacheService>();
	        var operations = services.GetService<IDexihOperations>();

	        cache.MemoryCache.GetOrCreate($"GLOBAL_CACHE", entry =>
	        {
		        _logger.LogInformation("Loading global cache.");

		        var version = Assembly.GetExecutingAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;
		        var buildDate = System.IO.File.GetLastWriteTime(Assembly.GetExecutingAssembly().Location);
                    
		        var cache = new CacheManager(0, "");
		        cache.LoadGlobal(version, buildDate);
		        cache.GoogleClientId = operations.Config.GoogleClientId;
		        cache.MicrosoftClientId = operations.Config.MicrosoftClientId;
		        cache.GoogleMapsAPIKey = operations.Config.GoogleMapsAPIKey;

		        return cache;
	        });
        }
    }
}
