import { Helmet } from "react-helmet-async";
import AOS from "aos";
import { useEffect } from "react";


const Skills = () => {

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
                <title>Sokhorio Margon D&apos; Costa | Projects</title>
            </Helmet>

            <div className="hero min-h-screen" id="skills">
                <div className="hero-content text-text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col justify-between items-center">

                    <div className="max-w-xl ">
                        <h1 className="text-5xl font-bold text-center" data-aos="slide-up" data-aos-duration="2000">Skills Set</h1>
                        <p className="py-6 text-justify" data-aos="slide-up" data-aos-duration="2000">
                            From my university tenure to recent years, I have gained knowledge about various languages. But now, I am more proficient on  <strong className="primary-color">MERN stack</strong> web development. I am currently working more with <i className="primary-color">HTML</i>,  <i className="primary-color">CSS</i>, <i className="primary-color">Tailwind</i>, <i className="primary-color">JavaScript</i>, <i className="primary-color">React</i>, <i className="primary-color">Firebase</i>, <i className="primary-color">Node JS</i>, <i className="primary-color">Express JS</i>, <i className="primary-color">MongoDB</i> and <i className="primary-color">MySQL</i>. I am also a team player and can work in group environment.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <br />
                        <p className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-2">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" data-aos="fade-down-right" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS" data-aos="fade-down" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" data-aos="fade-down-left" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" data-aos="fade-down-left" data-aos-duration="1500"/>
                        </p>
                        <p className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-2 ">
                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="REACT" data-aos="fade-right" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind_CSS" data-aos="fade-up-right" data-aos-duration="1000"/>
                            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" data-aos="fade-up-left" data-aos-duration="1000"/>
                            <img src="https://img.shields.io/badge/firebase-E5821D.svg?style=for-the-badge&logo=firebase" alt="Firebase" data-aos="fade-left" data-aos-duration="1500"/>

                        </p>
                        <p className="grid grid-cols-2 md:grid-cols-4  justify-center items-center gap-2">
                            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" data-aos="fade-up-right" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" data-aos="fade-up" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" data-aos="fade-up" data-aos-duration="1500"/>
                            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs" data-aos="fade-up-left" data-aos-duration="1500"/>

                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;