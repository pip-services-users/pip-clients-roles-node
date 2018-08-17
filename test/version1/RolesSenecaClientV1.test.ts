let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { RolesMemoryPersistence } from 'pip-services-roles-node';
import { RolesController } from 'pip-services-roles-node';
import { RolesSenecaServiceV1 } from 'pip-services-roles-node';
import { IRolesClientV1 } from '../../src/version1/IRolesClientV1';
import { RolesSenecaClientV1 } from '../../src/version1/RolesSenecaClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('RolesSenecaClient', () => {
    let service: RolesSenecaServiceV1;
    let client: RolesSenecaClientV1;
    let persistence: RolesMemoryPersistence;
    let fixture: RolesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        persistence = new RolesMemoryPersistence();
        let controller = new RolesController();

        service = new RolesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-roles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-roles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-roles', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new RolesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new RolesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    setup((done) => {
        persistence.clear(null, done);
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
