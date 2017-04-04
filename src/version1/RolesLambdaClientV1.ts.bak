let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { FilterParams } from 'pip-services-runtime-node';
import { PagingParams } from 'pip-services-runtime-node';
import { Converter } from 'pip-services-runtime-node';
import { LambdaClient } from 'pip-services-runtime-node';

import { IRolesClient } from './IRolesClient';

export class RolesLambdaClient extends LambdaClient implements IRolesClient {       
	/**
	 * Unique descriptor for the RolesLambdaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-roles", "lambda", "1.0"
	);
    
    constructor(config?: any) {
        super(RolesLambdaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getRoles(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
                
        this.call(
            'get_roles', 
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
            'set_roles', 
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
            'grant_roles', 
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
            'revoke_roles', 
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
            'authorize', 
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
