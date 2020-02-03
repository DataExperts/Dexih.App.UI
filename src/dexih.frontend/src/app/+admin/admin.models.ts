export class UserAuthorization {
    public hubQuota = 1;
    public inviteQuota = 5;
    public firstName: string = null;
    public lastName: string = null;
    public terms = false;
    public subscription = false;
    public isEnabled = false;
    public isRegistered = false;
    public isInvited = false;

    public accessFailedCount = 0;

    public email: string = null;
    public emailConfirmed = false;

    public userName: string = null;

    public id: string = null;

    public lockoutEnabled = false;
    public lockoutEnd: Date = null;

    public logins: UserLogin[];
    public claims: UserClaim[];

    public twoFactorEnabled = false;
    public phoneNumber: string = null;
    public phoneNumberConfirmed = false;

    public roles: string[];

}

export class UserLogin {
    public loginProvider: string = null;
    public providerDisplayName: string = null;
    public providerKey: string = null;
    public userId: string = null;
}

export class UserClaim {
    public issuer: string = null;
    public originalIssuer: string = null;
    public type: string = null;
    public valueType: string = null;
    public value: string = null;
}

export class Invites {
    public emails: string[] = [];
    public hubQuota = 1;
    public inviteQuota = 5;
    public role = eRole.User;
}

export enum eRole {
    Administrator = 1,
    Manager = 2,
    User = 3,
    Viewer = 4,
    None = 5
}
export const roles = [
    {key: eRole.Administrator, name: 'Administrator'},
    {key: eRole.Manager, name: 'Manager'},
    {key: eRole.User, name: 'User'},
    {key: eRole.Viewer, name: 'Viewer'},
    {key: eRole.None, name: 'None'},
];
