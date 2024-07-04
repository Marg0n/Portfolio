import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {



    return (
        <>
            <footer id='contact' className="footer footer-center  text-base-content rounded p-10">
                {/* <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> */}
                <h3 className="text-xl font-bold">Contact with me</h3>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        
                        <Link to='https://linkedin.com/in/sokhorio-margon-d-costa-885823193'  target="_blank" >
                            <FaLinkedinIn  />
                        </Link>
                        <Link to='https://www.facebook.com/margon.dcosta/'  target="_blank" >
                            <FaFacebookF />
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;