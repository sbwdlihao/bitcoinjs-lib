"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
const address_1 = require("./address");
const cashaddr = require('cashaddress');
// 返回地址中的hash
function getAddressHash(address) {
    let hash = tryGetBase58Hash(address);
    if (hash == null) {
        hash = tryGetBech32Hash(address);
    }
    if (hash == null) {
        hash = tryGetCashAddressHash(address);
    }
    if (hash == null) {
        hash = tryGetEthAddressHash(address);
    }
    if (hash == null) {
        hash = tryGetBase58Hash(address, address_1.bs58checkWithsha3);
    }
    return hash;
}
exports.getAddressHash = getAddressHash;
function tryGetBase58Hash(address, bs58check = address_1.bs58checkWithsha256) {
    try {
        const result = address_1.fromBase58Check(address, bs58check);
        return result.hash.toString('hex');
    }
    catch (e) {
        // ignore
    }
    return null;
}
function tryGetBech32Hash(address) {
    try {
        const result = address_1.fromBech32(address);
        return result.data.toString('hex');
    }
    catch (e) {
        // ignore
    }
    return null;
}
function tryGetCashAddressHash(address) {
    try {
        const result = cashaddr.decode(address);
        return result.hash.toString('hex');
    }
    catch (e) {
        // ignore
    }
    return null;
}
function tryGetEthAddressHash(address) {
    try {
        if (ethereumjs_util_1.isValidAddress(address)) {
            return ethereumjs_util_1.toChecksumAddress(address);
        }
    }
    catch (e) {
        // ignore
    }
    return null;
}
