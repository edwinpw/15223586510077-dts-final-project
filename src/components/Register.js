import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext';
import React, { useEffect } from 'react'
const Register = () => {
    useEffect(() => {
        document.title = "Register"
      }, [])
      
    const {registerUser, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setSuccessMsg(false);
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await registerUser(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('You have successfully registered.');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
        <div className="myform">
            <h2 className="login-font">Sign Up</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={onChangeInput} placeholder="Your name" id="name" value={formData.name} required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email} required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password} required />
                {successMsg && <div className="success-msg">{successMsg}</div>}
                {errMsg && <div className="err-msg">{errMsg}</div>}
                <button type="submit" className="sign-in" disabled={wait}>Sign Up</button>
                <Link to="/login" className="sign-up"><div>Login</div></Link>
            </form>
        </div>
    )
}

export default Register;
