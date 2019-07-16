import { Directive, HostListener, Input, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';

@Directive({ selector: '[dragZone]' })
export class DragZoneDirective {
    @Input() zone: string;
    @Input() data: any;
    @Output() dragStart: EventEmitter<any> = new EventEmitter();

    constructor(public element: ElementRef) { }

    @HostBinding('draggable')
    get draggable() {
      return true;
    }

    @HostListener('dragstart', ['$event']) public onDragStart(event) {
        // event.preventDefault();
        // event.stopPropagation();

        event.dataTransfer.setData('zone:' + this.zone, '');
        event.dataTransfer.setData('data', JSON.stringify(this.data));
        this.dragStart.emit(this.data);
    }

    // @HostListener('drop', ['$event']) public onDrop(event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     event.dataTransfer.setData('zone', this.zone);
    //     event.dataTransfer.setData('data', JSON.stringify(this.data));
    //     this.drop.emit();
    // }
}
