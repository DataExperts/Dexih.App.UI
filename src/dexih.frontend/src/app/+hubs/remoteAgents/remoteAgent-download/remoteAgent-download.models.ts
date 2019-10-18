// export enum eEnvironment {
//     Windows = <any>'Windows',
//     Osx = <any>'Osx',
//     Linux = <any>'Linux'
// }

// export const environments = [
//     // {key: eEnvironment.Windows, name: 'Windows 7/8/8.1/10 (requires .net framework 4.5.1)'},
//     { key: eEnvironment.Windows, name: 'Windows 7/8/8.1/10' },
//     { key: eEnvironment.Osx, name: 'Mac OSX' },
//     { key: eEnvironment.Linux, name: 'Linux' },
// ];

// export enum ePrivacyLevel {
//     LockData = <any>'LockData',
//     AllowDataUpload = <any>'AllowDataUpload',
//     AllowDataDownload = <any>'AllowDataDownload'
// }

// export const privacyLevels = [
//     { key: ePrivacyLevel.LockData, name: 'Lock data (no data enters or leaves network).' },
//     { key: ePrivacyLevel.AllowDataUpload, name: 'Allow data upload, but no download.' },
//     { key: ePrivacyLevel.AllowDataDownload, name: 'Data can be uploaded and downloaded externally.' },
// ];

// export enum eLogLevel {
//     Trace = <any>'Trace',
//     Debug = <any>'Debug',
//     Information = <any>'Information',
//     Warning = <any>'Warning',
//     Error = <any>'Error',
//     Critical = <any>'Critical',
//     None = <any>'None'
// }

// export const logLevels = [
//     { key: eLogLevel.Trace, name: 'Trace (large log files)' },
//     { key: eLogLevel.Debug, name: 'Debug (more activity logging)' },
//     { key: eLogLevel.Information, name: 'Information (recommended)' },
//     { key: eLogLevel.Warning, name: 'Warnings & Errors only' },
//     { key: eLogLevel.Error, name: 'Errors Only' },
//     { key: eLogLevel.Critical, name: 'Critical failures only' },
//     { key: eLogLevel.None, name: 'No logging' },
// ];

// export class RemoteApplicationSettings {
//     public firstRun = true;
//     public remoteAgentId: string = null;
//     public user: string = null;
//     public userToken: string = null;
//     public encryptionKey: string = null;
//     public webServer: string = null;
//     public name: string = null;
//     public autoSchedule = true;

//     public autoUpgrade = true;
//     public preRelease = false;

//     public allowUpload = true;
//     public allowDownload = true;
//     public allowLanAccess = true;
//     public allowExternalAccess = true;
//     public allowProxy = true;
//     public enableUPnP = true;

//     public enforceHttps = true;
//     public autoGenerateCertificate = true;

//     public downloadPort = 33944;
//     public externalDownloadUrl = '';

//     public allowLocalFiles = true;
//     public allowAllPaths = true;
//     public allowedPaths: string[] = [];

//     public allowAllHubs = true;
//     public allowedHubs: number[] = [];
// }


// ///  <summary>
// ///  Class mapping of the AppSettings file used for the RemoteAgent settings.
// ///  </summary>
// export class RemoteSettings {
//     public appSettings = new AppSettingsSection();
//     public systemSettings = new SystemSettingsSection();
//     public logging = new LoggingSection();
//     // public runtime = new RuntimeSection();
//     public network = new NetworkSection();
//     public privacy = new PrivacySection();
//     public permissions = new PermissionsSection();
// }

// export class AppSettingsSection {

//     ///  <summary>
//     ///  Indicates the remote agent is running for the first time, which will prompt user to enter settings.
//     ///  </summary>
//     public firstRun = true;

//     ///  <summary>
//     ///  Unique ID for the remote agent.
//     ///  </summary>
//     public remoteAgentId: string = null;

//     ///  <summary>
//     ///  The user email being authenticated
//     ///  </summary>
//     public user: string = null;

//     ///  <summary>
//     ///  The user token which authenticates the email
//     ///  </summary>
//     public userToken: string = null;

//     ///  <summary>
//     ///  The encryption key used for encrypting passwords, and encrypted data.
//     ///  </summary>
//     public encryptionKey: string = null;

