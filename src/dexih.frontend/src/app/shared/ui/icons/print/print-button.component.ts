import { Component, OnDestroy, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'print-button',
    templateUrl: './print-button.component.html'
})

export class PrintButtonComponent implements OnInit, OnDestroy {
    @Input() autoCompact = true;
    @Input() element = 'print-body';

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy() {
     }

     print(): void {
        let printContents, popupWin;
        printContents = document.getElementById(this.element).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
              <style>
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }

}
