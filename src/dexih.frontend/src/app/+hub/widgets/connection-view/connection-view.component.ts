import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihConnection, ConnectionReference } from '../../../shared/shared.models';

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
                this.connectionReference = this.hubService.GetConnectionReference(this.connection);
            }
        })
    }
}
