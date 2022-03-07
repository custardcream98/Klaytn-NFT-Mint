const fs = require('fs');
const { ipfsUpload } = require('./ipfs.js');

const file = fs.readFileSync('/Users/shioo/DEV/Git/Klaytn-NFT-Mint/solc_caver-js/meta/1.json');
const buffer = Buffer.from(file);

const result = await ipfsUpload(buffer);
console.log(result);