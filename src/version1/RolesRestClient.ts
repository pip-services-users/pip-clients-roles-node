let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { Converter } from 'pip-services-runtime-node';
import { RestClient } from 'pip-services-runtime-node';

import { IRolesClient } from './IRolesClient';

export class RolesRestClient extends RestClient implements IRolesClient {       
	/**
	 * Unique descriptor for the RolesRestClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-roles", "rest", "1.0"
	);
    
    constructor(config?: any) {
        super(RolesRestClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getRoles(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
                        
        this.call('get', 
            '/roles/' + userId,
            {
                correlation_id: correlationId
            }, 
            callback
        );
    }

    public setRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.set_roles', callback);
                
        this.call('post', 
            '/roles/' + userId,
            {
                correlation_id: correlationId
            }, 
            { 
                roles: roles
            }, 
            callback
        );
    }

    public grantRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.grant_role', callback);
                
        this.call('put', 
            '/roles/' + userId,
            {
                correlation_id: correlationId,
                roles: roles
            },
            callback
        );
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.revoke_role', callback);
                
        this.call('delete', 
            '/roles/' + userId,
            {
                correlation_id: correlationId,
                roles: roles
            },
            callback
        );
    }

    public authorize(correlationId: string, userId: string, roles: string[], callback) {
        callback = this.instrument(correlationId, 'roles.authorize', callback);
                
        this.call('get', 
            '/roles/' + userId + '/authorize',
            {
                correlation_id: correlationId,
                roles: roles
            },
            (err, authorized) => {
                authorized = Converter.toBoolean(authorized);
                callback(err, authorized);
            }
        );
    }

}
