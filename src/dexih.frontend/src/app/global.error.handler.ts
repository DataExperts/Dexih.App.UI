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

    handleError(error: TypeError) {
        const authService = this.injector.get(AuthService);
        let message = new Message(false, `Error: ${error.message}`,
            error.stack, null);
        authService.addUpdateNotification(message, true);
    }
}
