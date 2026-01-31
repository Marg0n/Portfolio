import AOS from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Pimg from "../assets/images/SMD.png";

const About = () => {

    //* variables
    // const Pimg = 'https://avatars.githubusercontent.com/u/54356991?v=4'

    //* AOS animation useEffect
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
                <title>Sokhorio Margon D&apos; Costa | About Me</title>
            </Helmet>

            <div className="hero mt-28 min-h-screen" id="about">
                <div className="hero-content text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col px-4">
                    <div className="max-w-xl " >
                        <h1 className="text-5xl font-bold" data-aos="slide-up" data-aos-duration="2000">About Me</h1>
                        <p className="py-6 text-justify text-pretty" data-aos="slide-up" data-aos-duration="2500">
                            Currently I am studying in MBA in UAP and working at <span className="primary-color" title="The CCCUL Ltd"><a href="https://cccul.com/" target="blank">The Christian Co-operative Credit Union Ltd., Dhaka</a></span>. I have been working in the <i><b>Network Operations Center (NOC)</b></i> within the ICT Department since July 2021. Beside my full time job, I&apos;am also working part-time remote job with <span className="primary-color" title="Kreati">Kreati</span> as a <i><b>full stack web-developer</b></i>. I also completed an internship at <span className="primary-color" title="Banglalink">Banglalink</span> as a <i><b>web developer & data entry intern</b></i>. During this experience, I learned how to work effectively in a team-oriented environment, which has greatly benefited me in my current workplace.
                        </p>
                    </div>

                    <div className="card lg:card-side w-full flex justify-center items-center">
                        <figure className="lg:w-1/3 !hidden lg:!block z-50 text-center" data-aos="slide-left" data-aos-duration="2500">
                            <img
                                className="object-contain h-full w-full rounded-lg"
                                src={Pimg}
                                alt="profile Pic" />
                        </figure>
                        <div
                            className="card-body w-full lg:w-2/3 justify-center items-center"
                            data-aos="slide-right" data-aos-duration="2500"
                        >
                            <h2 className="card-title mb-2 text-2xl underline">Some more information</h2>
                            <div className="text-start items-center justify-center flex gap-8 ">
                                <div>
                                    <p className="min-h-11">Name</p>
                                    <p className="min-h-11">Education</p>
                                    <p className="min-h-11"></p>
                                    <p className="min-h-11">Email</p>
                                    <p className="min-h-11">Currently Working</p>
                                    <p className="min-h-11"></p>
                                    <p className="min-h-11">Current Location</p>
                                </div>
                                <div className="font-bold font-serif">
                                    <p className="min-h-11">Sokhorio Margon D&apos; Costa</p>
                                    <p className="min-h-11">BSC in CSE, AIUB</p>
                                    <p className="min-h-11">MBA (HRM major), UAP</p>
                                    <p className="min-h-11">monondcosta@gmail.com</p>
                                    <p className="min-h-11">The Christian Co-operative Credit Union Ltd.</p>
                                    <p className="min-h-11">Kreati (remote)</p>
                                    <p className="min-h-11">Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;