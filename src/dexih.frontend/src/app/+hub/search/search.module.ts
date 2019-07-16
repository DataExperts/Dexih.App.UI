import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';
import { ObjectTypePipe } from './object-type.pipe';
import { HubSharedModule} from '../hub.shared.module';

@NgModule({
    imports: [
        SharedModule,
        HubSharedModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [SearchComponent, ObjectTypePipe],
    providers: [],
})
export class SearchModule { }
