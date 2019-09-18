import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihConnection, ConnectionReference, eConnectionPurpose } from '../../../shared/shared.models';

@Component({
    selector: 'connection-view',
    templateUrl: './connection-view.component.html'
})

export class ConnectionViewComponent implements OnInit {
    @Input() connection: DexihConnection;

    connectionReference: ConnectionReference;
    eConnectionPurpose = eConnectionPurpose;

    constructor(private hubService: HubService) {

    }

    ngOnInit() {
        this.hubService.getRemoteLibrariesObservable().subscribe(async remoteLibraries => {
            if ( remoteLibraries ) {
                this.connectionReference = await this.hubService.GetConnectionReference(this.connection);
            }
        })
    }
}
