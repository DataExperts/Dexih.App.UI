import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncryptionStatusIconComponent } from './encryption-status/encryption-status.component';
import { PrivacyStatusButtonComponent } from './privacy-status/privacy-status.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { PrintButtonComponent} from './print/print-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DexihComponentsModule
  ],
  declarations: [
    EncryptionStatusIconComponent,
    PrivacyStatusButtonComponent,
    DownloadButtonComponent,
    PrintButtonComponent
  ],
  exports: [
    EncryptionStatusIconComponent,
    PrivacyStatusButtonComponent,
    DownloadButtonComponent,
    PrintButtonComponent
  ],
})
export class DexihIconsModule {

}
