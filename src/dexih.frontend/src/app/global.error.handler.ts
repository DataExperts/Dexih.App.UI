import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AuthService } from './+auth/auth.service';
import { Message } from './+auth/auth.models';
import { LogFactory, eLogLevel } from '../logging';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    private logger: LogFactory;

    constructor(public injector: Injector) {
        this.logger = new LogFactory('Global');
    }

    handleError(error: any) {
        const authService = this.injector.get(AuthService);
        let message: Message;
        if (error.rejection ) {
            message = error.rejection;
        } else {
            let details = ''
            if (error.stack) {
                details = 'Client debug information: ' + error.stack
            }

            if (error.exceptionDetails) {
                details = 'Server debug information: ' + error.exceptionDetails;
            }

            message = new Message(false, `Error: ${error.message}`,
            details, null);
        }
        authService.addUpdateNotification(message, true);
    }
}
