import { IRolesClientV1 } from './IRolesClientV1';

export class RolesNullClientV1 implements IRolesClientV1 {
    public getRoles(correlationId: string, userId: string,
        callback: (err: any, roles: string[]) => void) {
        callback(null, []);
    }

    public setRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        if (callback) callback(null, roles || []);
    }

    public grantRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        if (callback) callback(null, roles);
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        if (callback) callback(null, []);
    }
    
    public authorize(correlationId: string, userId: string, roles: string[],
        callback: (err: any, authorized: boolean) => void) {
        callback(null, true);
    }
}
