"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class RolesSenecaClientV1 extends pip_services_net_node_1.CommandableSenecaClient {
    constructor(config) {
        super('roles');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getRoles(correlationId, userId, callback) {
        this.callCommand('get_roles', correlationId, {
            user_id: userId
        }, callback);
    }
    setRoles(correlationId, userId, roles, callback) {
        this.callCommand('set_roles', correlationId, {
            user_id: userId,
            roles: roles
        }, callback);
    }
    grantRoles(correlationId, userId, roles, callback) {
        this.callCommand('grant_roles', correlationId, {
            user_id: userId,
            roles: roles
        }, callback);
    }
    revokeRoles(correlationId, userId, roles, callback) {
        this.callCommand('revoke_roles', correlationId, {
            user_id: userId,
            roles: roles
        }, callback);
    }
    authorize(correlationId, userId, roles, callback) {
        this.callCommand('authorize', correlationId, {
            user_id: userId,
            roles: roles
        }, (err, result) => {
            callback(err, result ? result.authorized : null);
        });
    }
}
exports.RolesSenecaClientV1 = RolesSenecaClientV1;
//# sourceMappingURL=RolesSenecaClientV1.js.map