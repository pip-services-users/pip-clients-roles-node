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
var RolesLambdaClient = (function (_super) {
    __extends(RolesLambdaClient, _super);
    function RolesLambdaClient(config) {
        _super.call(this, RolesLambdaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    RolesLambdaClient.prototype.getRoles = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
        this.call('get_roles', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    RolesLambdaClient.prototype.setRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.set_roles', callback);
        this.call('set_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesLambdaClient.prototype.grantRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.grant_roles', callback);
        this.call('grant_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesLambdaClient.prototype.revokeRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.revoke_roles', callback);
        this.call('revoke_roles', {
            correlation_id: correlationId,
            user_id: userId,
            roles: roles
        }, callback);
    };
    RolesLambdaClient.prototype.authorize = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.authorize', callback);
        this.call('authorize', {
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
     * Unique descriptor for the RolesLambdaClient component
     */
    RolesLambdaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-roles", "lambda", "1.0");
    return RolesLambdaClient;
}(pip_services_runtime_node_5.LambdaClient));
exports.RolesLambdaClient = RolesLambdaClient;
