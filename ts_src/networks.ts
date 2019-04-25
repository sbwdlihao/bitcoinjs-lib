// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  scriptHashDeprecated: number; // litecoin的废弃的p2sh编码前缀
  wif: number;
  cashAddrPrefix: string | null; // bitcoincash的Cash编码前缀
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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

export const bitcoincash: Network = {
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
export const bitcoincashRegtest: Network = {
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
export const bitcoincashTestnet: Network = {
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

export const litecoin: Network = {
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
export const litecoinRegtest: Network = {
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
export const litecoinTestnet: Network = {
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

export const rcoin: Network = {
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
export const rcoinRegtest: Network = {
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
export const rcoinTestnet: Network = {
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

export const ecoin: Network = {
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
export const ecoinRegtest: Network = {
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
export const ecoinTestnet: Network = {
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
