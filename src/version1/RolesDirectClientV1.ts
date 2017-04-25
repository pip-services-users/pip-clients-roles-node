import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IRolesClientV1 } from './IRolesClientV1';
//import { IRolesController } from 'pip-services-Roles-node';

export class RolesDirectClientV1 extends DirectClient<any> implements IRolesClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-roles", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getRoles(correlationId: string, userId: string,
        callback: (err: any, roles: string[]) => void) {
        let timing = this.instrument(correlationId, 'roles.get_roles');
        this._controller.getRoles(correlationId, userId, (err, roles) => {
            timing.endTiming();
            callback(err, roles);
        });
    }

    public setRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        let timing = this.instrument(correlationId, 'roles.set_roles');
        this._controller.setRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback) callback(err, roles);
        });
    }

    public grantRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        let timing = this.instrument(correlationId, 'roles.grant_roles');
        this._controller.grantRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback) callback(err, roles);
        });
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[],
        callback?: (err: any, roles: string[]) => void) {
        let timing = this.instrument(correlationId, 'roles.revoke_roles');
        this._controller.revokeRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback) callback(err, roles);
        });
    }
    
    public authorize(correlationId: string, userId: string, roles: string[],
        callback: (err: any, authorized: boolean) => void) {
        let timing = this.instrument(correlationId, 'roles.authorize');
        this._controller.authorize(correlationId, userId, roles, (err, authorized) => {
            timing.endTiming();
            callback(err, authorized);
        });
    }
}