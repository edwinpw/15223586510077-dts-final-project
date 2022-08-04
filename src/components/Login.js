import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';

import React, { useEffect } from 'react'

import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {

    const showAlert = () => {
        Swal.fire({
            title: "Berhasil Masuk",
            text: "Welcome",
            icon: "success",
            confirmButtonText: "OK",
          }).then(function() {
             loggedInCheck();
        });
    }

    useEffect(() => {
        document.title = "Hype Supp"
      }, [])

    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
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
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            showAlert();
           
            return;
        }
        setErrMsg(data.message);
    }

    return (
        <div className="myform">
            <h2 className="login-font">Login</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email} required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password} required />
                {errMsg && <div className="err-msg">{errMsg}</div>}
                {redirect ? redirect : <button type="submit" className="sign-in" disabled={wait}>Login</button>}
                {/* <br/> */}
                <Link to="/signup" className="sign-up"><div>Sign Up</div></Link>
            </form>
        </div>
    )
}

// ReactDOM.render(
//     <Login />,
//     document.getElementById('root')
//   );

export default Login;