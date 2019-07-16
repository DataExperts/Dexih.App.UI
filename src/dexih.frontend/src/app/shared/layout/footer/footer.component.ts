import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'dexih-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {
  buildDate: string;
  buildVersion: string;
  year: number;

  _globalCacheSubscription: Subscription;

  constructor(private authService: AuthService) {
     this._globalCacheSubscription = authService.getGlobalCacheObservable().subscribe(cache => {
       if (cache) {
         let date = new Date(cache.buildDate);
         this.year = date.getFullYear();
        this.buildDate = date.toLocaleDateString(); // cache.buildDate;
        this.buildVersion = cache.buildVersion;
       }
     });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this._globalCacheSubscription) { this._globalCacheSubscription.unsubscribe(); }
  }

}
