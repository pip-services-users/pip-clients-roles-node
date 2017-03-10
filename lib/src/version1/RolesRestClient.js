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
var pip_services_runtime_node_6 = require('pip-services-runtime-node');
var RolesRestClient = (function (_super) {
    __extends(RolesRestClient, _super);
    function RolesRestClient(config) {
        _super.call(this, RolesRestClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    RolesRestClient.prototype.getRoles = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'roles.get_roles', callback);
        this.call('get', '/roles/' + userId, {
            correlation_id: correlationId
        }, callback);
    };
    RolesRestClient.prototype.setRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.set_roles', callback);
        this.call('post', '/roles/' + userId, {
            correlation_id: correlationId
        }, {
            roles: roles
        }, callback);
    };
    RolesRestClient.prototype.grantRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.grant_role', callback);
        this.call('put', '/roles/' + userId, {
            correlation_id: correlationId,
            roles: roles
        }, callback);
    };
    RolesRestClient.prototype.revokeRoles = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.revoke_role', callback);
        this.call('delete', '/roles/' + userId, {
            correlation_id: correlationId,
            roles: roles
        }, callback);
    };
    RolesRestClient.prototype.authorize = function (correlationId, userId, roles, callback) {
        callback = this.instrument(correlationId, 'roles.authorize', callback);
        this.call('get', '/roles/' + userId + '/authorize', {
            correlation_id: correlationId,
            roles: roles
        }, function (err, authorized) {
            authorized = pip_services_runtime_node_5.Converter.toBoolean(authorized);
            callback(err, authorized);
        });
    };
    /**
     * Unique descriptor for the RolesRestClient component
     */
    RolesRestClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-roles", "rest", "1.0");
    return RolesRestClient;
}(pip_services_runtime_node_6.RestClient));
exports.RolesRestClient = RolesRestClient;
