import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';
export declare class RolesClientFactory extends Factory {
    static Descriptor: Descriptor;
    static NullClientV1Descriptor: any;
    static DirectClientV1Descriptor: any;
    static HttpClientV1Descriptor: any;
    static SenecaClientV1Descriptor: any;
    static LambdaClientV1Descriptor: any;
    constructor();
}
