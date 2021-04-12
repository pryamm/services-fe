import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signin = ({userLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailChecker, setEmailChecker] = useState('')
    const [passwordChecker, setPasswordChecker] = useState('')
    const history = useHistory()
   

    const handleSubmit = (e) =>{
        e.preventDefault()
    
        try{
            axios.post('http://localhost:9000/user/signin/', {email, password}, {withCredentials: true})
            .then(res=>{
                console.log(res)
                localStorage.setItem("user", res.data.user);
                setEmailChecker('')
                setPasswordChecker('')
                userLogin()
                history.push('/')
            })  
            .catch(err=>{
                console.log(err.response.data)
                setEmailChecker(err.response.data.errors.email)
                setPasswordChecker(err.response.data.errors.password)
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
                        <p className={`help is-danger ${!emailChecker?'is-hidden':''}`}>{emailChecker}</p>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="input is-primary" type="password" placeholder="Password"/>
                        <p className={`help is-danger ${!passwordChecker?'is-hidden':''}`}>{passwordChecker}</p>
                    </div>
              
                    <div className="buttons">
                        <button type="submit" className="button is-primary is-fullwidth">Login</button>
                    </div>
                    </form>
                    <p className="mt-4">Don't have an account yet? <Link to="/signup" className="has-text-weight-bold">Join with us</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default Signin;