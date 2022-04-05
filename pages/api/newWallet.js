import lightwallet from '../../lib/ethLightwallet';
let fs = require('fs');
const newWallet = (req, res) => {
    const { body: { password, mnemonic } = {} } = req
    if (!password || !mnemonic) return res.send('인자 부족');
    try {
        lightwallet.keystore.createVault(
            {
                password: password,
                seedPhrase: mnemonic,
                hdPathString: "m/0'/0'/0'"
            }, (err, keyStore) => {
                keyStore.keyFromPassword(password, function (err, pwDerivedKey) {
                    keyStore.generateNewAddress(pwDerivedKey, 1);
                    const address = (keyStore.getAddresses()).toString();
                    const keystore = keyStore.serialize();
                    fs.writeFile('wallet.json', keystore, function (err, data) {
                        if (err) {
                            return res.json({ code: 999, message: "실패" });
                        } else {
                            return res.json({ address, code: 1, message: "성공" });
                        }
                    });
                });
            }
        )
    }
    catch (error) {
        console.log("NewWallet ==>>>> " + error);
        return res.send("error : ", error);
    }
}

export default newWallet;