export interface Network {
    messagePrefix: string;
    bech32: string;
    bip32: Bip32;
    pubKeyHash: number;
    scriptHash: number;
    scriptHashDeprecated: number;
    wif: number;
    cashAddrPrefix: string | null;
}
interface Bip32 {
    public: number;
    private: number;
}
export declare const bitcoin: Network;
export declare const regtest: Network;
export declare const testnet: Network;
export declare const bitcoincash: Network;
export declare const bitcoincashRegtest: Network;
export declare const bitcoincashTestnet: Network;
export declare const litecoin: Network;
export declare const litecoinRegtest: Network;
export declare const litecoinTestnet: Network;
export declare const rcoin: Network;
export declare const rcoinRegtest: Network;
export declare const rcoinTestnet: Network;
export declare const ecoin: Network;
export declare const ecoinRegtest: Network;
export declare const ecoinTestnet: Network;
export {};
