import { Component, OnInit, Input } from '@angular/core';
import {HubCache, transformItemTypes } from '../../../hub.models';
import { HubService } from '../../..';
import { Subscription, combineLatest } from 'rxjs';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { compare } from '../../../hub.query.models';
import { DexihDatalinkTransform, DexihDatalinkTransformItem, eTransformItemType, eCompare,
    DexihDatalinkColumn, FunctionReference, eParameterDirection, eAggregate, eSortDirection, eTypeCode } from '../../../../shared/shared.models';

export class ValidValue {
    public valid: boolean;
    public text: string;
    public error: string;
}

export class ValidParameter {
    public values: ValidValue[];
    public name: string;
}

export class ValidMapping {
    public name: string;
    public parameters: ValidParameter[];
}

@Component({
    selector: 'mapping-item',
    templateUrl: 'mapping-item.component.html'
})

export class MappingItemComponent implements OnInit {
    @Input() transform: DexihDatalinkTransform;
    @Input() transformItem: DexihDatalinkTransformItem;
    @Input() allowCondition: boolean;

    private _subscription: Subscription;

    private hubCache: HubCache;

    public label: string;
    public error: string;

    public source: ValidValue;
    public target: ValidValue;
    public compare: string;
    public inputParameters: ValidParameter[];
    public outputParameters: ValidParameter[];

    public mapParameters: ValidMapping[];

    constructor(
        private hubService: HubService) { }

    ngOnInit() {
        try {

            if (this._subscription) { this._subscription.unsubscribe(); }
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                this.updateMapping();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings');
        }
    }

    async updateMapping() {
        let item = this.transformItem;
        let itemType = transformItemTypes.find(c => c.key === item.transformItemType);

        switch (item.transformItemType) {
            case eTransformItemType.BuiltInFunction:
                if (item.functionClassName) {
                    let func = await this.hubService.GetFunctionReference(item);
                    if (func) {
                        this.label = func.name;
                        this.addBuiltInFunctionParameters(func);
                    } else {
                        this.error = `Error, function ${item.functionClassName}.${item.functionMethodName} not found.`;
                    }
                } else if (item.customFunctionKey) {
                    let func = this.hubCache.hub.dexihCustomFunctions.find(c => c.key === item.customFunctionKey);
                    if (func) {
                        this.label = func.name;
                        this.addCustomFunctionParameters();
                    } else {
                        this.error = 'Error, function not found.';
                    }
                } else {
                    this.error = 'Error, function not found';
                }
                break;
            case eTransformItemType.CustomFunction:
                this.addCustomFunctionParameters();
                break;
            case eTransformItemType.AggregatePair:
                this.label = eAggregate[item.aggregate];
                break;
            case eTransformItemType.Sort:
                this.label = eSortDirection[item.sortDirection];
                break;
            case eTransformItemType.UnGroup:
                this.label = 'UnGroup'
                this.addUnGroupParameters();
                break;
            default:
                this.label = itemType.name;
                break;
        }

        if (itemType.useSource) { this.source = this.columnOrValue(null, item.sourceDatalinkColumn, item.sourceValue); }
        if (itemType.useTarget) { this.target = this.describeDatalinkColumn(null, item.targetDatalinkColumn); }
        if (itemType.useJoin) { this.target = this.describeDatalinkColumn(null, item.joinDatalinkColumn); }
        if (itemType.useFilter) { this.target = this.columnOrValue(null, item.filterDatalinkColumn, item.filterValue)};

        if (itemType.useFilter || itemType.useJoin) {
            let filterCompare = item.filterCompare;
            if (filterCompare === null) { filterCompare = eCompare.IsEqual };
            this.compare = compare.find(c => c.key === filterCompare).name;
        } else {
            this.compare = null;
        }
    }

    private columnOrValue(expectedDataType: eTypeCode, column: DexihDatalinkColumn, value: string): ValidValue {
        if (column) {
            return this.describeDatalinkColumn(expectedDataType, column);
        } else {
            return {text: this.describeStaticValue(value), valid: true, error: ''};
        }
    }

