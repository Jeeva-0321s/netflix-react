// import React, { useState } from 'react'
// import './Login.css'
// import logo from '../../assets/logo.png'
// const Login = () => {
//     const[signstate,setsign]=useState("Sign In")

//   return (
//     <div>
//         <div className="login">
//             <img src={logo} className='login-logo' alt="" />
//             <div className="login-form">
//                 <h1>{signstate}</h1>
//                 <form>
//                     {signstate==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
                    
//                     <input type="email" placeholder='Your E-Mail' />
//                     <input type="password" placeholder='Password' />
//                     <button>{signstate}</button>
//                     <div className='form-help'>
//                         <div className="remember">
//                             <input type="checkbox" />
//                             <label htmlFor="">Remember Me</label>
//                         </div>
//                         <p>Need Help?</p>
//                     </div>
//                 </form>
//                 <div className="form-switch">
//                     {signstate==="Sign In"? <p>New to Netflix? <span onClick={()=>{setsign("Sign Up")}}>Sign Up Now</span></p>:
//                       <p>Already have an Account? <span onClick={()=>{setsign("Sign In")}}>Sign In Now</span></p>}
                   
                  
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
    const [signstate, setsign] = useState("Sign In");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

       
        setError("");
        navigate('/loading...'); 
    };

    return (
        <div className="login">
            <img src={logo} className='login-logo' alt="logo" />
            <div className="login-form">
                <h1>{signstate}</h1>
                <form onSubmit={handleSubmit}>
                    {signstate === "Sign Up" && (
                        <input type="text" placeholder='Your Name' required />
                    )}
                    <input 
                        type="email" 
                        placeholder='Your E-Mail' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">{signstate}</button>
                    <div className='form-help'>
                        <div className="remember">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signstate === "Sign In" ? 
                        <p>New to Netflix? <span onClick={() => setsign("Sign Up")}>Sign Up Now</span></p> :
                        <p>Already have an Account? <span onClick={() => setsign("Sign In")}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
