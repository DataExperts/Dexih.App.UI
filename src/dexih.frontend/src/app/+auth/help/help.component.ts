import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { logoUrl } from '../auth.models';
import { Location} from '@angular/common';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  private _subscription: Subscription;

  public path: string;
  public data: string;
  logoUrl = logoUrl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
) { }

ngOnInit() {
  this._subscription = this.route.queryParams.subscribe(params => {
      let path = params['path'];
      if (path) {
          this.path = '/assets/help/' + path;
      } else {
          this.path = '/assets/help/intro/getting_started.md'
      }

      this.getData(this.path);
  });
}

getData(path) {
  if (path) {
    const url = this.location.prepareExternalUrl(this.path);

    this.http.get(url, { responseType: 'text' }).subscribe(result => {

        let matches = new RegExp('{{SERVER}}|{{HUBKEY}}', 'gi');
        this.data = result.replace(matches, match => {
            switch (match) {
                case '{{SERVER}}':
                    return this.location.prepareExternalUrl('./');
            }
        });
    });
}
}

  printTerms(): void {
    let printContents, popupWin;
    printContents = document.getElementById('help-body').innerHTML;
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

getRoute(event) {
  let element = event.target;
  while (element) {
      let link: string = element.getAttribute('href');

      if (link) {
          if (link.endsWith('.md') && !link.startsWith('http')) {
            this.router.navigate([], { relativeTo: this.route, queryParams: {'path': link} });
          } else if (link.startsWith('route:')) {
            // don't allow link clicks unless logged in
          } else if (link.startsWith('unsafe:route:')) {
              let route = link.substr(13);
              this.router.navigate([route]);
          } else if (link.startsWith('#')) {
              this.router.navigate(['.', link]);
          } else {
              window.open(link);
          }
          event.preventDefault();
      }

      element = element.parentElement;
  }
}


}
