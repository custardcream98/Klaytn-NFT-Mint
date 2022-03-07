const CaverExtKAS = require('caver-js-ext-kas')
const dotenv = require('dotenv')
dotenv.config()
// Configuration Part
// Set your KAS access key and secretAccessKey.
const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY
const CHAIN_ID_BAOBOB = '1001'
const CHAIN_ID_CYPRESS = '8217'
const chainId = CHAIN_ID_CYPRESS
const contractAddress = process.env.CONTRACT_GGD
const caver = new CaverExtKAS(chainId, accessKeyId, secretAccessKey)
const walletAddr = process.env.KLAYTN_ADDRESS


// burn()

// async function burn() {
//     const privateKey = process.env.KLAYTN_PRIVATE_KEY
//     // Create a KeyringContainer instance
//     const keyringContainer = new caver.keyringContainer()
//     // Add keyring to in-memory wallet
//     const keyring = keyringContainer.keyring.createFromPrivateKey(privateKey)
//     keyringContainer.add(keyring)
//     // Create a KIP17 instance
//     const kip17 = new caver.kct.kip17("0xc01dc2bd2643459d7e5d5314a304f2b74ec129e4")
//     // Call `kip17.setWallet(keyringContainer)` to use KeyringContainer instead of KAS Wallet API
//     kip17.setWallet(keyringContainer)
//     console.log(kip17.setApprovalForAll(keyring.address, walletAddr, true))
//     // const tokenId = '1'
//     // const uri = 'https://ipfs.io/ipfs/QmP8otW31vUjEAdbTjUrGnFsdCmsBNSX7KcWoij1GrFZGB'
//     // const mintReceipt = await kip17.burn("1", { from: keyring.address })
//     // console.log(`mint receipt: `)
//     // console.log(mintReceipt)
// }

async function mint(toAddr, tokenId, tokenURI) {
    const privateKey = process.env.KLAYTN_PRIVATE_KEY
    // Create a KeyringContainer instance
    const keyringContainer = new caver.keyringContainer()
    // Add keyring to in-memory wallet
    const keyring = keyringContainer.keyring.createFromPrivateKey(privateKey)
    keyringContainer.add(keyring)
    // Create a KIP17 instance
    const kip17 = new caver.kct.kip17(contractAddress)
    // Call `kip17.setWallet(keyringContainer)` to use KeyringContainer instead of KAS Wallet API
    kip17.setWallet(keyringContainer)

    const mintReceipt = await kip17.mintWithTokenURI(toAddr, tokenId, tokenURI, { from: keyring.address })
    // console.log(`mint receipt: `)
    // console.log(mintReceipt)
    // const transferReceipt = await kip17.transferFrom(keyring.address, keyring.address, tokenId, { from: keyring.address })
    // console.log(`transfer receipt: `)
    // console.log(transferReceipt)
    // const burnReceipt = await kip17.burn(tokenId, { from: keyring.address })
    // console.log(`burn receipt: `)
    // console.log(burnReceipt)
}


exports.mint = mint