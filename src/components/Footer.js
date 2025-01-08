import React from 'react';
import './Footer.css';
import Logo from '../assets/logo.png';
import pin from '../assets/pin.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';

const Footer = () =>{
    return(
        <div className='Footer-wrapper'>
            <div className='footmain'>
                <div className="logo">
                    <img src={Logo} alt="logo" width={100} height={55} loading="lazy"/>
                </div>
                <div className='footspan'>
                    <div className='footclass'>
                        <span className='textspan'>
                            For designers
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                            Hire talent
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                                Inspiration
                        </span>
                    </div>
                        
                    <div className='footclass'>
                        <span className='textspan'>
                            Advertising
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                            Blog
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                            About
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                            Careers
                        </span>
                    </div>

                    <div className='footclass'>
                        <span className='textspan'>
                            Support
                        </span>

                    </div>
                </div>
                <div className='div-icons'>
                    <div className='icons-twitter'>
                        <img src={twitter} width={24} height={22} loading="lazy"/>
                    </div>

                    <div className='icons-facebook'>
                        <img src={facebook} width={28} height={23} loading="lazy"/>
                    </div>
                    
                    <div className='icons-insta'>
                        <img src={insta} width={34} height={20} loading="lazy"/>
                    </div>
                    
                    <div className='icons-pin'>
                        <img src={pin} width={34} height={21} loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className='foot-footer'>
                    <div className='footfor'>
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                ©2025 Dribbble
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Terms
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Privacy
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Cookies
                            </span>
                        </div>
                    </div>
                    
                    <div className='footfor2'>
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Jobs
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Designers
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Freelancers
                            </span>
                        </div>
                        
                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Tags
                            </span>
                        </div>

                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Places
                            </span>
                        </div>

                        <div className='footfordiv'>
                            <span className='spantextfoot'>
                                Resources
                            </span>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Footer