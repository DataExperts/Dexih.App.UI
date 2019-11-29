import { Subscription } from 'rxjs';
import { DexihHubUser, eSharedAccess, eLoginProvider } from '../shared/shared.models';

export const logoUrl = 'assets/img/dexih/dex_logo_wide_raw.png';
export const logoSmallUrl = 'assets/img/dexih/dexih_small.png';

export class User {
        public email: string = null;
        public userName: string = null;
        public password: string = null;
        public rememberMe = false;
        public firstName: string = null;
        public lastName: string = null;
        public terms = false;
        public subscription = false;
        public code: string = null;
        public emailConfirmed = false;
        public isInvited = false;
        public inviteQuota = 0;

        // used when resetting passwords.
        public newPassword = '';
        public confirmPassword = '';

        public isAdmin: boolean;

    constructor(
        _email?: string,
        _userName?: string,
        _password?: string,
        _rememberMe?: boolean,
    ) {
        this.email = _email;
        this.userName = _userName;
        this.password = _password;
        this.rememberMe = _rememberMe;
    }
}

export class UserLoginInfo {
    public loginProvider: eLoginProvider = null;
    public providerDisplayName: string = null;
    public providerKey: string = null;
}

export class DexihHubAuth {
    public hubKey: number;
    public name: string;
    public description: string;
    public encryptionKey: string;
    public sharedAccess: eSharedAccess = eSharedAccess.Registered;
    public expiryDate: Date;

    public dexihHubUser: Array<DexihHubUser>;

    public createDate: string;
    public updateDate: string;
    public isValid = true;

}

export class ExternalLoginResult {
    public provider: string;
    public email: string;
    public isSignedIn: boolean;
    public isLocked: boolean;
    public isAlreadyRegistered: boolean;
}

export class ExternalLogin {
    public provider: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public providerKey: string;
    public authenticationToken: string;
}

export class Parameter {
    public key: string;
    public value;
}

export class Message {
    public reference: string;
    public time: Number;

    constructor(
        public success: boolean,
        public message: string,
        public exceptionDetails: string,
        public value: any
    ) {
        this.time = Date.now();
    }
}

// export class ManagedTask {
//     public reference: string;
//     public remoteAgentId: string;
//     public referenceKey: number;
//     public referenceId: string;
//     public status: eManagedTaskStatus;
//     public name: string;
//     public description: string;
//     public category: string;
//     public data: any;
//     public percentage: number;
//     public stepName: string;
//     public isCompleted: boolean;
//     public lastUpdate: string;
//     public success: boolean;
//     public message: string;
//     public exceptionDetails: string;

//     constructor() {
//         this.status = eManagedTaskStatus.Created;
//     }
// }

// export enum eManagedTaskStatus {
//     Created = <any>'Created',
//     Scheduled = <any>'Scheduled',
//     Queued = <any>'Queued',
//     Running = <any>'Running',
//     Cancelled = <any>'Cancelled',
//     Error = <any>'Error',
//     Completed = <any>'Completed',
//     FileWatching = <any>'FileWatching'
// }

// export class DexihRemoteAgent extends EntityBase {
//     public remoteAgentKey = 0;
//     public name: string = null;
//     public restrictIp: boolean = null;
//     public ipAddresses: string[] = null;
//     public remoteAgentId: string = null;
//     public userId: string = null;
//     public hashedToken: string = null;
//     public allowExternalConnect: boolean = null;
//     public lastLoginIpAddress: string = null;
//     public lastLoginDateTime: Date = null;

//     public activeAgents: DexihActiveAgent[];
// }

// export class DexihActiveAgent {
//     public remoteAgentKey: number;
//     public user: string;
//     public name: string;
//     public isRunning: boolean;
//     public ipAddress: string;
//     public instanceId: string;
//     public isEncrypted: boolean;
//     public dataPrivacyStatus: eDataPrivacyStatus;
//     public downloadUrls: DownloadUrl[];
//     public currentDownloadUrl: DownloadUrl;
//     public downloadUrlSummary: string;

//     public upgradeAvailable: boolean;
//     public version: string;
//     public latestVersion: string;
//     public latestDownloadUrl: string;
// }

// export enum eDataPrivacyStatus {
//     NotAllowed = <any>'NotAllowed',
//     Proxy = <any>'Proxy',
//     Lan = <any>'Lan',
//     Internet = <any>'Internet',
//     CustomUrl = <any>'CustomUrl',
// }

// export enum EDownloadUrlType {
//     Proxy = <any>'Proxy',
//     Direct = <any>'Direct',
// }

// export class DownloadUrl {
//     public url: string;
//     public downloadUrlType: EDownloadUrlType;
//     public isEncrypted: boolean;
//     public testStatus: string;
//     public testMessage: string;
// }

export class FileHandler {
    public id = Math.random().toString(36).substr(2, 9);
    public progress: number;
    public status: eFileStatus;
    public message: string;
    public httpSubscription: Subscription;
    public file: File;
    public url: string;

    public constructor(file: File, url: string) {
        this.file = file;
        this.status = eFileStatus.Waiting;
        this.progress = 0;
        this.url = url;
    }

    public isRunning(): boolean {
        switch (this.status) {
            case eFileStatus.Uploading:
            case eFileStatus.Downloading:
                return true;
        }

        return false;
    }

    public cancel() {
        if (this.httpSubscription) {
            this.httpSubscription.unsubscribe();
        }
    }
}

export enum eFileStatus {
    Waiting = <any>'Waiting',
    Uploading = <any>'Uploading',
    Downloading = <any>'Downloading',
    Complete = <any>'Complete',
    Error = <any>'Error',
    Cancelled = <any>'Cancelled'
}

export class RemoteToken {
    public user: string;
    public remoteAgentId: string;
    public userToken: string;
}

// export class PromiseWithCancel<T> implements Promise<T> {
//     then<TResult1 = T, TResult2 = never>(onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected?:
//    (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2> {
//         return this._promise.then(onfulfilled);
//     }

//     catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<T | TResult> {
//         return this._promise.catch(onrejected);
//     }

//     [Symbol.toStringTag]: string;
//     finally(onfinally?: () => void): Promise<T> {
//         return this._promise.finally(onfinally);
//     }

//     public constructor(executor: (
//         resolve: (value?: T | PromiseLike<T>) => void,
//         reject: (reason?: any) => void) => void, cancel: () => void) {

//         this._promise = new Promise<T>((resolve, reject) => {executor(resolve, reject)});
//       }

//     private _promise: Promise<T>;
//     private _cancel?: () => void;

//     onCancel(cancel?: () => void) {
//         this._cancel = cancel;
//     }

//     cancel() {
//         this._cancel();
//     }
// }

export class PromiseWithCancel<T> extends Promise<T> {

    private _cancel: CancelToken;

    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
        cancel: CancelToken = new CancelToken()) {
        super(executor);
        this._cancel = cancel;
    }

    public cancel() {
        if (this._cancel) {
            this._cancel.cancel();
        }
    }
}

export class CancelToken {
    public cancelMethod: () => void;

    // cancel the operation
    public cancel() {
        if (this.cancelMethod) {
            this.cancelMethod();
        }
    }
}

