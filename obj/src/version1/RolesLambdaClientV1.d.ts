import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableLambdaClient } from 'pip-services-aws-node';
import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';
export declare class RolesLambdaClientV1 extends CommandableLambdaClient implements IRolesClientV1 {
    constructor(config?: any);
    getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<UserRolesV1>) => void): void;
    getRolesById(correlationId: string, userId: string, callback: (err: any, roles: string[]) => void): void;
    setRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    grantRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    revokeRoles(correlationId: string, userId: string, roles: string[], callback?: (err: any, roles: string[]) => void): void;
    authorize(correlationId: string, userId: string, roles: string[], callback: (err: any, authorized: boolean) => void): void;
}
