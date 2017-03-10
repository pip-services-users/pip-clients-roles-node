let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { SenecaClient } from 'pip-services-runtime-node';

import { IRolesClient } from './IRolesClient';

export class RolesSenecaClient extends SenecaClient implements IRolesClient {       
	/**
	 * Unique descriptor for the RolesSenecaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-roles", "seneca", "1.0"
	);
    
    constructor(config?: any) {
        super(RolesSenecaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
                
    public getRoles(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
                
        this.call(
            'roles', 'get_roles', 
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );
    }

    public setRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.set_roles', callback);

        this.call(
            'roles', 'set_roles', 
            {
                correlation_id: correlationId,
                user_id: userId,
                roles: roles
            }, 
            callback
        );
    }

    public grantRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.grant_roles', callback);

        this.call(
            'roles', 'grant_roles', 
            {
                correlation_id: correlationId,
                user_id: userId,
                roles: roles
            }, 
            callback
        );
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.revoke_roles', callback);

        this.call(
            'roles', 'revoke_roles', 
            {
                correlation_id: correlationId,
                user_id: userId,
                roles: roles
            }, 
            callback
        );
    }

    public authorize(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.authorize', callback);

        this.call(
            'roles', 'authorize', 
            {
                correlation_id: correlationId,
                user_id: userId,
                roles: roles
            }, 
            (err, result) => {
                if (err) callback(err);
                else {
                    let authorized = result.authorized;
                    callback(err, authorized);
                }
            }
        );
    }
    
}
