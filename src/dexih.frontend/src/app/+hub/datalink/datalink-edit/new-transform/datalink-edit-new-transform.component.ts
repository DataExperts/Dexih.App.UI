import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { TransformReference, RemoteLibraries, transformTypes } from '../../../hub.remote.models';


@Component({
    selector: 'datalink-edit-new-transform',
    templateUrl: './datalink-edit-new-transform.component.html'
})

export class DatalinkEditNewTransformComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;

    public transforms: Array<{transformReference: TransformReference, icon: string}>;
    public position: number;

    constructor(
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router

    ) { }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getRemoteLibrariesObservable(),
            ).subscribe(result => {
                let remoteLibraries = result[3];

                this.transforms = [];
                let userConfigTransforms = remoteLibraries.GetUserConfigTransformReference();

                userConfigTransforms.forEach(transform => {
                    let transformType = transformTypes.find(c => c.key === transform.transformType);

                    let icon = '';
                    if (transformType) {
                        icon = transformType.icon;
                    }

                    this.transforms.push({transformReference: transform, icon: icon })
                })

                this.position = + result[1]['position'];

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'New Transform');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }


    insert(transform: TransformReference) {
        let newDatalinkTransformForm = this.editDatalinkService.insertDatalinkTransform(this.position, transform);
        this.router.navigate(['transform', newDatalinkTransformForm.value.key], { relativeTo: this.route.parent });
    }

    close() {
        this.authService.navigateUp();
    }
}
