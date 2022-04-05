import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CreateWallet = () => {
    const [wallet, setWallet] = useState(undefined);
    const [password, setPassword] = useState("");
    const [mnemonic, setMnemonic] = useState("");

    const onClickHandler = async () => {
        const result = await axios.post("api/newWallet", {
            password,
            mnemonic
        })
        console.log(result)
        setWallet(result?.data);
    }

    return <div style={{
        margin: "30px", padding: "30px", border: '1px solid black', borderRadius: "30px"
    }}>
        <div>
            {`password : `}
            <input onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <div>
            {`mnemonic : `}
            <input onChange={e => setMnemonic(e.target.value)} value={mnemonic} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            {wallet !== undefined && Object.entries(wallet).map(([key, value], idx) =>
                <div style={{ textOverflow: "ellipsis" }} key={key + value}>
                    {key} : {value}
                </div>
            )}
        </div>
        <button onClick={onClickHandler}>버튼을 누르세요</button>
    </div >
}
export default CreateWallet;
