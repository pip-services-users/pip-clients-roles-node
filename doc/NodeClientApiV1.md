# Client API (version 1) <br/> Settings Microservices Client SDK for Node.js

Node.js client API for Settings microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [IRolesClient interface](#interface)
    - [init()](#operation1)
    - [open()](#operation2)
    - [close()](#operation3)
    - [getRoles()](#operation4)
    - [setRoles()](#operation5)
    - [grantRoles()](#operation5)
    - [revokeRoles()](#operation5)
    - [authorize()](#operation5)
* [RolesRestClient class](#client_rest)
* [RolesSenecaClient class](#client_seneca)
* [RolesNullClient class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-roles-node": "git+ssh://git@github.com:pip-services/pip-clients-roles-node.git",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

If you are using Typescript, add the following type definition where compiler can find it
```javascript
/// <reference path="../node_modules/pip-clients-roles-node/module.d.ts" />
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('pip-clients-roles-node').Version1;

// Client configuration
var config = {
    transport: {
        type: 'http',
        host: 'localhost', 
        port: 8012
    }
};

// Create the client instance
var client = sdk.RolesRestClient(config);

// Open client connection to the microservice
client.open(function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
    
    // Grant user 123 a role
    client.grantRoles(
        '123',
        ['admin'],
        function (err, roles) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('User roles are');
            console.log(roles);
            
            // Authorize user 123
            client.authorize(
                '123',
                ['admin'],
                function (err, authorized) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('User authorization is');
                    console.log(authorized);
                    
                    // Close connection
                    client.close(); 
                }
            );
        }
    );
});
```

## <a name="interface"></a> IRolesClient interface

If you are using Typescript, you can use IRolesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IRolesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IRolesClient {
    init(refs);
    open(callback);
    close(callback);
    getRoles(userId, callback);
    setRoles(userId, roles, callback);
    grantRoles(userId, roles, callback);
    revokeRoles(userId, roles, callback);
    authorize(userId, roles, callback);
}
```

### <a name="operation1"></a> init(refs)

Initializes client references. This method is optional. It is used to set references 
to logger or performance counters.

**Arguments:**
- refs: References - references to other components 
  - log: ILog - reference to logger
  - countes: ICounters - reference to performance counters

### <a name="operation2"></a> open(callback)

Opens connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation3"></a> close(callback)

Closes connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation4"></a> getRoles(userId, callback)

Gets all roles granted to specified user.

**Arguments:** 
- userId: string - unique user id
- callback: (err, roles) => - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation5"></a> setRoles(userId, roles, callback)

Sets all roles granted to specified user. 
This operation overrides all previously granted roles.

**Arguments:** 
- userId: string - unique user id
- roles: [string] - all roles 
- callback: (err, roles) => void - callback
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation6"></a> grantRoles(userId, roles, callback)

Grant roles to the user. It doesn't affect other granted roles.

**Arguments:** 
- userId: string - unique user id
- roles: [string] - roles granted to the user
- callback: (err, roles) => void - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation7"></a> revokeRoles(userId, roles, callback)

Revokes roles from the user. It doesn't affect other granted roles.

**Arguments:** 
- userId: string - unique user id
- roles: [string] - roles to be revoked from the user
- callback: (err, roles) => void - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation5"></a> authorize(userId, roles, callback)

Authorizes user by checking if he was granted all requested roles.

**Params properties:** 
- userId: string - unique user id
- roles: [string] - requested roles to authorize
- callback: (err, authorized) => void - callback function
  - err: Error - occured error or null for success
  - authorized: boolean - **true** if user was authorized and **false** otherwise
 
## <a name="client_rest"></a> RolesRestClient class

RolesRestClient is a client that implements HTTP/REST protocol

```javascript
class RolesRestClient extends RestClient implements IRolesClient {
    constructor(config?: any);
    init(refs);
    open(callback);
    close(callback);
    getRoles(userId, callback);
    setRoles(userId, roles, callback);
    grantRoles(userId, roles, callback);
    revokeRoles(userId, roles, callback);
    authorize(userId, roles, callback);
}
```

**Constructor config properties:** 
- transport: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> RolesSenecaClient class

RolesSenecaClient is a client that implements Seneca protocol

```javascript
class RolesSenecaClient extends SenecaClient implements IRolesClient {
    constructor(config?: any);        
    init(refs);
    open(callback);
    close(callback);
    getRoles(userId, callback);
    setRoles(userId, roles, callback);
    grantRoles(userId, roles, callback);
    revokeRoles(userId, roles, callback);
    authorize(userId, roles, callback);
}
```

**Constructor config properties:** 
- transport: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_null"></a> RolesNullClient class

RolesNullClient is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class RolesNullClient extends AbstractClient implements IRolesClient {
    constructor();        
    init(refs);
    open(callback);
    close(callback);
    getRoles(userId, callback);
    setRoles(userId, roles, callback);
    grantRoles(userId, roles, callback);
    revokeRoles(userId, roles, callback);
    authorize(userId, roles, callback);
}
```
