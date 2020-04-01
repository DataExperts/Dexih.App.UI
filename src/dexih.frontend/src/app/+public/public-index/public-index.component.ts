import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicService } from '../public.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { AuthService } from '../../+auth/auth.service';
import { DexihHubAuth } from '../../+auth/auth.models';

@Component({
  selector: 'public-index',
  templateUrl: './public-index.component.html',
  styles: []
})
export class PublicIndexComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
