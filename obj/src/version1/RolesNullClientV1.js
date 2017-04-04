"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RolesNullClientV1 {
    getRoles(correlationId, userId, callback) {
        callback(null, []);
    }
    setRoles(correlationId, userId, roles, callback) {
        if (callback)
            callback(null, roles || []);
    }
    grantRoles(correlationId, userId, roles, callback) {
        if (callback)
            callback(null, roles);
    }
    revokeRoles(correlationId, userId, roles, callback) {
        if (callback)
            callback(null, []);
    }
    authorize(correlationId, userId, roles, callback) {
        callback(null, true);
    }
}
exports.RolesNullClientV1 = RolesNullClientV1;
//# sourceMappingURL=RolesNullClientV1.js.map