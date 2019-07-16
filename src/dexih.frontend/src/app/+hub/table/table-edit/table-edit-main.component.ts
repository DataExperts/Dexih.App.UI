import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubFormsService } from '../../hub.forms.service';

@Component({
  selector: 'dexih-table-edit-form',
  templateUrl: './table-edit-main.component.html'
})
export class TableEditMainComponent implements OnInit, OnDestroy {

  constructor(
    public formsService: HubFormsService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
