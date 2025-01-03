import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FcInvite, FcPhoneAndroid } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const Footer = () => {

    const [animationClass, setAnimationClass] = useState(''); 
    const { hash } = useLocation();
    /**
     * Destructuring Return Values:
         - ref: A reference object to be assigned to the element you want to observe.
         -isVisible: A boolean indicating whether the element is currently in the viewport.
     * Options: { threshold: 0.1 }: The observer will trigger when 10% (0.1) of the target element is visible in the viewport.
     */
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        if(hash === '#contact' || isVisible){
            setAnimationClass('animate__animated animate__flash animate__repeat-2');
        }
        else { 
            setAnimationClass(''); 
        }
    },[hash, isVisible]);


    return (
        <>
            <Helmet>
                <title>Sokhorio Margon D&apos; Costa | Portfolio</title>
            </Helmet>

            <footer id='contact' className="footer footer-center mt-12 text-base-content rounded p-10  bg-opacity-10 bg-orange-500">
                {/* <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> */}
                <div className="gap-2 ">
                    <h3 className="text-xl font-bold">Contact with me</h3>
                    <p className="space-y-2 text-base ">
                        Here is some contact information where you can contact me: <br />
                    </p>
                    <div className="flex text-base gap-2">
                        <FcPhoneAndroid size={25} className="animate__animated animate__tada animate__infinite" /> +880-1738667793
                    </div>
                    <div className="flex text-base gap-2 justify-center items-center">
                        <DotLottieReact
                            src="https://lottie.host/f5995524-fcff-4e5c-8b23-df160d0edf8f/wWYqOLa7Wt.lottie"
                            loop
                            autoplay
                            className="w-15 h-10 -mx-5 p-0"
                        />
                        {/* <FcInvite size={25} />  */}
                        monondcosta@gmail.com
                    </div>
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4">

                        <Link to='https://linkedin.com/in/sokhorio-margon-d-costa-885823193' target="_blank" className="hover:scale-110">
                            <FaLinkedinIn size={25} />
                        </Link>
                        <Link to='https://www.facebook.com/margon.dcosta/' target="_blank" className="hover:scale-110">
                            <FaFacebookF size={25} />
                        </Link>
                        <Link to='https://github.com/Marg0n' target="_blank" className="hover:scale-110">
                            <FaGithub size={25} />
                        </Link>
                    </div>
                </nav>
                <aside ref={ref}>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className={`hover:cursor-pointer primary-color hover:text-[cornflowerblue] ${animationClass}`} title="monondcosta@gmail.com"> Sokhorio Margon D&apos; Costa</span></p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;