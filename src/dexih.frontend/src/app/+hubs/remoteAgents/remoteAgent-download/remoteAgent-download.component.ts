import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../+auth/auth.service';
import { DexihHubAuth } from '../../../+auth/auth.models';
import { HubsService } from '../../hubs.service';
import { FormsService } from '../../../shared/forms/forms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { logLevel, eEnvironment, RemoteAgentSettings, logLevelItems, RemoteAgentSettingsSubset, eEnvironmentItems } from '../../../shared/shared.models';

@Component({
  selector: 'dexih-remoteAgent-download-form',
  templateUrl: './remoteAgent-download.component.html',
  providers: [FormsService]
})
export class RemoteAgentDownloadComponent implements OnInit, OnDestroy {
  public pageTitle: string;

  public downloading = false;
  public refreshingEncryptionKey = false;
  public refreshingUserToken = false;

  public logLevelItems = logLevelItems;
  public eEnvironmentItems = eEnvironmentItems.filter(c => c.key > 0);

  public embedUserName = true;
  public logLevel: logLevel = logLevel.Information;
  public environment: eEnvironment = eEnvironment.Windows;
  public hubs: DexihHubAuth[]

  constructor(
    private hubsService: HubsService,
    private authService: AuthService,
    public formsService: FormsService,
    private fb: FormBuilder,
    ) {
   }

  ngOnInit() {
        this.hubs = this.authService.getHubs()
        let remoteApplicationSettings = new RemoteAgentSettingsSubset();
        this.remoteAgentSettings(remoteApplicationSettings);
        this.logLevel = logLevel.Information;
  }

  ngOnDestroy() {
  }

  cancel() {
    this.authService.navigateUp();
  }

  download() {
    if (this.formsService.currentForm.valid) {
      this.downloading = true;
      this.hubsService.downloadRemoteAgent(this.embedUserName, this.environment, this.logLevel,
          this.formsService.currentForm.value).then(result => {
          this.downloading = false;
          this.hubsService.addHubSuccessMessage('Download successful.');
      }).catch(reason => {
          this.downloading = false;
          this.hubsService.addHubMessage(reason);
      });
    } else {
      this.formsService.showErrors();
    }
  }

  downloadRemoteSettings() {
    if (this.formsService.currentForm.valid) {
      this.downloading = true;
      this.hubsService.downloadRemoteSettings(this.embedUserName, this.environment, this.logLevel,
          this.formsService.currentForm.value).then(result => {
          this.downloading = false;
          this.hubsService.addHubSuccessMessage('Download successful.');
      }).catch(reason => {
          this.downloading = false;
          // this.hubsService.addHubErrorMessage(reason);
      });
    } else {
      this.formsService.showErrors();
    }
  }

  generateEncryptionKey() {
    this.refreshingEncryptionKey = true;

    this.authService.getRandomEncryptionKey().then(result => {
      this.formsService.currentForm.controls.encryptionKey.setValue(result);
      this.refreshingEncryptionKey = false;
    }).catch(reason => {
      this.hubsService.addHubErrorMessage(reason);
      this.refreshingEncryptionKey = false;
    });
  }

  generateUserToken() {
    this.refreshingUserToken = true;

    this.authService.getUserToken().then(result => {
      this.formsService.currentForm.controls.userToken.setValue(result.userToken);
      this.formsService.currentForm.controls.remoteAgentId.setValue(result.remoteAgentId);
      this.refreshingUserToken = false;
    }).catch(reason => {
      this.hubsService.addHubErrorMessage(reason);
      this.refreshingUserToken = false;
    });
  }

  public remoteAgentSettings(remoteAgent: RemoteAgentSettingsSubset) {
    const remoteAgentForm = this.fb.group({
      'name': [remoteAgent.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      'encryptionKey': [remoteAgent.encryptionKey, [
        Validators.required,
      ]]
    }
    );

    this.formsService.addMissing(remoteAgent, remoteAgentForm, new RemoteAgentSettingsSubset());
    this.formsService.clearFormSubscriptions();
    this.formsService.startForm(remoteAgentForm);
  }


}
