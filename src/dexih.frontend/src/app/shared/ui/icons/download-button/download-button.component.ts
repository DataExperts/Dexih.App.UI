import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { eDownloadFormat, downloadFormats } from '../../../../+hub/hub.query.models';

@Component({
    selector: 'download-button',
    templateUrl: './download-button.component.html'
})

export class DownloadButtonComponent implements OnInit, OnDestroy {
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
