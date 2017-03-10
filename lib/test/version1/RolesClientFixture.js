"use strict";
var _ = require('lodash');
var async = require('async');
var assert = require('chai').assert;
var ROLES = ['Role 1', 'Role 2', 'Role 3'];
var RolesClientFixture = (function () {
    function RolesClientFixture(client) {
        this._client = client;
    }
    RolesClientFixture.prototype.testGetAndSetRoles = function (done) {
        var _this = this;
        async.series([
            // Update party roles
            function (callback) {
                _this._client.setRoles(null, '1', ROLES, function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 3);
                    callback();
                });
            },
            // Read and check party roles
            function (callback) {
                _this._client.getRoles(null, '1', function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 3);
                    callback();
                });
            }
        ], done);
    };
    RolesClientFixture.prototype.testGrantAndRevokeRoles = function (done) {
        var _this = this;
        async.series([
            // Grant roles first time
            function (callback) {
                _this._client.grantRoles(null, '1', ['Role 1'], function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 1);
                    assert.sameMembers(roles, ['Role 1']);
                    callback(err);
                });
            },
            // Grant roles second time
            function (callback) {
                _this._client.grantRoles(null, '1', ['Role 1', 'Role 2', 'Role 3'], function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 3);
                    assert.sameMembers(roles, ['Role 1', 'Role 2', 'Role 3']);
                    callback(err);
                });
            },
            // Revoke roles first time
            function (callback) {
                _this._client.revokeRoles(null, '1', ['Role 1'], function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 2);
                    assert.sameMembers(roles, ['Role 2', 'Role 3']);
                    callback(err);
                });
            },
            // Get roles
            function (callback) {
                _this._client.getRoles(null, '1', function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 2);
                    assert.sameMembers(roles, ['Role 2', 'Role 3']);
                    callback(err);
                });
            },
            // Revoke roles second time
            function (callback) {
                _this._client.revokeRoles(null, '1', ['Role 1', 'Role 2'], function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 1);
                    assert.sameMembers(roles, ['Role 3']);
                    callback(err);
                });
            }
        ], done);
    };
    RolesClientFixture.prototype.testAuthorize = function (done) {
        var _this = this;
        async.series([
            // Grant roles
            function (callback) {
                _this._client.grantRoles(null, '1', ['Role 1', 'Role 2'], function (err, roles) {
                    assert.isNull(err);
                    assert.lengthOf(roles, 2);
                    callback(err);
                });
            },
            // Authorize positively
            function (callback) {
                _this._client.authorize(null, '1', ['Role 1'], function (err, authorized) {
                    assert.isNull(err);
                    assert.isTrue(authorized);
                    callback(err);
                });
            },
            // Authorize negatively
            function (callback) {
                _this._client.authorize(null, '1', ['Role 2', 'Role 3'], function (err, authorized) {
                    assert.isNull(err);
                    assert.isFalse(authorized);
                    callback(err);
                });
            }
        ], done);
    };
    return RolesClientFixture;
}());
exports.RolesClientFixture = RolesClientFixture;
