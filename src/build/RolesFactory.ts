import { ComponentFactory } from 'pip-services-runtime-node';
import { DefaultFactory } from 'pip-services-runtime-node';

let Version1 = require('../version1');

export class RolesFactory extends ComponentFactory {
	public static Instance: RolesFactory = new RolesFactory();
	
	constructor() {
		super(DefaultFactory.Instance);

		this.register(Version1.RolesNullClient.Descriptor, Version1.RolesNullClient);
		this.register(Version1.RolesRestClient.Descriptor, Version1.RolesRestClient);
		this.register(Version1.RolesSenecaClient.Descriptor, Version1.RolesSenecaClient);
		this.register(Version1.RolesLambdaClient.Descriptor, Version1.RolesLambdaClient);
	}
	
}
