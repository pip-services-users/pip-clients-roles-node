let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';

let RolesMemoryPersistence = require('pip-services-roles/lib/src/persistence/RolesMemoryPersistence').RolesMemoryPersistence;
let RolesController = require('pip-services-roles/lib/src/logic/RolesController').RolesController;
let RolesRestService = require('pip-services-roles/lib/src/services/version1/RolesRestService').RolesRestService;

import { RolesRestClient } from '../../src/version1/RolesRestClient';
import { RolesClientFixture } from './RolesClientFixture';

let restConfig = ComponentConfig.fromTuples(
    'endpoint.protocol', 'http',
    'endpoint.host', 'localhost',
    'endpoint.port', 3000
);

suite('RolesRestClient', ()=> {    
    let db = new RolesMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new RolesController();
    ctrl.configure(new ComponentConfig());

    let service = new RolesRestService();
    service.configure(restConfig);

    let client = new RolesRestClient();
    client.configure(restConfig);

    let components = ComponentSet.fromComponents(db, ctrl, service, client);
    let fixture = new RolesClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        LifeCycleManager.close(components, done);
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('Get and Set Roles', (done) => {
        fixture.testGetAndSetRoles(done);
    });

    test('Grant and Revoke Roles', (done) => {
        fixture.testGrantAndRevokeRoles(done);
    });

    test('Authorize', (done) => {
        fixture.testAuthorize(done);
    });
});