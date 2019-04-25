const assert = require("assert");
const bitcoin = require("../../");
const { describe, it } = require("mocha");

describe("bitcoinjs-lib (addresses)", () => {
  it("get address hash", () => {
    // bitcoin p2pkh with base58 encoding
    let hash = bitcoin.getAddressHash("1N4qELCPQ9b5Sg98niGhFFWbaijdcpkbyE");
    assert.strictEqual(hash, "e714264b9cb4ce30e9a062baca5b8af664e9c56e");
    // bitcoin p2wpkh with bech32 encoding
    hash = bitcoin.getAddressHash("bc1quu2zvjuukn8rp6dqv2av5ku27ejwn3tw42tddp");
    assert.strictEqual(hash, "e714264b9cb4ce30e9a062baca5b8af664e9c56e");
    // bitcoincash p2pkh with cash encoding
    hash = bitcoin.getAddressHash("bitcoincash:qrn3gfjtnj6vuv8f5p3t4jjm3tmxf6w9dcw0dj4cx0");
    assert.strictEqual(hash, "e714264b9cb4ce30e9a062baca5b8af664e9c56e");
    // bitcoin p2sh_p2wpkh with base58 encoding
    // f3c540f38482e733be1fa9b7542f76f56c653570是0014e714264b9cb4ce30e9a062baca5b8af664e9c56e的hash160
    hash = bitcoin.getAddressHash("3PuxRaztbdy91yc2m4FB6pDQu5jKFcM3Am");
    assert.strictEqual(hash, "f3c540f38482e733be1fa9b7542f76f56c653570");
    // ltc regtest p2wpkh with base58 encoding
    hash = bitcoin.getAddressHash("mrBUHjAUrn8MAG8bZNXHkM11SAw8cX33Ry");
    assert.strictEqual(hash, "74fa1a38cbbe8fb2674a847b89ec5756aed7331d");
    // rcoin regtest p2wpkh with base58 encoding
    hash = bitcoin.getAddressHash("moAf9t65Fe87ajPJUEjAQb3mFEG6wRzV4k");
    assert.strictEqual(hash, "53ea60e746fb57c5deb79b1335beda5f19582f93");
    // rcoin p2wpkh with bech32 encoding
    hash = bitcoin.getAddressHash("rcrt1q4epncrdkqypt7ql8a38rm56nl8lmn4h40hmv0l");
    assert.strictEqual(hash, "ae433c0db60102bf03e7ec4e3dd353f9ffb9d6f5");
    // eth address
    hash = bitcoin.getAddressHash("0x8bc4ae1040facdb0f8fb24b5f52febdd42602590");
    assert.strictEqual(hash, "0x8bC4AE1040FaCdB0F8fb24b5F52FeBdd42602590");
  });
});
