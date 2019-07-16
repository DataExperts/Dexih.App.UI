import { Directive, HostListener, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({ selector: '[dropZone]' })
export class DropZoneDirective {
    @Input() requireFiles = false;
    @Input() zones: string[];
    @Input() zone: string;
    @Input() dropAllowedClass = '';
    @Input() dropNotAllowedClass = '';
    @Output() dropFiles: EventEmitter<File> = new EventEmitter<File>();
    @Output() dragFilesOver: EventEmitter<any> = new EventEmitter();
    @Output() dragLeave: EventEmitter<any> = new EventEmitter();
    @Output() dragInvalid: EventEmitter<any> = new EventEmitter();
    @Output() dropData: EventEmitter<any> = new EventEmitter();

    private isMouseOver = false;
    private isDropAllowed = false;

    private _elementClass: string

    @Input('class')
    @HostBinding('class')
    get elementClass(): string {
        let dragClass = this.isMouseOver ?
        (this.isDropAllowed ? this.dropAllowedClass : this.dropNotAllowedClass) : '';

        return this._elementClass + ' ' + dragClass;
    }
    set elementClass(val: string) {
        this._elementClass = val;
    }

    constructor() { }

    @HostListener('dragover', ['$event']) public onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isMouseOver = true;

        if (this.dropAllowed(event)) {
            event.dataTransfer.dropEffect = 'copy';
            this.isDropAllowed = true;
            this.dragFilesOver.emit();
            return;
        }

        this.isDropAllowed = false;
        event.dataTransfer.dropEffect = 'none';
        this.dragInvalid.emit();
    }

    dropAllowed(event): boolean {
        if (this.requireFiles) {
            if (event.dataTransfer.types) {
                for (let i = 0; i < event.dataTransfer.types.length; i++) {
                    if (event.dataTransfer.types[i] === 'Files') {
                        return true;
                    }
                }
            }
        } else {
            let zone = this.getZone(event);
            if (!zone && !this.zone && !this.zones) {
                return true;
            }
            if (this.zone && this.zone === zone) {
                return true;
            }
            if (this.zones && Array.isArray(this.zones) && this.zones.findIndex(z => z === zone) >= 0) {
                return true;
            }
        }

        return false;
    }

    getZone(event): string {
        if (event.dataTransfer.types) {
            for (let i = 0; i < event.dataTransfer.types.length; i++) {
                let type = <string> event.dataTransfer.types[i];
                if (type && type.substr(0, 5) === 'zone:') {
                    return type.substr(5);
                }
            }
        }
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isMouseOver = false;
        this.isDropAllowed = false;
        this.dragLeave.emit();
    }

    @HostListener('drop', ['$event']) public onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isMouseOver = false;
        this.isDropAllowed = false;

        if (this.dropAllowed(event)) {
            let files = event.dataTransfer.files;
            if (files.length > 0) {
                this.dropFiles.emit(files);
            }

            let data = event.dataTransfer.getData('data');
            if (data) {
                this.dropData.emit(JSON.parse(data));
            }
        }

        this.dragLeave.emit();
    }
}
