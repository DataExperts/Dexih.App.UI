import { RemoteLibraries } from '../+hub/hub.remote.models';

export class EntityBase {
    public createDate: string;
    public updateDate: string;
    public isValid = true;
}
export class GlobalCache {
    public googleClientId: string;
    public microsoftClientId: string;
    public googleMapsAPIKey: string;

    public buildVersion: string;
    public buildDate: string;

    public defaultRemoteLibraries: RemoteLibraries;
}


