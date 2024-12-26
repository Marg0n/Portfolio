import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import '../App.css'
import { PropTypes } from 'prop-types';
import Pic from "../assets/images/SMD.png";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";


const Heading = ({ downloadPdf }) => {

    // AOS animation useEffect
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Sokhorio Margon D&apos; Costa | Portfolio</title>
            </Helmet>

            <header
                className="bg-no-repeat"
            // style={{ backgroundImage: `url(${'../src/assets/images/developer.png'})`, backgroundPosition: `left 1rem top 6rem` }}
            >

                <div className="banner flex lg:flex-row flex-col w-full">
                    <div className="w-4/6">
                        <div className="lg:ml-56 pl-10">
                            <h3 className="banner-greeting dark2" data-aos="fade-down">Hi, I am</h3>
                            <h1
                                className="banner-title dark1 text-5xl text-pretty lg:text-8xl w-full"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                Sokhorio Margon D<span className="primary-color">&apos;</span> Costa
                            </h1>
                            <p className="dark3 text-wrap" data-aos="fade-up">
                                I am a <strong className="primary-color">MERN stack</strong> web developer. I am knowledgeable with <i className="primary-color">HTML</i>,  <i className="primary-color">CSS</i>, <i className="primary-color">Tailwind</i>, <i className="primary-color">JavaScript</i>, <i className="primary-color">React</i>, <i className="primary-color">Firebase</i>, <i className="primary-color">Node JS</i>, <i className="primary-color">Express JS</i>, <i className="primary-color">MongoDB</i> and <i className="primary-color">MySQL</i>. I love coding, as it gives me the feelings of fulfillment. In the future, I also love to learn, know and work more about these and the similar technologies.
                            </p>
                        </div>

                        {/* <div className="gap-4 lg:ml-56 flex flex-col-reverse md:flex-row justify-center items-center">
                            <button
                                onClick={downloadPdf}
                                className="btn btn-customized"
                            >
                                <FaDownload /> Download Page
                            </button>
                            <a href="#contact">
                                <button className="btn" >
                                    <FaPhoneAlt /> Contact
                                </button>
                            </a>
                        </div> */}
                    </div>

                    <div className="" data-aos="fade-left" data-aos-duration="2000">
                        <img id="profile-pic" src={Pic} alt="" />
                    </div>
                </div>
            </header >
        </>
    );
};

Heading.propTypes = {
    downloadPdf: PropTypes.func,
}

export default Heading;