import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AuthService } from './+auth/auth.service';
import { Message } from './+auth/auth.models';
import { ILogger } from '@aspnet/signalr';
import { LogFactory, eLogLevel } from '../logging';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    private logger: LogFactory;

    constructor(public injector: Injector) {
        this.logger = new LogFactory('Global');
    }

    handleError(error) {
        const authService = this.injector.get(AuthService);
        let message = new Message(false, 'An unexpected error occurred: ' + error.message, error.stack, null);
        authService.addUpdateNotification(message, true);
    }
}
