let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IRolesClient } from '../../src/version1/IRolesClient';

let ROLES = ['Role 1', 'Role 2', 'Role 3'];

export class RolesClientFixture {
    private _client: IRolesClient;
    
    constructor(client: IRolesClient) {
        this._client = client;
    }

    testGetAndSetRoles(done) {
        async.series([
        // Update party roles
            (callback) => {
                this._client.setRoles(
                    null,
                    '1',
                    ROLES,
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 3);

                        callback();
                    }
                );
            },
        // Read and check party roles
            (callback) => {
                this._client.getRoles(
                    null,
                    '1',
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 3);

                        callback();
                    }
                );
            }
        ], done);
    }

    testGrantAndRevokeRoles(done) {
        async.series([
        // Grant roles first time
            (callback) => {
                this._client.grantRoles(
                    null,
                    '1',
                    ['Role 1'],
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 1);
                        assert.sameMembers(roles, ['Role 1']);

                        callback(err);
                    }
                );
            },
        // Grant roles second time
            (callback) => {
                this._client.grantRoles(
                    null,
                    '1',
                    ['Role 1', 'Role 2', 'Role 3'],
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 3);
                        assert.sameMembers(roles, ['Role 1', 'Role 2', 'Role 3']);

                        callback(err);
                    }
                );
            },
        // Revoke roles first time
            (callback) => {
                this._client.revokeRoles(
                    null,
                    '1',
                    ['Role 1'],
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 2);
                        assert.sameMembers(roles, ['Role 2', 'Role 3']);

                        callback(err);
                    }
                );
            },
        // Get roles
            (callback) => {
                this._client.getRoles(
                    null,
                    '1',
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 2);
                        assert.sameMembers(roles, ['Role 2', 'Role 3']);

                        callback(err);
                    });
            },
        // Revoke roles second time
            (callback) => {
                this._client.revokeRoles(
                    null,
                    '1',
                    ['Role 1', 'Role 2'],
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 1);
                        assert.sameMembers(roles, ['Role 3']);

                        callback(err);
                    }
                );
            }
        ], done);
    }

    testAuthorize(done) {
        async.series([
        // Grant roles
            (callback) => {
                this._client.grantRoles(
                    null,
                    '1',
                    ['Role 1', 'Role 2'],
                    (err, roles) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(roles, 2);

                        callback(err);
                    }
                );
            },
        // Authorize positively
            (callback) => {
                this._client.authorize(
                    null,
                    '1',
                    ['Role 1'],
                    (err, authorized) => {
                        assert.isNull(err);

                        assert.isTrue(authorized);

                        callback(err);
                    }
                );
            },
        // Authorize negatively
            (callback) => {
                this._client.authorize(
                    null,
                    '1',
                    ['Role 2', 'Role 3'],
                    (err, authorized) => {
                        assert.isNull(err);

                        assert.isFalse(authorized);

                        callback(err);
                    }
                );
            }
        ], done);
    }
        
}