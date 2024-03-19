import  { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css'
import '../assets/css/Login.css';
import C1 from '../assets/Images/Car_1.png';
import C2 from '../assets/Images/Car_2.png';
import C3 from '../assets/Images/Car_3.png';

const Login = ()=>{

    const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);
    const [isInputActiveName, setIsInputActiveName] = useState(false);
    const [isInputActivePassword, setIsInputActivePassword] = useState(false);
    const [loginMode, setLoginMode] = useState("signin");
    const [currmenu, setCurrmenu] = useState(1);

    useEffect(() => {
        
        const timer = setInterval(() => {
        
          setCurrmenu((prevMenu) => (prevMenu % 3) + 1);
        }, 3000);
        return () => clearInterval(timer);
      }, []); 

    

    const handleFocusEmail = () => {
        setIsInputActiveEmail(true);
    };
    const handleFocusName = () => {
        setIsInputActiveName(true);
    };
    const handleFocusPassword = () => {
        setIsInputActivePassword(true);
    };

    const handleBlurEmail = () => {
        setIsInputActiveEmail(false);
    };
    const handleBlurPassword = () => {
        setIsInputActivePassword(false);
    };
    const handleBlurName = () => {
        setIsInputActiveName(false);
    };


    

    return(
        <>
            <div className="login-body">
               <main className={loginMode === "signup" ? 'login-main sign-up-mode' : 'login-main sign-in-mode'}>
                <div className="login-box">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form action="#" className="sign-in-form">
                                <div className="login-logo">
                                    
                                </div>
                                <div className="login-heading">
                                    <h2>Welcome Back</h2>
                                    <h6>Not registered yet ?</h6>
                                    <a href="#" className="login-toggle" onClick={()=>setLoginMode("signup")}>Sign up</a>
                                </div>

                                <div className="login-actual-form">
                                    <div className="input-wrap">
                                        <input type="text" minLength={4} className={isInputActiveEmail ? 'login-input-field input-active' : 'login-input-field' } id="email1" required onFocus={handleFocusEmail} onBlur={handleBlurEmail}/>
                                        <label htmlFor="email1" className="login-label">Email</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="password" minLength={4} className={isInputActivePassword ? 'login-input-field input-active' : 'login-input-field' } id="password1" required onFocus={handleFocusPassword} onBlur={handleBlurPassword}/>
                                        <label htmlFor="password1" className="login-label">Password</label>
                                    </div>

                                    <input type="submit" value="Sign-In" className="sign-in-btn"/>

                                    <p className="forgot-text">
                                        Forgotten your password or you login details?
                                        <a href="">Get help</a> signing in
                                    </p>
                                </div>
                            </form>

                            <form action="#" className="sign-up-form">
                                <div className="login-logo">
                                    
                                </div>
                                <div className="login-heading">
                                    <h2>Get Started</h2>
                                    <h6>Already have an account ?</h6>
                                    <a href="#" className="login-toggle" onClick={()=>setLoginMode('signin')}>Sign In</a>
                                </div>

                                <div className="login-actual-form">
                                <div className="input-wrap">
                                        <input type="text" minLength={4} className={isInputActiveName ? 'login-input-field input-active' : 'login-input-field' } id="name" required onFocus={handleFocusName} onBlur={handleBlurName}/>
                                        <label htmlFor="name" className="login-label">Name</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" minLength={4} className={isInputActiveEmail ? 'login-input-field input-active' : 'login-input-field' } id="email" required onFocus={handleFocusEmail} onBlur={handleBlurEmail}/>
                                        <label htmlFor="email" className="login-label">Email</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="password" minLength={4} className={isInputActivePassword ? 'login-input-field input-active' : 'login-input-field' } id="password" required onFocus={handleFocusPassword} onBlur={handleBlurPassword}/>
                                        <label htmlFor="password" className="login-label">Password</label>
                                    </div>

                                    <input type="submit" value="Sign-Up" className="sign-in-btn" />

                                    <p className="terms-text">
                                       By signing up, I agree to the 
                                        <a href="#"> Terms of Use</a> and <a href="#">Privacy Notice</a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src={C1} alt="" className={currmenu === 1 ? 'carousel-image img-1 active-show' : 'carousel-image img-1'} />
                                <img src={C2} alt=""  className={currmenu === 2 ? 'carousel-image img-2 active-show' : 'carousel-image img-2'}/>
                                <img src={C3} alt="" className={currmenu === 3 ? 'carousel-image img-3 active-show' : 'carousel-image img-3'} />
                            </div>

                            <div className="text-slider">
                                <div className="text-wrap">
                                    <div className="text-group">
                                        <h2 className={currmenu === 1 ? 'active-text':''}>Transit Across Top Cities</h2>
                                        <h2 className={currmenu === 2 ? 'active-text':''}>Wrap With-In Minutes</h2>
                                        <h2 className={currmenu === 3 ? 'active-text':''}>Every Friday fly with free Wrap!</h2>
                                    </div>
                                </div>

                                <div className="slider-bullets">
                                    <span className={currmenu === 1 ? 'bullet-active':''} onClick={()=>setCurrmenu(1)}></span>
                                    <span className={currmenu === 2 ? 'bullet-active':''} onClick={()=>setCurrmenu(2)}></span>
                                    <span className={currmenu === 3 ? 'bullet-active':''} onClick={()=>setCurrmenu(3)}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </main>
            </div>
        </>
    );
}

export default Login;