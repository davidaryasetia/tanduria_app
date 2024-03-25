import React from "react";
import './Register.css';
import '../../App.css';
import { Link } from "react-router-dom";

// Import assets
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";


const Register = () => {
    return (
        <>
        <div className="registerPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of natural</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                        <button className="btn">Sign Up</button>
                        </Link> 
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let's Us Know You</h3>
                    </div>


                        <form action="" className="form grid">
                            <span className="showMessage">Register Status will go here</span>

                            <div className="inputDiv">
                                <label htmlFor="email">Email</label>
                                <div className="input flex">
                                    <MdMarkEmailRead className='icon' />
                                    <input type="text" id="username" placeholder="Enter Email" />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="username">User</label>
                                <div className="input flex">
                                    <FaUserShield  className='icon' />
                                    <input type="text" id="username" placeholder="Enter Username" />
                                </div>
                            </div>
                            
                            <div className="inputDiv">
                                <label htmlFor="password">Password</label>
                                <div className="input flex">
                                    <BsFillShieldLockFill className='icon' />
                                    <input type="password" id="password" placeholder="Enter Password" />
                                </div>
                            </div>

                            <button type="submit" className="btn flex">
                                <span>SignUp </span>
                                <AiOutlineSwapRight className='icon'
                                />
                            </button>

                            <span className="forgotPassword">
                                Have an Account? <a href="/">Click Here</a>
                            </span>
                        </form>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Register
