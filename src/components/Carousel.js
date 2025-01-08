import React from 'react';
import Marquee from "react-fast-marquee";
import './Carousel.css';

import Grid1 from "../assets/grid1.png";
import Grid2 from "../assets/grid2.png";
import Grid3 from "../assets/grid3.png";
import Grid4 from "../assets/grid4.png";
import Grid5 from "../assets/grid5.png";
import Grid6 from "../assets/grid6.png";
import Grid7 from "../assets/grid7.png";
import Grid8 from "../assets/grid8.png";


const cards = [
    {title: "Typography",src:Grid1},
    {title: "Branding",src:Grid2},
    {title: "Product Design",src:Grid3},
    {title: "Animation",src:Grid4},
    {title: "Mobile",src:Grid5},
    {title: "Illustration",src:Grid6},
    {title: "Print",src:Grid7},
    {title: "Web Design",src:Grid8},
   
]

const Carousel = () => {
    return (
        <div className='car-wrapper'>
            <div className='carmain-div'>
                <Marquee loop={0} pauseOnHover={true} direction="left" speed={50}>
                    {
                        cards.map((card,i) => (
                            <div className='carddiv' key={i}>
                                <img src={card.src} className='cardimg' alt={card.src}/>
                                <p className='textdiv'>{card.title}</p>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default Carousel