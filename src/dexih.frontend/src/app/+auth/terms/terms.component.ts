import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  @Output() termsAccepted = new EventEmitter<boolean>();

  showDialog = false;

  ngOnInit() {
    this.termsAccepted.emit(false);
  }

  printTerms(): void {
    let printContents, popupWin;
    printContents = document.getElementById('terms-body').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

  acceptTerms() {
    this.termsAccepted.emit(true);
    this.showDialog = false;
  }

}
