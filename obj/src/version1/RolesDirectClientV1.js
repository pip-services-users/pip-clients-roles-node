"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class RolesDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-roles", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getRoles(correlationId, userId, callback) {
        let timing = this.instrument(correlationId, 'roles.get_roles');
        this._controller.getRoles(correlationId, userId, (err, roles) => {
            timing.endTiming();
            callback(err, roles);
        });
    }
    setRoles(correlationId, userId, roles, callback) {
        let timing = this.instrument(correlationId, 'roles.set_roles');
        this._controller.setRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback)
                callback(err, roles);
        });
    }
    grantRoles(correlationId, userId, roles, callback) {
        let timing = this.instrument(correlationId, 'roles.grant_roles');
        this._controller.grantRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback)
                callback(err, roles);
        });
    }
    revokeRoles(correlationId, userId, roles, callback) {
        let timing = this.instrument(correlationId, 'roles.revoke_roles');
        this._controller.revokeRoles(correlationId, userId, roles, (err, roles) => {
            timing.endTiming();
            if (callback)
                callback(err, roles);
        });
    }
    authorize(correlationId, userId, roles, callback) {
        let timing = this.instrument(correlationId, 'roles.authorize');
        this._controller.authorize(correlationId, userId, roles, (err, authorized) => {
            timing.endTiming();
            callback(err, authorized);
        });
    }
}
exports.RolesDirectClientV1 = RolesDirectClientV1;
//# sourceMappingURL=RolesDirectClientV1.js.map