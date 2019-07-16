import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

export enum eButton {
    Cancel,
    Save,
    Ok,
    Close,
};

@Component({

    selector: 'dexihdialog',
    templateUrl: './dexihdialog.component.html'
})
export class DexihDialogComponent implements OnInit, OnDestroy {
    @Input() title = 'Dialog';
    @Input() showCancel = false;
    @Input() showSave = false;
    @Input() showOk = false;
    @Input() showClose = false;
    @Input() disableOk = false;
    @Input() disableSave = false;

    @Output() onClose: EventEmitter<any> = new EventEmitter();

    private reject;
    private resolve;

    visible = false;
    visibleAnimate = false;

    eButton = eButton;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    private show(): void {
        document.body.classList.add('dexih-modal-open'); // allows dialog to scroll with background locked
        document.body.classList.add('modal-open');
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    private hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        document.body.classList.remove('dexih-modal-open');
        document.body.classList.remove('modal-open');
    }

    public openDialog(): Promise<eButton> {
        this.show();

        return new Promise<eButton>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    public closeDialog() {
        this.hide();
    }

    buttonClick(button: eButton) {
        if (this.disableOk && button === this.eButton.Ok) {

        } else if (this.disableSave && button === this.eButton.Save) {

        } else {
            this.hide();
            this.resolve(eButton);
        }
    }
}