    // concatenates the arrays together.
    // node: .concat will append null arrays, where this ignores null arrays.
    private concat<T>(...args: T[][]): T[] {
        let array: T[] = [];
        args.forEach(arg => {
            if ( arg ) {
                array = array.concat(arg);
            }
        });
        return array;
    }

    private addBuiltInFunctionParameters(func: FunctionReference) {
        let functionInputs = this.concat(func.inputParameters, func.resultInputParameters);
        let functionOutputs = this.concat(func.outputParameters, func.returnParameters, func.resultOutputParameters,
            func.resultReturnParameters);

        let inputParams = this.transformItem.dexihFunctionParameters
            .filter(c =>
                c.direction === eParameterDirection.Input ||
                c.direction === eParameterDirection.ResultInput ||
                c.direction === eParameterDirection.Join);

        this.inputParameters = functionInputs.filter(c => c && !c.linkedName).map<ValidParameter>(param => {
            let p = inputParams.find(c => c.name === param.parameterName);
            if (p) {
                if (p.rank === 0) {
                    let value = this.columnOrValue(p.dataType, p.datalinkColumn, p.value);
                    return {name: this.describeParameterName(param), values: [value] };
                } else {
                    let values = p.arrayParameters.sort( (a, b) => a.position - b.position).map(ap => {
                        return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                    });
                    return {name: this.describeParameterName(param), values: values};
                }
            } else {
                return {name: this.describeParameterName(param), values: [{valid: false, error: 'Not Mapped', text: ''}]  };
            }
        });

        let outputParams = this.transformItem.dexihFunctionParameters
            .filter(
                c => HubCache.parameterIsOutput(c));

        this.outputParameters = functionOutputs.filter(c => c &&  !c.linkedName).map<ValidParameter>(param => {
            let p = outputParams.find(c => c.name === param.parameterName);
            if (p) {
                if (this.allowCondition &&
                    (p.direction === eParameterDirection.ReturnValue || p.direction === eParameterDirection.ResultReturnValue)) {
                    return null;
                }
                if (p.rank === 0 || p.datalinkColumn !== null) {
                    let value = this.describeDatalinkColumn(p.dataType, p.datalinkColumn);
                    return {name: this.describeParameterName(param), values: [value]};
                } else {
                    let values = p.arrayParameters.sort( (a, b) => a.position - b.position).map(ap => {
                        return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                    });
                    return {name: this.describeParameterName(param), values: values};
                }
            } else {
                // return {name: param.name, values: [{valid: false, text: 'Not mapped'}]  };
                return null;
            }
        }).filter(c => c !== null);

        let linkedNames = Array.from(new Set(this.concat(functionInputs, functionOutputs).map(c => c &&  c.linkedName).filter(c => c)));
        this.mapParameters = linkedNames.map(name => {
            let parameters: ValidParameter[] = functionInputs.filter(c => c.linkedName === name).map(param => {
                let p = inputParams.find(c => c.name === param.parameterName);
                let values = p.arrayParameters.sort( (a, b) => a.position - b.position).map(ap => {
                    return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                });
                return {name: this.describeParameterName(param), values: values};
            });

            let parameters2: ValidParameter[] = functionOutputs.filter(c => c.linkedName === name).map(param => {
                let p = outputParams.find(c => c.name === param.parameterName);
                let values = p.arrayParameters.sort( (a, b) => a.position - b.position).map(ap => {
                    return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                });
                return {name: this.describeParameterName(param), values: values};
            });

            return {name: name, parameters: this.concat(parameters, parameters2)};
        });
    }

