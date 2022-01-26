import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const notify = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const handleSubmit = async() => {

        if(username !== 'admin'){
            await notify('Invalid username')
        }else if(password !== '12345'){
            await notify('Invalid password')
        }else{
            // history.push("/app");
            window.location.href = "/dashboard"
        }
    }

    return (
        <div style={{height: '100vh'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://betadev.mycybercns.com/assets/images/cybercns_logo.png" className="img-fluid" alt="Phone image" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form >
                    <div className="form-outline mb-4">
                        <input type="text" id="form1Example13" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form1Example13">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form1Example23" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form1Example23">Password</label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                            checked
                        />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                        </div>
                        <a href="#!">Forgot password?</a>
                    </div>
                        <button type="button" onClick={() => handleSubmit()} className="btn btn-primary btn-lg btn-block">Sign in</button>
                    </form>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
