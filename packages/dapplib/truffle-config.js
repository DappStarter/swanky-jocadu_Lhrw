require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name release rural history good praise army gift'; 
let testAccounts = [
"0x8a2e9d6fb2d72ee32033c9cd93f97a89d919bb93e2e02d667ecbd71ec81642a1",
"0x9b36c8e30e0dfd2a6cbcc0d2f07a288d7ed4190f45b1c679d2b8c0e728321e8a",
"0x8b7254c99a86eaba6bf53076a1a072cc37e7e982968111a7cfe07b2c71e50e55",
"0xb1b8cc3d74eb5114f7f57e42ac8410f1d657fe4146918036e55d9d5f35e2e639",
"0x8fca22d89db0d153be1d984679335c9f74484cd1f41067a2e4dd6abbea1b1563",
"0x72f9ae0eb6ca7184e4970e17a24e44cfdd27573133ec585a6cffb8c74c94b7a2",
"0x41ffd57086477eba66f4c8daba91e876d80c2c7e7875eb70af82cfb65030f4ae",
"0x38c92ffd231e88fc23ad39fc3c1926cee8125ea75723b16ef6d3d63cc17bfe2d",
"0xc99b142f7375ae0631456f5106c7518e13c8e0829a01418fc9948ec35dba873f",
"0xdfeaafd17d891ca192523214f5c33727addd80cd30c7d2059f7865d29f8dc9de"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

