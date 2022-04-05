delete global._bitcore
const import_eth_lightwallet = () => {
    const importId = Symbol.for(import_eth_lightwallet + ".eth-lightwallet")
    const globalSymbols = Object.getOwnPropertySymbols(global);
    if (globalSymbols.indexOf(importId) < 0) {
        console.log("add one")
        global[importId] = require('eth-lightwallet');
        delete global._bitcore
    }
    return global[importId];
}
export default (import_eth_lightwallet)();
