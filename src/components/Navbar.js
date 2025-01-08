import React from "react";
import './Navbar.css'

import Logo from '../assets/logo.png';
import Browse from '../assets/browseDesigner.png';
import Explore from '../assets/explore.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" width={100} height={55} loading="lazy"/>
            </div>

            <div className="links">
                <ul className="links-tabs">
                    <li className="explore">
                        <div className="explore_page">
                            <span>Explore</span>
                            <div className="link-drop1">
                                <img src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png' className='inputimg1'></img>
                            </div>
                            <div className="explore-panal">
                                <div className="ex-inside">
                                    <div className="imgforum">
                                        <img src={Explore} alt="exploreimg" width={22} height={15} loading="lazy" className="exploreimg"/>
                                        <span className="exspan">
                                            Popular
                                        </span>
                                    </div>
                                    
                                    <div className="imgforum2">
                                        <img src={img4} width={19} height={18} loading="lazy" className="newimg"/>
                                        <span className="exspan">New and Noteworthy</span>
                                    </div>
                                    {/* <br/> */}
                                    <hr
                                        style={
                                            {
                                                background:'rgb(190, 190, 190)',
                                                color: 'rgb(190, 190, 190)',
                                                borderColor: 'rgb(190, 190, 190)',
                                                width: '160px'
                                            }
                                        }
                                    />
                                    <span className="exspan1">Product Design</span>
                                    <span className="exspan1">Web Design</span>
                                    <span className="exspan1">Animations</span>
                                    <span className="exspan1">Design</span>
                                    <span className="exspan1">Illustration</span>
                                    <span className="exspan1">Mobile</span>
                                    <span className="exspan1">Topography</span>
                                    <span className="exspan1">Print</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="designer">
                        <div className="designer_page">
                            <span>Hire a Designer</span>
                            <div className="link-drop">
                                <img src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png' className='inputimg1'></img>
                            </div>
                            <div className="des-panal">
                                <div className="desex-inside">
                                    <div className="desclass">
                                        <img src={Browse} width={19} height={19} className="desimg"/>
                                        <span className="desexspan">Browse Designer</span>
                                    </div>
                                    
                                    <div className="desclass">
                                        <img src={img2} width={19} height={19} className="desimg"/>
                                        <span className="desexspan">Submit Project Brief</span>
                                    </div>

                                    <div className="desclass">
                                        <img src={img3} width={19} height={19} className="desimg"/>
                                        <span className="desexspan">Post on Job</span>
                                    </div>

                                    <div className="desclass">
                                        <img src={img5} width={19} height={19} className="desimg"/>
                                        <span className="desexspan">Hiring on Dribbble</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="jobs">
                        <div className="jobs_page">
                            <span>Find Jobs</span>
                        </div>
                    </li>
                    <li className="blogs">
                        <div className="blogs_page">
                            <span>Blog</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <div className="Signup">
                    <button className="Signup-btn">Sign up</button>
                </div>
                <div className="Login">
                    <button className="login-btn">Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar