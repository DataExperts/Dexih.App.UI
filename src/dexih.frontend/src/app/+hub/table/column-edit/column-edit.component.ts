import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { HubCache, eCacheStatus,
     } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { eDeltaType, DexihTableColumn, eTypeCode } from '../../../shared/shared.models';

@Component({
    selector: 'column-edit',
    templateUrl: './column-edit.component.html',
})
export class ColumnEditComponent implements OnInit, OnChanges, OnDestroy {
    @Input() tableForm: FormGroup;
    @Input() columnKey: number;
    @Input() deltaType: eDeltaType;
    @Input() detailedView = true;
    @Output() isUpdated = new EventEmitter<boolean>();
    @Output() changeColumn = new EventEmitter<number>();

    private _hubCacheSubscription: Subscription;

    private hubCache: HubCache;
    public pageTitle: string;
    public action: string;

    public errorMessage: string;
    public successMessage: string;
    public savingTable: boolean;

    public newColumnForm: FormGroup;
    private originalColumn: DexihTableColumn;

    public columns: any[];

    public eTypeCode = eTypeCode;


    public columnFormService: HubFormsService;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        fb: FormBuilder) {

        // create a separate formService instance to manage the copied form
        this.columnFormService = new HubFormsService(fb, hubService, authService);
    }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            if (hubCache.status === eCacheStatus.Loaded) {
                this.hubCache = hubCache;

                if (!this.hubCache.isLoaded() || !this.tableForm) { return; }

                this.initializeForm();

                this.updateColumns();
            }
        });
    }

    ngOnChanges() {
        if (this.tableForm && this.hubCache) {
            this.initializeForm();
            this.updateColumns();
        }
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

    initializeForm() {
        let columnForm: FormGroup;
        let columns = this.tableForm.value.dexihTableColumns;

        if (this.columnKey) {
            if (this.tableForm) {
                this.originalColumn = columns.find(c => c.key === this.columnKey);
                if (!this.originalColumn) {
                    this.authService.navigateUp();
                    return;
                }
                columnForm = this.columnFormService.tableColumn(columns, this.originalColumn);
            }
        } else {
            let column = this.hubCache.newColumn(this.tableForm.value, this.deltaType);
            if (column) {
                columnForm = this.columnFormService.tableColumn(columns, column);
            } else {
                this.authService.informationDialog('Column not added.',
                `The column with delta type ${this.deltaType} could not be inserted into the current table.`);
            }
        }
        this.columnFormService.startForm(columnForm);
    }

    cancel() {
        this.isUpdated.emit(false);
    }

    apply() {
        const columnForm = this.columnFormService.currentForm;
        const columnsArray = <FormArray>this.tableForm.controls.dexihTableColumns;

        if (!this.originalColumn) {
        columnsArray.push(columnForm);
        } else {
        const originalColumn = columnsArray.controls.find(c => c.value.key === columnForm.value.key);
        originalColumn.setValue(columnForm.value);
        }

        this.tableForm.markAsDirty();
    }

    updateColumns() {
        if (this.tableForm && this.originalColumn) {
            this.columns = (<DexihTableColumn[]> this.originalColumn.childColumns)
            .sort((a, b) => a.position - b.position)
        }
    }

    navigateToColumn(col: DexihTableColumn) {
        this.apply();
        this.changeColumn.emit(col.key);
    }

    applyExit() {
        if (this.columnFormService.hasChanged) {
            this.apply();
            this.isUpdated.emit(true);
        }
    }
}
