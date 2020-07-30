import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { AuthService } from '../../../../+auth/auth.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';
import { DexihDatalinkProfile, eFunctionType } from '../../../../shared/shared.models';

@Component({
    selector: 'profile-rules',
    templateUrl: './profile-rules.component.html'
})


export class DatalinkEditProfileRulesComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private hubCache: HubCache;

    private _subscription: Subscription;

    selectedProfileRules: Array<DexihDatalinkProfile> = new Array<DexihDatalinkProfile>();

    columns = [
        { name: 'name', title: 'Profile Name', format: '' },
        { name: 'description', title: 'Description', format: '' }
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<DexihDatalinkProfile>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
            ).subscribe(async result => {
                this.hubCache = result[0];
                this.datalinkForm = result[1];

                if (this.datalinkForm) {
                    // load the cache first
                    if (this.hubCache.isLoaded()) {
                        this.selectedProfileRules = this.datalinkForm.value.dexihDatalinkProfiles;
                        let profileRules = (await this.hubService.GetFunctionsByType(eFunctionType.Profile))
                            .map(profile => {

                                let profileRuleForm = this.selectedProfileRules.find(c =>
                                    c.functionAssemblyName === profile.functionAssemblyName
                                    && c.functionClassName === profile.functionClassName
                                    && c.functionMethodName === profile.functionMethodName);

                                return {
                                    name: profile.name,
                                    description: profile.description,
                                    functionAssemblyName: profile.functionAssemblyName,
                                    functionClassName: profile.functionClassName,
                                    functionMethodName: profile.functionMethodName,
                                    detailedResults: profileRuleForm ? profileRuleForm.detailedResults : false
                                }
                        });
                        this._tableData.next(profileRules);
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }

    }

    updateProfileRules() {
        if (this.datalinkForm) {
            let profiles = <FormArray>this.datalinkForm.controls.dexihDatalinkProfiles;

            // reset existing profiles.
            profiles.controls.forEach(profile => {
                let profileFormGroup = <FormGroup>profile;
                profileFormGroup.controls.isValid.setValue(false);
            });

            // add the selected profiles, with isValid = true
            this.selectedProfileRules.forEach(profile => {
                let profileRuleForm = <FormGroup>profiles.controls.find(c => c.value.functionAssemblyName === profile.functionAssemblyName
                    && c.value.functionClassName === profile.functionClassName
                    && c.value.functionMethodName === profile.functionMethodName);

                if (!profileRuleForm) {
                    let profileRule = new DexihDatalinkProfile();
                    profileRule.key = this.hubCache.getNextSequence();
                    profileRule.datalinkKey = this.datalinkForm.value.key;
                    profileRule.functionAssemblyName = profile.functionAssemblyName;
                    profileRule.functionClassName = profile.functionClassName;
                    profileRule.functionMethodName = profile.functionMethodName;
                    profileRule.detailedResults = profile.detailedResults;
                    profileRule.isValid = true;
                    profileRuleForm = this.editDatalinkService.hubFormsService.datalinkProfileFormGroup(profileRule);
                    profiles.push(profileRuleForm);
                } else {
                    profileRuleForm.controls.isValid.setValue(true);
                }
            });

            for (let i = profiles.controls.length - 1; i >= 0; i--) {
                if (!profiles.controls[i].value.isValid) {
                    profiles.removeAt(i);
                }
            }
        }
    }

    updateProfileRule(profile: DexihDatalinkProfile) {
        let profiles = <FormArray>this.datalinkForm.controls.dexihDatalinkProfiles;

        let profileRuleForm = <FormGroup>profiles.controls.find(c => c.value.functionAssemblyName === profile.functionAssemblyName
            && c.value.functionClassName === profile.functionClassName
            && c.value.functionMethodName === profile.functionMethodName);

        profileRuleForm.controls.detailedResults.setValue(profile.detailedResults);
        this.editDatalinkService.hubFormsService.hasChanged = true;
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.updateProfileRules();
    }

    hasChanged(items) {
        if (items) {
            this.selectedProfileRules = items;
        }
        this.updateProfileRules();
        this.editDatalinkService.hubFormsService.hasChanged = true;
    }

}
