const MetaLand = artifacts.require("MetaLand");

module.exports = async function (deployer) {
    const NAME = 'IntoTheVerse Buildings'
    const SYMBOL = 'ITVB'
    const COST = web3.utils.toWei('1', 'ether')
    await deployer.deploy(MetaLand, NAME, SYMBOL, COST);
};
