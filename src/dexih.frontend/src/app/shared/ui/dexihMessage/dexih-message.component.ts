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

    public addErrorMessage(messageString: string) {
        this.addMessage(new Message(false, messageString, null, null));
    }

    public addSuccessMessage(messageString: string) {
        this.addMessage(new Message(true, messageString, null, null));
    }

    public reset() {
        this.message = null;
    }
}
