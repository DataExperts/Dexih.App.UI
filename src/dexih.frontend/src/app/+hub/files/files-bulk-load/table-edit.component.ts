import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubFormsService } from '../../hub.forms.service';

@Component({
  selector: 'dexih-table-edit-form',
  templateUrl: './table-edit.component.html'
})
export class TableEditComponent implements OnInit, OnDestroy {

  constructor(
    public formsService: HubFormsService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
