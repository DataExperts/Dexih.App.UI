import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../+auth/auth.models';

@Component({
    selector: 'dexih-message',
    templateUrl: './dexih-message.component.html',
})

export class DexihMessageComponent implements OnInit {
    @Input() message: Message;

    isHidden = true;

    ngOnInit() {
    }

    public addMessage(message: Message) {
        this.message = message;
    }

    public addErrorMessage(error, context: string) {
        let message = context + '.  The following error occurred on the client: ' + error.message;
        let newMessage = new Message(false, message, error.stack, null);
        this.addMessage(newMessage);
    }

    public addSuccessMessage(messageString: string) {
        this.addMessage(new Message(true, messageString, null, null));
    }

    public reset() {
        this.message = null;
    }
}
