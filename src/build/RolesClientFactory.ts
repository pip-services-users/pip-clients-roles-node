import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { RolesNullClientV1 } from '../version1/RolesNullClientV1';
import { RolesDirectClientV1 } from '../version1/RolesDirectClientV1';
import { RolesHttpClientV1 } from '../version1/RolesHttpClientV1';
import { RolesSenecaClientV1 } from '../version1/RolesSenecaClientV1';
import { RolesLambdaClientV1 } from '../version1/RolesLambdaClientV1';

export class RolesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-roles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-roles', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-roles', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-roles', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-roles', 'client', 'seneca', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-roles', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RolesClientFactory.NullClientV1Descriptor, RolesNullClientV1);
		this.registerAsType(RolesClientFactory.DirectClientV1Descriptor, RolesDirectClientV1);
		this.registerAsType(RolesClientFactory.HttpClientV1Descriptor, RolesHttpClientV1);
		this.registerAsType(RolesClientFactory.SenecaClientV1Descriptor, RolesSenecaClientV1);
		this.registerAsType(RolesClientFactory.LambdaClientV1Descriptor, RolesLambdaClientV1);
	}
	
}
