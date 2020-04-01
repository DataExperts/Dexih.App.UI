import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routing } from './public.routing';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicService } from './public.service';
import { PublicComponent } from './public.component';
import { RibbonModule } from '../shared/layout/ribbon';

@NgModule({
    imports: [
        SharedModule,
        Routing,
        ReactiveFormsModule,
        RibbonModule
    ],
    declarations: [
        PublicComponent,
    ],
    providers: [PublicService],
    exports: []
})
export class PublicModule {

    static forRoot(): ModuleWithProviders<PublicModule> {
        return {
            ngModule: PublicModule,
            providers: [PublicService]
        };
    }
}