//     ///  <summary>
//     ///  The Ingregation Hub Web Server: http://dexih.dataexpertsgroup.com
//     ///  </summary>
//     public webServer: string = null;

//     ///  <summary>
//     ///  A name to represent this remote agent.
//     ///  </summary>
//     public name: string = null;

//     ///  <summary>
//     ///  Auto upgrade the remote agent when a new version is available.
//     ///  </summary>
//     public autoUpgrade = true;

//     ///  <summary>
//     ///  Allow pre-release versions to be included in the auto upgrade.
//     ///  </summary>
//     public allowPreReleases = false;
// }
// export class PermissionsSection {

//     ///  <summary>
//     ///  Allow agent to read/write files to the local filesystem
//     ///  </summary>
//     public allowLocalFiles = true;

//     ///  <summary>
//     ///  Allow agent to access files anywhere.
//     ///  </summary>
//     public allowAllPaths = true;

//     ///  <summary>
//     ///  If AllowAllPaths = false, a list of the file paths the remote agent can access.
//     ///  </summary>
//     public allowedPaths: string[] = [];

//     ///  <summary>
//     ///  Allow agent to use any hub on the central web server.
//     ///  </summary>
//     public allowAllHubs = true;

//     ///  <summary>
//     ///  If AllowAllHubs = false, a list of the hubkeys that agent can access.
//     ///  </summary>
//     public allowedHubs: number[] = [];
// }
// export class NetworkSection {

//     ///  <summary>
//     ///  URL to upload/download from this agent.
//     ///  </summary>
//     public externalDownloadUrl: string = null;

//     ///  <summary>
//     ///  Override the default proxy server with a custom implementation.
//     ///  </summary>
//     public proxyUrl: string = null;

//     ///  <summary>
//     ///  Local download port to use
//     ///  </summary>
//     public downloadPort = 33944;

//     // default port
//     ///  <summary>
//     ///  Enforces the server to allow only https connections
//     ///  </summary>
//     public enforceHttps = true;

//     ///  <summary>
//     ///  Automatically generate ssl certificates
//     ///  </summary>
//     public autoGenerateCertificate = true;

//     ///  <summary>
//     ///  Dynamic domain used with autogenerate certificates.
//     ///  </summary>
//     public dynamicDomain = true;

//     ///  <summary>
//     ///  File name of the ssl certificate
//     ///  </summary>
//     public certificateFilename: string = null;

//     ///  <summary>
//     ///  Password for the ssl certificate
//     ///  </summary>
//     public certificatePassword: string = null;

//     ///  <summary>
//     ///  Automatically attempts to find a UPnP device to map the port externally.
//     ///  </summary>
//     public enableUPnp = true;
// }
// export class PrivacySection {

//     ///  <summary>
//     ///  Allow files and data to be downloaded through the web browser from this agent.
//     ///  </summary>
//     public allowDataDownload = true;

//     ///  <summary>
//     ///  Allow files and data to be uploaded through the web browser from this agent.
//     ///  </summary>
//     public allowDataUpload = true;

//     ///  <summary>
//     ///  Allow files to be accessed directly through the lan.
//     ///  </summary>
//     public allowLanAccess = true;

//     ///  <summary>
//     ///  Allow files and data to be uploaded externally through the internet (note, ports must be mapped externally for this to work).
//     ///  </summary>
//     public allowExternalAccess = true;

//     ///  <summary>
//     ///  Allow files and data to be uploaded through a proxy.
//     ///  </summary>
//     public allowProxy = true;
// }
// export class SystemSettingsSection {
//     public maxAcknowledgeWait: number;
//     public responseTimeout: number;
//     public cancelDelay: number;
//     public encryptionIterations: number;
//     public maxPreviewDuration: number;
//     public maxConcurrentTasks: number;
//     public maxUploadSize: number;
//     public socketTransportType: string;
// }

// export class LoggingSection {
//     public includeScopes: boolean;
//     public logLevel: LogLevelSection;
// }

// export class LogLevelSection {
//     public default = eLogLevel.Information;
//     public system = eLogLevel.Information;
//     public microsoft = eLogLevel.Information;
// }

// // export class RuntimeSection {
// //     public password: string
// //     public localIpAddress: string
// //     public externalIpAddress: string
// //     public proxyUrl: string
// //     public userHash: string
// //     public version: string
// //     public generateUserToken: boolean
// // }
