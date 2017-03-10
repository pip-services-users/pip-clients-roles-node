declare module 'pip-clients-roles-node' {
	import { IClient } from 'pip-services-runtime-node';
	import { RestClient } from 'pip-services-runtime-node';
	import { LambdaClient } from 'pip-services-runtime-node';
	import { SenecaClient } from 'pip-services-runtime-node';
	import { AbstractClient } from 'pip-services-runtime-node';
	import { ComponentDescriptor } from 'pip-services-runtime-node';
	import { ComponentFactory } from 'pip-services-runtime-node';

    export class RolesFactory extends ComponentFactory {
        public static Instance: RolesFactory;	
        constructor();	
    }

    module Version1 {
        export interface IRolesClient extends IClient {
            getRoles(correlationId: string, userId: string, callback: any): void;
            setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
        }

        export class RolesRestClient extends RestClient implements IRolesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getRoles(correlationId: string, userId: string, callback: any): void;
            setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
        }

        export class RolesLambdaClient extends LambdaClient implements IRolesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getRoles(correlationId: string, userId: string, callback: any): void;
            setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
        }

        export class RolesSenecaClient extends SenecaClient implements IRolesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getRoles(correlationId: string, userId: string, callback: any): void;
            setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
        }

        export class RolesNullClient extends AbstractClient implements IRolesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getRoles(correlationId: string, userId: string, callback: any): void;
            setRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            grantRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            revokeRoles(correlationId: string, userId: string, roles: string[], callback: any): void;
            authorize(correlationId: string, userId: string, roles: string[], callback: any): void;
        }
    }
}
