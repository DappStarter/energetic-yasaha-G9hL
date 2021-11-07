require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million quality gesture only foam sense'; 
let testAccounts = [
"0xf373ffd546378e7d6d21700295d0c83a5b8b5c36348510a55921a2c882c64981",
"0x0962cd938fde9fc11e09dddafc29ba8b8430076aba730d34e323f47c24f5f4d7",
"0x8f054f72adacede7c306b5a5ca578140916d0dec5a1980834d3ce2483989da42",
"0x727ae199d350b7e2e8564ce7e83016be70c0766d1d9c853c65c24286a391cb5a",
"0xed21c3a12b5ffb954b0e018153af9957b58249380b50c5989af4ff8e55d982a4",
"0xe8ec38e67d4901988ad1ea2b9f50de7944719dc837ed8e423b612ca0c4a7fcc4",
"0x60f8c40b471c8efe61b993422e1c012e2c680259e0a45c7bd7c4b72e6fa7017c",
"0xb8e858adad7ae4ba1427e77ad238c62395ee5d73a1206f800e4b32652f210c0a",
"0xa3315f093e5aa17588ce7e41eb80e85c30413f5938bdf463a2a7013a80ddbe31",
"0x7e9bf3fed5c600349fbe05aee1ba3ba8bd36c011a4b154ab9c87f42fd9d8f559"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

