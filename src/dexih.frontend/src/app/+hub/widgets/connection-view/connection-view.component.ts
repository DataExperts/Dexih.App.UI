import { Component, OnInit, Input } from '@angular/core';
import { DexihConnection } from '../../hub.models';
import { HubService } from '../../hub.service';
import { ConnectionReference } from '../../hub.remote.models';

@Component({
    selector: 'connection-view',
    templateUrl: './connection-view.component.html'
})

export class ConnectionViewComponent implements OnInit {
    @Input() connection: DexihConnection;

    connectionReference: ConnectionReference;

    constructor(private hubService: HubService) {

    }

    ngOnInit() {
        this.hubService.getRemoteLibrariesObservable().subscribe(remoteLibraries => {
            if ( remoteLibraries ) {
                this.connectionReference = remoteLibraries.GetConnectionReference(this.connection);
            }
        })
    }
}
