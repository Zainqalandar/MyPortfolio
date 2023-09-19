import React from 'react'
import Carousel from 'react-multi-carousel'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Skills() {
    return (
        <div
        className=' bg-neutral-900 h-full p-5'
            style={{ backgroundImage: `url(${colorSharp})` }}
        >
            <div className=" bg-gray-900 text-white w-[80%] mx-auto rounded-xl p-4 sm:-mt-9 md:-mt-12 lg:-mt-20 xl:-mt-24" id="skills">
                <h1 className=' text-center text-5xl font-bold my-2 text-white'>Skills-zain</h1>
                <p className=' mx-12 text-center my-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sed dolorem quas incidunt fuga numquam nesciunt dolore quod quibusdam, at optio repellat.</p>
                <div>
                    <Carousel className='  mx-12 h-[300px]' infinite={true} responsive={responsive} >
                        <div className="item flex flex-col items-center">
                            <img className=' w-40' src={meter1} alt="Image" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img className=' w-40' src={meter2} alt="Image" />
                            <h5>Brand Identity</h5>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img className=' w-40' src={meter3} alt="Image" />
                            <h5>Web Design</h5>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img className=' w-40' src={meter1} alt="Image" />
                            <h5>Logo Design</h5>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img className=' w-40' src={meter1} alt="Image" />
                            <h5>Instagram marketing</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Skills