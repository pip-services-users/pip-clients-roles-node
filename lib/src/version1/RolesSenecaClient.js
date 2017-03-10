"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var RolesSenecaClient = (function (_super) {
    __extends(RolesSenecaClient, _super);
    function RolesSenecaClient(config) {
        _super.call(this, RolesSenecaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    RolesSenecaClient.prototype.getRoles = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
        this.call('roles', 'get_roles', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    RolesSenecaClient.prototype.setRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.set_roles', callback);
        this.call('roles', 'set_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesSenecaClient.prototype.grantRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.grant_roles', callback);
        this.call('roles', 'grant_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesSenecaClient.prototype.revokeRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.revoke_roles', callback);
        this.call('roles', 'revoke_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesSenecaClient.prototype.authorize = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.authorize', callback);
        this.call('roles', 'authorize', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, function (err, result) {
            if (err)
                callback(err);
            else {
                var authorized = result.authorized;
                callback(err, authorized);
            }
        });
    };
    /**
     * Unique descriptor for the RolesSenecaClient component
     */
    RolesSenecaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-roles", "seneca", "1.0");
    return RolesSenecaClient;
}(pip_services_runtime_node_5.SenecaClient));
exports.RolesSenecaClient = RolesSenecaClient;
