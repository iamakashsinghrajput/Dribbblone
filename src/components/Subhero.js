import React, { useState } from "react";
import "./Subhero.css";

const Subhero = () => {
    // State to manage the selected option
    const [selectedOption, setSelectedOption] = useState("Popular");

    // State to manage dropdown visibility
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to handle option selection
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsDropdownVisible(false); // Close the dropdown after selection
    };

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="subhero-wrapper">
            <div className='slider-wrapper'>
                <div className='btn-tabs'>
                    <button className='btn2'>Discover</button>
                    <button className='btn1'>Animation</button>
                    <button className='btn1'>Branding</button>
                    <button className='btn1'>Illustration</button>
                    <button className='btn1'>Mobile</button>
                    <button className='btn1'>Print</button>
                    <button className='btn1'>Product Design</button>
                    <button className='btn1'>Typography</button>
                    <button className='btn1'>Web Design</button>
                </div>
            </div>
            <div className="mainpop">
                <div className="select">
                    <button
                        className={`btn-subhero ${isDropdownVisible ? "active" : ""}`}
                        onClick={toggleDropdown}
                    >
                        {selectedOption}
                        <div className="arrowdiv">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="arrow"
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                
                {isDropdownVisible && (
                    <div className="sub-btn">
                        <div className="btn-2">
                            <button
                                className="btn-pop"
                                onClick={() => handleOptionChange("Popular")}
                            >
                                Popular
                                {selectedOption === "Popular" && (
                                    <div className="btndiv">
                                        <span className="btncheck">&#10003;</span>
                                    </div>
                                )}
                            </button>

                            <button
                                className="btn-not"
                                onClick={() => handleOptionChange("New & Noteworthy")}
                            >
                                New & Noteworthy
                                {selectedOption === "New & Noteworthy" && (
                                    <div className="btndiv">
                                        <span className="btncheck1">&#10003;</span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Subhero