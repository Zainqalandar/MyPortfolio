import React, { useEffect, useState } from 'react'
import headerImg from '../assets/img/header-Img.svg'
import bgImage from '../assets/img/Banner-bg.png'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <>
            <div
                className="flex flex-col text-white bg-cover bg-center lg:h-screen sm:flex-row pt-12 text-2xl"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="p-12 lg:p-16 sm:p-6 md:p-12 lg:m-9">
                    <span className="inline-block mb-4 text-lg font-semibold tracking-wide px-2 py-1 bg-gradient-to-r from-[rgba(170,54,124,0.5)] via-transparent to-[rgba(74,47,189,0.5)] border border-[rgba(255,255,255,0.5)]">
                        Welcome to my Portfolio
                    </span>
                    <h1 className="text-6xl font-bold">
                        Hi! I'm Syed Zain <span className="wrap">{text}<span class="material-symbols-outlined">edit</span></span>
                    </h1>
                    <p className="my-4 text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="mt-2" onClick={() => console.log('connect')}>
                        Let’s Connect <span class="material-symbols-outlined">
                            keyboard_double_arrow_right
                        </span>
                    </button>
                </div>
                <div className="asad p-20 lg:p-20 sm:p-9 md:p-12 lg:m-4">
                    <img src={headerImg} alt="headerImg" />
                </div>
            </div>
        </>
    )
}

export default Banner