import { FaDownload, FaPhoneAlt } from "react-icons/fa";


const Heading = () => {

    const lists = <>
        <li><a className="dark2 hover:bg-orange-300" href="#header">Portfolio</a></li>
        <li><a className="dark2 hover:bg-orange-300" href="#about">About Me</a></li>
        <li><a href="contact" className="lg:hidden  hover:bg-base-100">
            <button className="primary-color font-bold font-serif">Hire Me</button>
        </a></li>
    </>

    return (
        <>
            <header id="header"
                className="bg-no-repeat"
            // style={{ backgroundImage: `url(${'../src/assets/images/developer.png'})`, backgroundPosition: `left 1rem top 6rem` }}
            >


                <div className="relative navbar  justify-center">
                    {/* hidden nav list for mobile */}
                    <div className="dropdown absolute left-8 bg-red-600">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
                            {lists}
                        </ul>
                    </div >


                    {/* name */}
                    <nav className="nav-title dark1 flex justify-around w-full" >
                        <h3>Ma<span className="primary-color">r</span>gon</h3>

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 items-center">
                                {lists}
                                <li ><a href="contact">
                                    <button className="btn-customized">Hire Me</button>
                                </a></li>
                            </ul>
                        </div>
                    </nav >
                </div>

                <div className="banner flex lg:flex-row flex-col w-full">
                    <div className="w-4/6">
                        <div className="lg:ml-56 pl-10">
                            <h3 className="banner-greeting dark2">Hi, I am</h3>
                            <h1 className="banner-title dark1 text-5xl text-pretty lg:text-8xl w-full">
                                Sokhorio Margon D<span className="primary-color">&apos;</span> Costa
                            </h1>
                            <p className="dark3 text-wrap">
                                I am a <strong className="primary-color">MERN stack</strong> web developer. I am knowledgeable with <i className="primary-color">HTML</i>,  <i className="primary-color">CSS</i>, <i className="primary-color">Tailwind</i>, <i className="primary-color">JavaScript</i>, <i className="primary-color">React</i>, <i className="primary-color">Firebase</i>, <i className="primary-color">Node JS</i>, <i className="primary-color">Express JS</i>, <i className="primary-color">MongoDB</i>. I love coding, as it gives me the feelings of fulfillment. In the future, I also love to learn, know and work more about these and the similar technologies.
                            </p>
                        </div>

                        <div className="gap-4 lg:ml-56 flex flex-col-reverse md:flex-row justify-center items-center">
                            <button className="btn btn-customized">
                                <FaDownload /> Download CV
                            </button>
                            <button className="btn">
                                <FaPhoneAlt /> Contact
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <img id="profile-pic" src="/src/assets/images/SMD.png" alt="" />
                    </div>
                </div>
            </header >
        </>
    );
};

export default Heading;