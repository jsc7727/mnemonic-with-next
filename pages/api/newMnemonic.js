import lightwallet from '../../lib/ethLightwallet';
const newMnemonic = async (req, res) => {
  let mnemonic;
  try {
    mnemonic = lightwallet.keystore.generateRandomSeed();
    return res.json({ mnemonic });
  }
  catch (error) {
    console.log(error);
    return res.send("error");
  }
}

export default newMnemonic;
