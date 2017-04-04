import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';

import { IRolesClientV1 } from './IRolesClientV1';

export class RolesSenecaClientV1 extends CommandableSenecaClient implements IRolesClientV1 {

    constructor(config?: any) {
        super('roles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getRoles(correlationId: string, userId: string,
        callback: (err: any, roles: string[]) => void) {
        this.callCommand(
            'get_roles',
            correlationId,
            {
                user_id: userId
            },
            callback
        );
    }

    public setRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        this.callCommand(
            'set_roles',
            correlationId,
            {
                user_id: userId,
                roles: roles
            },
            callback
        );
    }

    public grantRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        this.callCommand(
            'grant_roles',
            correlationId,
            {
                user_id: userId,
                roles: roles
            },
            callback
        );
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        this.callCommand(
            'revoke_roles',
            correlationId,
            {
                user_id: userId,
                roles: roles
            },
            callback
        );
    }
    
    public authorize(correlationId: string, userId: string, roles: string[],
        callback: (err: any, authorized: boolean) => void) {
        this.callCommand(
            'authorize',
            correlationId,
            {
                user_id: userId,
                roles: roles
            },
            (err, result) => {
                callback(err, result ? result.authorized : null);
            }
        );
    }

}
