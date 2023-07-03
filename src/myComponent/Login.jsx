import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        let value = e.target.value, name = e.target.name;
        if(name === "userName") {
            setUserName(value)
        }
        else {
            setPassword(value)
        }
    }

    const handleSubmit = () => {
        if(userName === "mayank" && password === "12345") {
            alert("Login Successfull");
            navigate("/");
        }
        else {
            alert("Please Enter Valid Credential");
        }
    }

    return (
        <div>
            <input type='text' value={userName} name='userName' onChange={handleChange} />
            <input type='password' value={password} name='password' onChange={handleChange} />
            <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Loginpage
