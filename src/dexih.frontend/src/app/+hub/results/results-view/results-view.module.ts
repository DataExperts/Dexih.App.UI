import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ResultsViewComponent } from './results-view.component';
import { StatsComponent } from './stats.component';
import { ProgressComponent } from './progress.component';
import { ProfileResultsComponent } from './profile-results.component';
import { PreviewResultsComponent } from './preview-results.component';

@NgModule({
    imports: [SharedModule],
    exports: [
        ResultsViewComponent
    ],
    declarations: [
        ResultsViewComponent,
        ProgressComponent,
        StatsComponent,
        ProfileResultsComponent,
        PreviewResultsComponent
    ],
    providers: [],
})
export class ResultsViewModule { }
