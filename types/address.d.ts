/// <reference types="node" />
import { Network } from './networks';
declare const bs58checkWithsha256: any;
declare const bs58checkWithsha3: any;
export { bs58checkWithsha256, bs58checkWithsha3 };
export interface Base58Check {
    decode: (arg: string) => Buffer;
    encode: (arg: Buffer) => string;
}
export interface Base58CheckResult {
    hash: Buffer;
    version: number;
}
export interface Bech32Result {
    version: number;
    prefix: string;
    data: Buffer;
}
export declare function fromBase58Check(address: string, bs58check?: Base58Check): Base58CheckResult;
export declare function fromBech32(address: string): Bech32Result;
export declare function toBase58Check(hash: Buffer, version: number, bs58check?: Base58Check): string;
export declare function toBech32(data: Buffer, version: number, prefix: string): string;
export declare function fromOutputScript(output: Buffer, network?: Network): string;
export declare function toOutputScript(address: string, network?: Network): Buffer;
