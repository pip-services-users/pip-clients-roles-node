"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const RolesNullClientV1_1 = require("../version1/RolesNullClientV1");
const RolesDirectClientV1_1 = require("../version1/RolesDirectClientV1");
const RolesHttpClientV1_1 = require("../version1/RolesHttpClientV1");
const RolesSenecaClientV1_1 = require("../version1/RolesSenecaClientV1");
class RolesClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(RolesClientFactory.NullClientV1Descriptor, RolesNullClientV1_1.RolesNullClientV1);
        this.registerAsType(RolesClientFactory.DirectClientV1Descriptor, RolesDirectClientV1_1.RolesDirectClientV1);
        this.registerAsType(RolesClientFactory.HttpClientV1Descriptor, RolesHttpClientV1_1.RolesHttpClientV1);
        this.registerAsType(RolesClientFactory.SenecaClientV1Descriptor, RolesSenecaClientV1_1.RolesSenecaClientV1);
    }
}
RolesClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-roles', 'factory', 'default', 'default', '1.0');
RolesClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-roles', 'client', 'null', 'default', '1.0');
RolesClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-roles', 'client', 'direct', 'default', '1.0');
RolesClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-roles', 'client', 'http', 'default', '1.0');
RolesClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-roles', 'client', 'seneca', 'default', '1.0');
exports.RolesClientFactory = RolesClientFactory;
//# sourceMappingURL=RolesClientFactory.js.map