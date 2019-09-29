import { environment } from './environments/environment';
import { Message } from './app/+auth/auth.models';

export enum eLogLevel {
    Trace,
    Debug,
    Warning,
    Error,
    Information
}

export class LogFactory {
    constructor(private category: string) {

    }

    private formatMessage(message): string {
        return this.category + '::' + (new Date()).toISOString() + '::' + message;
    }

    public Log(message: string, logLevel: eLogLevel) {
        if (!environment.production) {
            switch (logLevel) {
                case eLogLevel.Trace:
                   // tslint:disable-next-line:no-console
                   console.debug(this.formatMessage(message));
                    break;
                case eLogLevel.Debug:
                    // tslint:disable-next-line:no-console
                    console.debug(this.formatMessage(message));
                    break;
                case eLogLevel.Warning:
                    console.warn(this.formatMessage(message));
                    break;
                case eLogLevel.Error:
                    console.error(this.formatMessage(message));
                    break;
                case eLogLevel.Information:
                    // tslint:disable-next-line:no-console
                    console.info(this.formatMessage(message));
                    break;
            }
        }
    }

    public LogC(message: () => string, logLevel: eLogLevel) {
        if (!environment.production) {
            this.Log(message(), logLevel);
        }
    }

    public LogMessage(message: Message) {
        if (message.success) {
            this.Log(message.message, eLogLevel.Information);
        } else {
            this.Log(message.message + '/n' + message.exceptionDetails, eLogLevel.Error);
        }
    }

}
