import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CreateMnemonic = () => {
    const [mnemonic, setMnemonic] = useState("");

    const onClickHandler = async () => {
        const result = await axios.get("api/newMnemonic")
        console.log(result)
        setMnemonic(result?.data?.mnemonic);
    }

    return <div style={{
        margin: "30px", padding: "30px", border: '1px solid black', borderRadius: "30px"
    }}>
        <div>mnemonic 코드</div>
        <div>{mnemonic}</div>
        <button onClick={onClickHandler}>mnemonic 랜덤 생성 버튼</button>
    </div>
}
export default CreateMnemonic;
