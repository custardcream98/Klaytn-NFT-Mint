var kip17 = artifacts.require('KIP17Token');

module.exports = function (deployer) {
    deployer.deploy(kip17, 'Meta Cats Universe Goggles', 'MCUG');
};