    private addCustomFunctionParameters() {

        let inputParams = this.transformItem.dexihFunctionParameters
            .filter(c =>
                c.direction === eParameterDirection.Input ||
                c.direction === eParameterDirection.ResultInput ||
                c.direction === eParameterDirection.Join);

        this.inputParameters = inputParams.map<ValidParameter>(p => {
            if (p.rank === 0) {
                let value = this.columnOrValue(p.dataType, p.datalinkColumn, p.value);
                return { name: this.describeParameterName(p), values: [value] };
            } else {
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                });
                return { name: this.describeParameterName(p), values: values };
            }
        });

        let outputParams = this.transformItem.dexihFunctionParameters
            .filter(c => HubCache.parameterIsOutput(c));

        this.outputParameters = outputParams.map<ValidParameter>(p => {
            if (p.rank === 0) {
                let value = this.describeDatalinkColumn(p.dataType, p.datalinkColumn);
                return { name: this.describeParameterName(p), values: [value] };
            } else {
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                });
                return { name: this.describeParameterName(p), values: values };
            }
        });
    }

    private addUnGroupParameters() {

        let parameters = this.transformItem.dexihFunctionParameters;

        let runTime = this.transform['runTime'];
        let inputColumns = runTime.inputColumns;

        let sourceColumn = <DexihDatalinkColumn> inputColumns.find(c => c.key === this.transformItem.sourceDatalinkColumn.key);

        if (sourceColumn) {
            this.outputParameters = parameters.map<ValidParameter>(p => {
                if (p.datalinkColumn) {
                    let find = sourceColumn.childColumns.find(c => c.key === p.datalinkColumn.key);
                    if (find) {
                        return {name: this.describeParameterName(p), values: [{valid: true, error: '', text: p.datalinkColumn.name}]};
                    }
                    return {name: this.describeParameterName(p),
                        values: [{valid: false, error: '(Invalid column) ', text: p.datalinkColumn.name}]};
                } else {
                    return {name: this.describeParameterName(p), values: [{valid: false, error: '(No column)', text: ''}]};
                }
            });
        }
    }

    private describeParameterName(param): string {
        return param.name + ' (' + eTypeCode[param.dataType] + ')';
    }

    private describeDatalinkColumn(expectedDataType: eTypeCode, value: DexihDatalinkColumn): ValidValue {
        if (!value) {
            return { error: '(not mapped)', text: '', valid: false };
        }

        let runTime = this.transform['runTime'];
        let inputColumns = runTime.inputColumns;
        let nodeDatalinkColumn = this.transform.nodeDatalinkColumn ? this.transform.nodeDatalinkColumn : null;
        let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;

        let returnValue: string = null;

        let io = new InputOutputColumns();
        let col = io.findValidColumn(value, nodeDatalinkColumnKey, inputColumns);
        if (col) {
            returnValue = (value.columnGroup ? ('(' + value.columnGroup + ')') : '') + value.logicalName;
        }

        if (!returnValue) {
            runTime.transformColumns.forEach(column => {
                if (!returnValue && column.key === value.key) {
                    returnValue = value.logicalName;
                }
            });
        }

        if (!returnValue && this.transform.joinDatalinkTable) {
            let joinTable = this.transform.joinDatalinkTable;
            joinTable.dexihDatalinkColumns.forEach(column => {
                if (!returnValue && column.key === value.key) {
                    returnValue = '(' + joinTable.name + ') ' + value.logicalName;
                }
            });
        }

        if (returnValue) {
            if (expectedDataType == null || expectedDataType === eTypeCode.Unknown || value.dataType === expectedDataType) {
                return { text: returnValue, valid: true, error: '' }
            } else {
                return { text: returnValue, error: '(inconsistent datatype ' + eTypeCode[value.dataType] + ')', valid: false }
            }
        } else {
            return { text: value.logicalName, error: '(Invalid column) ', valid: false }
        }
    }

    private describeStaticValue(value: string): string {
        if (value === ' ') {
            return '<space>';
        }
        if (value === '') {
            return '<blank>';
        }
        if (value == null) {
            return '<null>';
        }
        return '"' + value + '"';
    }
}
