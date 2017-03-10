"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var RolesMemoryPersistence = require('pip-services-roles/lib/src/persistence/RolesMemoryPersistence').RolesMemoryPersistence;
var RolesController = require('pip-services-roles/lib/src/logic/RolesController').RolesController;
var RolesRestService = require('pip-services-roles/lib/src/services/version1/RolesRestService').RolesRestService;
var RolesRestClient_1 = require('../../src/version1/RolesRestClient');
var RolesClientFixture_1 = require('./RolesClientFixture');
var restConfig = pip_services_runtime_node_2.ComponentConfig.fromTuples('endpoint.protocol', 'http', 'endpoint.host', 'localhost', 'endpoint.port', 3000);
suite('RolesRestClient', function () {
    var db = new RolesMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new RolesController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new RolesRestService();
    service.configure(restConfig);
    var client = new RolesRestClient_1.RolesRestClient();
    client.configure(restConfig);
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, service, client);
    var fixture = new RolesClientFixture_1.RolesClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.close(components, done);
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
