import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription, combineLatest} from 'rxjs';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihDatalinkTransformItem, eTransformItemType, DexihDatalinkTransform, eFunctionType, eTransformType } from '../../../shared.models';
import { DexihFormErrorsModule} from '../dexih-form-errors.module';

class ControlError {
    public field: string;
    public name: string;
    public position: number;
    public errors: string[];
    public link: string[];

    public childControlErrors: ControlError[];

    constructor() {
        this.childControlErrors = new Array<ControlError>();
        this.errors = [];
    }
}

@Component({
    selector: 'dexih-invalid-form-details',
    templateUrl: './dexih-invalid-form-details.component.html',
})
export class DexihInvalidFormDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() control: AbstractControl;
    @Input() baseLink: string;

    public showErrors = false;


    private _changesSubscription: Subscription;

    valid = true;
    public controlErrors = [];

    constructor(public router: Router, public route: ActivatedRoute) { }

    ngOnInit() { }

    ngOnChanges() {
        if (!this.control) {
            this.valid = true;
            this.controlErrors = [];
            return;
        }

        this.refresh();

        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
        this._changesSubscription = this.control.statusChanges.subscribe(() => {
            this.refresh();
        });
    }

    ngOnDestroy() {
        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    }

    refresh() {
        if (this.control && this.control.invalid) {
            this.valid = false;
            this.controlErrors = this.getFormErrors();
        } else {
            this.valid = true;
            this.controlErrors = [];
        }
    }

    public getFormErrors(): ControlError[] {
        return this.getFormErrorsRecursive(<FormGroup>this.control, 0, null);
    }


    private getFormErrorsRecursive(form: FormGroup, depth: number, parentControlError: ControlError): ControlError[] {
        let controlErrors = [];

        if (form && form.invalid && form.controls) {
            for (const field of Object.keys(form.controls)) {
                const control = form.get(field);

                // if the control is dirty or flag is set to show all errors.
                if (control && control.invalid) {

                    if (control instanceof FormArray) {
                        const formArray = <FormArray>control;
                        let controls = formArray.controls.sort((a: FormGroup, b: FormGroup) => {
                            if (a.controls.position) {
                                return a.controls.position.value - b.controls.position.value;
                            }
                            return 1;
                        });

                        controls.forEach((cont, formIndex) => {
                            if (cont.invalid) {
                            let controlError = new ControlError();

                            if (cont.value && cont.value.name) {
                                controlError.name = cont.value.name;
                            }

                            this.setError(field, cont, controlError, form, parentControlError);
                            controlError.position = formIndex + 1;
                            controlError.childControlErrors = this.getFormErrorsRecursive(<FormGroup>cont, depth + 1,
                                    controlError);
                            controlErrors.push(controlError);
                        }
                        });
                    } else if (control instanceof FormGroup) {
                        let controlError = new ControlError();

                        if (control.value && control.value.name) {
                            controlError.name = control.value.name;
                        }

                        this.setError(field, control, controlError, form, parentControlError);
                        controlError.position = null;
                        controlError.childControlErrors = this.getFormErrorsRecursive(<FormGroup>control, depth + 1, controlError);
                        controlErrors.push(controlError);

                    } else {
                        let controlError = new ControlError();
                        this.setError(field, control, controlError, form, parentControlError);
                        controlError.position = null;
                        for (const key of Object.keys(control.errors)) {
                                let message = DexihFormErrorsModule.createErrorMessage(key, control);
                                controlError.errors.push(message);
                            }
                            controlErrors.push(controlError);
                        }
                }
            }
        }

        return controlErrors;
    }

    private setError(field: string, control: AbstractControl, controlError: ControlError,
            parentControl: AbstractControl, parentControlError: ControlError) {
        let link: any[];

        switch (field) {
            case 'dexihDatalinkTransforms':
                let transform = <DexihDatalinkTransform>control.value;
                if (transform.name) {
                    controlError.field = 'Transform ' + transform.name;
                } else {
                    controlError.field = 'Transform ' + eTransformType[transform.transformType];
                }

                link = ['transforms', 'transform', control.value.key];
                break;
            case 'dexihDatalinkTransformItems':
                let item = <DexihDatalinkTransformItem>control.value;
                const functionType = this.getFunctionType(parentControl.value);

                switch (item.transformItemType) {
                    case eTransformItemType.BuiltInFunction:
                        controlError.field = item.functionMethodName;
                        link = ['standard-function-edit', functionType, item.key];
                        break;
                    case eTransformItemType.CustomFunction:
                        controlError.field = 'Custom Function';
                        link = ['custom-function-edit', functionType, item.key];
                        break;
                    case eTransformItemType.Column:
                    case eTransformItemType.JoinNode:
                    case eTransformItemType.GroupNode:
                    case eTransformItemType.ColumnPair:
                    case eTransformItemType.Sort:
                    case eTransformItemType.JoinPair:
                    case eTransformItemType.FilterPair:
                    case eTransformItemType.AggregatePair:
                    case eTransformItemType.Series:
                        controlError.field = eTransformItemType[item.transformItemType] + ' mapping';
                        link = ['mapping-edit', item.transformItemType, item.key];
                        break;
                    case eTransformItemType.UnGroup:
                        controlError.field = 'UnGroup';
                        link = ['unGroup-edit', item.key];
                        break;
                }
                controlError.link = [];
                break;
            case 'dexihFunctionParameters':
                controlError.field = 'Parameter';
                controlError.link = [];
                break;
            case 'arrayParameters':
                controlError.field = 'Array Item';
                controlError.link = [];
                break;
            case 'functionMethodName':
                controlError.field = 'Standard Function';
                controlError.link = [];
                break;
            default:
                controlError.field = field;
                controlError.link = [];
        }

        if (link) {
            if (parentControlError && parentControlError.link) {
                controlError.link = parentControlError.link.concat(link);
            } else {
                controlError.link = link;
            }
        } else {
            if (parentControlError && parentControlError.link) {
                controlError.link = parentControlError.link
            }
        }
    }

    public getFunctionType(datalinkTransform: DexihDatalinkTransform): eFunctionType {
        let functionType: eFunctionType;
        switch (datalinkTransform.transformType) {
            case eTransformType.Filter:
                functionType = eFunctionType.Condition;
                break;
            case eTransformType.Mapping:
                functionType = eFunctionType.Map;
                break;
            case eTransformType.Join:
                functionType = eFunctionType.JoinCondition;
                break;
            case eTransformType.Group:
            case eTransformType.Aggregate:
                functionType = eFunctionType.Aggregate;
                break;
            case eTransformType.Series:
                functionType = eFunctionType.Series;
                break;
            case eTransformType.Sort:
                functionType = eFunctionType.Sort;
                break;
            case eTransformType.Validation:
                functionType = eFunctionType.Validate;
                break;
            case eTransformType.Rows:
                functionType = eFunctionType.Rows;
                break;
            case eTransformType.Lookup:
                functionType = eFunctionType.JoinCondition;
                break;
            case eTransformType.Delta:
                break;
        }

        return functionType;
    }
}
