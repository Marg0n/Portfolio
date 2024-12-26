import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcInvite, FcPhoneAndroid } from "react-icons/fc";
import { Helmet } from "react-helmet-async";


const Footer = () => {



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
                        <FcPhoneAndroid size={25} /> +880-1738667793
                    </div>
                    <div className="flex text-base gap-2">
                        <FcInvite size={25} /> monondcosta@gmail.com
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
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="hover:cursor-pointer primary-color hover:text-[cornflowerblue]" title="monondcosta@gmail.com">Sokhorio Margon D&apos; Costa</span></p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;