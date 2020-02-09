import { NgModule, ModuleWithProviders } from '@angular/core';
import { HubService } from './hub.service';
import { Routing } from './hub.routing';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HubSharedModule} from './hub.shared.module';

import { HubComponent } from './hub.component';
import { SummaryComponent } from './summary';
import { ItemEditGuard } from './item-edit.guard';

@NgModule({
    imports: [
        SharedModule,
        Routing,
        ReactiveFormsModule,
        HubSharedModule,
    ],
    declarations: [
        HubComponent,
        SummaryComponent,
    ],
    providers: [ ItemEditGuard ],
    exports: [ ]
})
export class HubModule {

    static forRoot(): ModuleWithProviders<HubModule> {
        return {
            ngModule: HubModule,
            providers: [HubService, ItemEditGuard]
        };
    }
}
