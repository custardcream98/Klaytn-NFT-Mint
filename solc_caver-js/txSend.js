//const Caver = require("caver-js");

import Caver from 'caver-js';
const caver = new Caver("https://api.baobab.klaytn.net:8651/")

const walletInstance = await caver.klay.accounts.privateKeyToAccount(
    '0xf721f26357a024ea1cfe70df0d2e11643453d2b819ca7558b2a8876845a30795' // enter your private key to deploy contract with
);

const wallet = caver.klay.accounts.wallet;

wallet.add(walletInstance);

console.log(wallet[0]);

const tx = {
    type: "VALUE_TRANSFER", from: wallet[0].address, to: "0xc44D45bBbf385E4BcB4b6588F4fE9863dEa5d506",
    value: caver.utils.toPeb('0.1', 'KLAY'),
    gas: 300000
};

caver.klay.accounts.signTransaction(tx, wallet[0].privateKey).then(console.log);

// (async () => {
//     const signTransaction = await caver.klay.accounts.signTransaction(tx, wallet[0].privateKey);
//     await caver.klay.sendSignedTransaction(signTransaction.rawTransaction)
//         .on('transactionHash', function (txhash) { console.log('hash first ', txhash); })
//         .on('receipt', function (receipt) { console.log('receipt later ', receipt); });
// })(); // 서명 후 전송

caver.klay.sendTransaction(tx) // 서명과 동시에 전송
    .on('transactionHash', function (txhash) { console.log('hash first ', txhash); })
    .on('receipt', function (receipt) { console.log('receipt later ', receipt); });