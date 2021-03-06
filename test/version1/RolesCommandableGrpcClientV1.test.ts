let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RolesMemoryPersistence } from 'pip-services-roles-node';
import { RolesController } from 'pip-services-roles-node';
import { RolesCommandableGrpcServiceV1 } from 'pip-services-roles-node';
import { IRolesClientV1 } from '../../src/version1/IRolesClientV1';
import { RolesCommandableGrpcClientV1 } from '../../src/version1/RolesCommandableGrpcClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RolesCommandableGrpcClientV1', ()=> {
    let service: RolesCommandableGrpcServiceV1;
    let client: RolesCommandableGrpcClientV1;
    let persistence: RolesMemoryPersistence;
    let fixture: RolesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        persistence = new RolesMemoryPersistence();
        let controller = new RolesController();

        service = new RolesCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-roles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-roles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-roles', 'service', 'commandable-grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RolesCommandableGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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
