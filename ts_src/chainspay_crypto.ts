import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
import { Base58Check, bs58checkWithsha256, bs58checkWithsha3, fromBase58Check, fromBech32 } from './address';

const cashaddr = require('cashaddress');

// 返回地址中的hash
export function getAddressHash(address: string): string | null {
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
    hash = tryGetBase58Hash(address, bs58checkWithsha3);
  }
  return hash;
}

function tryGetBase58Hash(address: string, bs58check: Base58Check = bs58checkWithsha256): string | null {
  try {
    const result = fromBase58Check(address, bs58check);
    return result.hash.toString('hex');
  } catch (e) {
    // ignore
  }
  return null;
}

function tryGetBech32Hash(address: string): string | null {
  try {
    const result = fromBech32(address);
    return result.data.toString('hex');
  } catch (e) {
    // ignore
  }
  return null;
}

function tryGetCashAddressHash(address: string): string | null {
  try {
    const result = cashaddr.decode(address);
    return result.hash.toString('hex');
  } catch (e) {
    // ignore
  }
  return null;
}

function tryGetEthAddressHash(address: string): string | null {
  try {
    if (isValidAddress(address)) {
      return toChecksumAddress(address);
    }
  } catch (e) {
    // ignore
  }
  return null;
}
