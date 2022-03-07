const IpfsApi = require('ipfs-api');
const ipfs = IpfsApi("ipfs.infura.io", "5001", { protocol: "https" });

const ipfsUpload = async (data) => {
    //IPFS UPLOAD & HASH GET
    //접속 : https://ipfs.io/ipfs/{해시값}
    const result = await ipfs.files.add(data);

    return `ipfs://${result[0].hash}`;
};

exports.ipfsUpload = ipfsUpload;