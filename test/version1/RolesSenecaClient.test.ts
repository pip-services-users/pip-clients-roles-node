let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';
import { SenecaAddon } from 'pip-services-runtime-node';

let RolesMemoryPersistence = require('pip-services-roles/lib/src/persistence/RolesMemoryPersistence').RolesMemoryPersistence;
let RolesController = require('pip-services-roles/lib/src/logic/RolesController').RolesController;
let RolesSenecaService = require('pip-services-roles/lib/src/services/version1/RolesSenecaService').RolesSenecaService;

import { RolesSenecaClient } from '../../src/version1/RolesSenecaClient';
import { RolesClientFixture } from './RolesClientFixture';

suite('RolesSenecaClient', ()=> {        
    let db = new RolesMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new RolesController();
    ctrl.configure(new ComponentConfig());

    let service = new RolesSenecaService();
    service.configure(new ComponentConfig());

    let client = new RolesSenecaClient();
    client.configure(new ComponentConfig());

    let seneca = new SenecaAddon();
    seneca.configure(new ComponentConfig());

    let components = ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    let fixture = new RolesClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        seneca.getSeneca().close(() => {
            LifeCycleManager.close(components, done);
        });
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