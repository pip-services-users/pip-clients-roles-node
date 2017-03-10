import { IClient } from 'pip-services-runtime-node';

export interface IRolesClient extends IClient {
    getRoles(correlationId: string, userId: string, callback: any): void;
    setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
    grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
    revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
    authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
}
