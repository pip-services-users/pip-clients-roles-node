import { YamlConfigReader } from 'pip-services-commons-node';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';
import { RolesLambdaClientV1 } from '../../src/version1/RolesLambdaClientV1';

suite('RolesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: RolesLambdaClientV1;
    let fixture: RolesClientFixtureV1;

    setup((done) => {
        client = new RolesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new RolesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
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