"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitcoin = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    scriptHashDeprecated: -1,
    wif: 0x80,
    cashAddrPrefix: 'bitcoincash',
};
exports.regtest = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    scriptHashDeprecated: -1,
    wif: 0xef,
    cashAddrPrefix: 'bchreg',
};
exports.testnet = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    scriptHashDeprecated: -1,
    wif: 0xef,
    cashAddrPrefix: 'bchtest',
};
exports.bitcoincash = {
    messagePrefix: '\x18BitcoinCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    scriptHashDeprecated: -1,
    wif: 0x80,
    cashAddrPrefix: 'bitcoincash',
};
exports.bitcoincashRegtest = {
    messagePrefix: '\x18BitcoinCash Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    scriptHashDeprecated: -1,
    wif: 0xef,
    cashAddrPrefix: 'bchreg',
};
exports.bitcoincashTestnet = {
    messagePrefix: '\x18BitcoinCash Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    scriptHashDeprecated: -1,
    wif: 0xef,
    cashAddrPrefix: 'bchtest',
};
exports.litecoin = {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 48,
    scriptHash: 50,
    scriptHashDeprecated: 5,
    wif: 176,
    cashAddrPrefix: null,
};
exports.litecoinRegtest = {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bech32: 'rltc',
    bip32: {
        public: 0x043587CF,
        private: 0x04358394,
    },
    pubKeyHash: 111,
    scriptHash: 58,
    scriptHashDeprecated: 196,
    wif: 239,
    cashAddrPrefix: null,
};
exports.litecoinTestnet = {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bech32: 'tltc',
    bip32: {
        public: 0x043587CF,
        private: 0x04358394,
    },
    pubKeyHash: 111,
    scriptHash: 58,
    scriptHashDeprecated: 196,
    wif: 239,
    cashAddrPrefix: null,
};
exports.rcoin = {
    messagePrefix: '\x18Rcoin Signed Message:\n',
    bech32: 'rc',
    bip32: {
        public: 0x14031242,
        private: 0x435d8cb2,
    },
    pubKeyHash: 60,
    scriptHash: 13,
    scriptHashDeprecated: -1,
    wif: 128,
    cashAddrPrefix: null,
};
exports.rcoinRegtest = {
    messagePrefix: '\x18Rcoin Signed Message:\n',
    bech32: 'rcrt',
    bip32: {
        public: 0x1293ff3a,
        private: 0x3e89de01,
    },
    pubKeyHash: 111,
    scriptHash: 196,
    scriptHashDeprecated: -1,
    wif: 239,
    cashAddrPrefix: null,
};
exports.rcoinTestnet = {
    messagePrefix: '\x18Rcoin Signed Message:\n',
    bech32: 'tr',
    bip32: {
        public: 0x1293ff3a,
        private: 0x3e89de01,
    },
    pubKeyHash: 111,
    scriptHash: 196,
    scriptHashDeprecated: -1,
    wif: 239,
    cashAddrPrefix: null,
};
exports.ecoin = {
    messagePrefix: '\x18Ecoin Signed Message:\n',
    bech32: 'ec',
    bip32: {
        public: 0x14031242,
        private: 0x435d8cb2,
    },
    pubKeyHash: 33,
    scriptHash: 15,
    scriptHashDeprecated: -1,
    wif: 128,
    cashAddrPrefix: null,
};
exports.ecoinRegtest = {
    messagePrefix: '\x18Ecoin Signed Message:\n',
    bech32: 'ecrt',
    bip32: {
        public: 0x1293ff3a,
        private: 0x3e89de01,
    },
    pubKeyHash: 111,
    scriptHash: 196,
    scriptHashDeprecated: -1,
    wif: 239,
    cashAddrPrefix: null,
};
exports.ecoinTestnet = {
    messagePrefix: '\x18Ecoin Signed Message:\n',
    bech32: 'te',
    bip32: {
        public: 0x1293ff3a,
        private: 0x3e89de01,
    },
    pubKeyHash: 111,
    scriptHash: 196,
    scriptHashDeprecated: -1,
    wif: 239,
    cashAddrPrefix: null,
};
