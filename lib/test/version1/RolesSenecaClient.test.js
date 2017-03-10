"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var RolesMemoryPersistence = require('pip-services-roles/lib/src/persistence/RolesMemoryPersistence').RolesMemoryPersistence;
var RolesController = require('pip-services-roles/lib/src/logic/RolesController').RolesController;
var RolesSenecaService = require('pip-services-roles/lib/src/services/version1/RolesSenecaService').RolesSenecaService;
var RolesSenecaClient_1 = require('../../src/version1/RolesSenecaClient');
var RolesClientFixture_1 = require('./RolesClientFixture');
suite('RolesSenecaClient', function () {
    var db = new RolesMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new RolesController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new RolesSenecaService();
    service.configure(new pip_services_runtime_node_2.ComponentConfig());
    var client = new RolesSenecaClient_1.RolesSenecaClient();
    client.configure(new pip_services_runtime_node_2.ComponentConfig());
    var seneca = new pip_services_runtime_node_4.SenecaAddon();
    seneca.configure(new pip_services_runtime_node_2.ComponentConfig());
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    var fixture = new RolesClientFixture_1.RolesClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        seneca.getSeneca().close(function () {
            pip_services_runtime_node_3.LifeCycleManager.close(components, done);
        });
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('Get and Set Roles', function (done) {
        fixture.testGetAndSetRoles(done);
    });
    test('Grant and Revoke Roles', function (done) {
        fixture.testGrantAndRevokeRoles(done);
    });
    test('Authorize', function (done) {
        fixture.testAuthorize(done);
    });
});
