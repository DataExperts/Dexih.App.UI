import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, combineLatest} from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DatalinkEditGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate) {
    return component && component.canDeactivate ? component.canDeactivate() : true;
  }

}
