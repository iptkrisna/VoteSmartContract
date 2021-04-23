require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind mixture gesture oppose obscure solid'; 
let testAccounts = [
"0x9b18ade3aab6c341eb8118e9abcd23162b90018ea85fdabf5d09246f8e1dfd68",
"0x5f3487b176a78127bc551883cf2f4dba839c09018710da93a41f18491bc95562",
"0xc95c67b4ce7d70ba698596ed57b29715637059e790172f3e343b19b54c42d6bd",
"0xd7752ca814644530f17ffa8eee839fdf74eb490393f4c86533166492eb181adf",
"0xe04422cb36414767e27ba97ec0dcf403cf0c0f76a159205d0afb770568d6f670",
"0x8442c6d6a775b1c1ef70a746f3e5ccec4f31cc7f5442285b4c7988f3a8d80da7",
"0x5dbebe1e8648b8ddf38c46e2d183401c51fe103a130eb2388e4afd8087d6b115",
"0xff65cbc90606bdad588b725950c5b58664e1ff7dc45e065cab643c5f8dc62c49",
"0x37550c3ec75a9423e8d512efa7511b842761e4e5bbcd94c0e3b21567d7078c68",
"0x44539ffa3d8d369285383a698a47bc9d66aa4b61d311a7a7249493939ddf54bc"
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
            version: '^0.5.11'
        }
    }
};
