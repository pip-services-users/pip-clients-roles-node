"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var RolesLambdaClient_1 = require('../../src/version1/RolesLambdaClient');
var RolesClientFixture_1 = require('./RolesClientFixture');
var options = new pip_services_runtime_node_3.DynamicMap(require('../../../config/config'));
var clientOptions = options.get('clients');
clientOptions = _.isArray(clientOptions) ? clientOptions : [clientOptions];
var lambdaOptions = _.find(clientOptions, function (o) {
    return (o.type || (o.identity || {}).type) == 'lambda';
});
suite('RolesLambdaClient', function () {
    // Skip test if lambda is not configured
    if (lambdaOptions == null)
        return;
    var config = pip_services_runtime_node_2.ComponentConfig.fromValue(lambdaOptions);
    var client = new RolesLambdaClient_1.RolesLambdaClient();
    client.configure(config);
    var fixture = new RolesClientFixture_1.RolesClientFixture(client);
    suiteSetup(function (done) {
        client.link(new pip_services_runtime_node_1.ComponentSet());
        client.open(done);
    });
    suiteTeardown(function (done) {
        client.close(done);
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
