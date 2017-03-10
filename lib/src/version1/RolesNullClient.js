"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var RolesNullClient = (function (_super) {
    __extends(RolesNullClient, _super);
    function RolesNullClient(config) {
        _super.call(this, RolesNullClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    RolesNullClient.prototype.getRoles = function (correlationId, userId, callback) {
        if (callback)
            callback(null, []);
    };
    RolesNullClient.prototype.setRoles = function (correlationId, userId, roles, callback) {
        if (callback)
            callback(null, roles || []);
    };
    RolesNullClient.prototype.grantRoles = function (correlationId, userId, roles, callback) {
        if (callback)
            callback(null, roles);
    };
    RolesNullClient.prototype.revokeRoles = function (correlationId, userId, roles, callback) {
        if (callback)
            callback(null, []);
    };
    RolesNullClient.prototype.authorize = function (correlationId, userId, roles, callback) {
        if (callback)
            callback(null, true);
    };
    /**
     * Unique descriptor for the RolesNullClient component
     */
    RolesNullClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-roles", "null", "1.0");
    return RolesNullClient;
}(pip_services_runtime_node_5.AbstractClient));
exports.RolesNullClient = RolesNullClient;
