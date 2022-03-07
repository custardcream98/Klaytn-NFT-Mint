const fs = require('fs');
let csvToJson = require('convert-csv-to-json');

const { ipfsUpload } = require('./ipfs.js');
const { mint } = require('./mint.js');

const baseFile = fs.readFileSync('/Users/shioo/DEV/Git/Klaytn-NFT-Mint/solc_caver-js/meta/baseData.json');

const arr_json = csvToJson.fieldDelimiter(',').getJsonFromCsv('/Users/shioo/DEV/Git/Klaytn-NFT-Mint/solc_caver-js/meta/input.csv');
let addrs = [];
let metaData = [];
let uri = [];

const main = async () => {
    for (let personal of arr_json) {
        let temp = JSON.parse(baseFile)
        temp['attributes'] = []
        // "attributes": [
        //     { "trait_type": "OWNER", "value": "Cat Father" },
        //     { "trait_type": "Is Sexy?", "value": "YES" }
        //   ]
        if (personal.property == '') {
            temp.attributes.push({ "trait_type": "OWNER", "value": personal.name })
        } else {
            try {
                const propertyType = personal.property.split("|")[0]
                const propertyValue = personal.property.split("|")[1]
                temp.attributes.push({ "trait_type": "OWNER", "value": personal.name })
                temp.attributes.push({ "trait_type": propertyType, "value": propertyValue })
            }
            catch (e) {
                console.log(e)
            }
        }

        addrs.push(personal.address)
        metaData.push(temp)

        try {
            const uriIpfs = await ipfsUpload(Buffer.from(JSON.stringify(temp)));
            console.log(uriIpfs)
            uri.push(uriIpfs)
        } catch (e) {
            console.log(e)
            return
        }
        await timeout(10000)
    }

    for (let i = 0; i < addrs.length; i++) {
        await mint(addrs[i], (i + 34), uri[i])
        console.log(`${i + 34} minted`)
    }
}

main()


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}