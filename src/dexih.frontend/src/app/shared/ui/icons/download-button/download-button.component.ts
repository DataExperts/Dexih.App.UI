import { Component, OnDestroy, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { downloadFormats } from '../../../../+hub/hub.query.models';
import { eDownloadFormat } from '../../../shared.models';

@Component({
    selector: 'download-button',
    templateUrl: './download-button.component.html'
})

export class DownloadButtonComponent implements OnInit, OnDestroy {
    @Input() autoCompact = true;
    @Output() download = new EventEmitter<eDownloadFormat>();

    eDownloadFormat = eDownloadFormat;
    downloadFormats = downloadFormats;

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy() {
     }

     doDownload(format: eDownloadFormat) {
         this.download.emit(format);
     }



}
