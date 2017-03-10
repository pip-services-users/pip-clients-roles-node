"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var Version1 = require('../version1');
var RolesFactory = (function (_super) {
    __extends(RolesFactory, _super);
    function RolesFactory() {
        _super.call(this, pip_services_runtime_node_2.DefaultFactory.Instance);
        this.register(Version1.RolesNullClient.Descriptor, Version1.RolesNullClient);
        this.register(Version1.RolesRestClient.Descriptor, Version1.RolesRestClient);
        this.register(Version1.RolesSenecaClient.Descriptor, Version1.RolesSenecaClient);
        this.register(Version1.RolesLambdaClient.Descriptor, Version1.RolesLambdaClient);
    }
    RolesFactory.Instance = new RolesFactory();
    return RolesFactory;
}(pip_services_runtime_node_1.ComponentFactory));
exports.RolesFactory = RolesFactory;
