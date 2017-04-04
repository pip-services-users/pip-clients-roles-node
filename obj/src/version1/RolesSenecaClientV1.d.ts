import { CommandableSenecaClient } from 'pip-services-net-node';
import { IRolesClientV1 } from './IRolesClientV1';
export declare class RolesSenecaClientV1 extends CommandableSenecaClient implements IRolesClientV1 {
    constructor(config?: any);
    getRoles(correlationId: string, userId: string, callback: (err: any, roles: string[]) => void): void;
    setRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    grantRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    revokeRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    authorize(correlationId: string, userId: string, roles: string[], callback: (err: any, authorized: boolean) => void): void;
}
