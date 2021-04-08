import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    // const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [error, setError] = useState('')

    let validation_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
    let validation_password = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/.test(password)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            axios.post('http://localhost:9000/user/', {email, password}, {withCredentials: true})
            .then(res=>{
                console.log(res)
                setError('')
            })  
            .catch(err=>{
                console.log(err.response.data)
                setError(err.response.data.errors.email)
            })
        } catch (err) {
            console.log(err)
        }

    }

    return ( 
        <div className="container">
            <div className="columns is-justify-content-center mt-6 mx-4">
                <div className="column is-3">
                    <form onSubmit={handleSubmit}>       
                    <div className="field">
                        <label className="label">Email Address</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="input is-primary" type="text" placeholder="Email Address"/>
                        <p className={`help is-danger ${validation_email===true || !email?'is-hidden':''}`}>Email format is wrong</p>
                        <p className={`help is-danger ${!error?'is-hidden':''}`}>{error}</p>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="input is-primary" type="password" placeholder="Password"/>
                        <p className={`help is-danger ${validation_password || !password?'is-hidden':''}`}>
                            Password must consist of numbers and letters (upper and lower case).
                            Password must be at least 8 digits long
                        </p>
                        
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <input value={passwordR} onChange={(e)=>setPasswordR(e.target.value)} className="input is-primary" type="password" placeholder="Confirm Password"/>
                        <p className={`help is-danger ${password===passwordR || !email?'is-hidden':''}`}>Passwords are not the same</p>
                    </div>
              
                    <div className="buttons">
                        <button className="button is-primary is-fullwidth">Register</button>
                    </div>
                    </form>
                    <p className="mt-4">Already have an account? <Link to="/signin" className="has-text-weight-bold">Login</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;
