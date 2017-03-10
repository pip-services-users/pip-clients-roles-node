import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { AbstractClient } from 'pip-services-runtime-node';

import { IRolesClient } from './IRolesClient';

export class RolesNullClient extends AbstractClient implements IRolesClient {       
	/**
	 * Unique descriptor for the RolesNullClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-roles", "null", "1.0"
	);
    
    constructor(config?: any) {
        super(RolesNullClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getRoles(correlationId: string, userId: string, callback) {
        if (callback) callback(null, []);
    }

    public setRoles(correlationId: string, userId: string, roles: string[], callback) {
        if (callback) callback(null, roles || []);
    }

    public grantRoles(correlationId: string, userId: string, roles: string[], callback) {
        if (callback) callback(null, roles);
    }

    public revokeRoles(correlationId: string, userId: string, roles: string[], callback) {
        if (callback) callback(null, []);
    }
    
    public authorize(correlationId: string, userId: string, roles: string[], callback) {
        if (callback) callback(null, true);
    }
}
