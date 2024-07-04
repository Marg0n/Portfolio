import Pimg from "../assets/images/SMD.png"

const About = () => {
    return (
        <>
            <div className="hero  min-h-screen" id="about">
                <div className="hero-content text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col">
                    <div className="max-w-xl ">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6 text-justify text-pretty">
                            Currently I am studying in MBA in UAP and working at <span className="primary-color" title="The CCCUL Ltd"><a href="https://cccul.com/" target="blank">The Christian Co-operative Credit Union Ltd., Dhaka</a></span>. Here, I have been working in the NOC, ICT Department since July 2021. I am practicing my coding beside my daily scedule. I also had an intership in Banglalink as a web developer and data entry intern. There I gained knowledge how to work in a Team oriented environment for the first time that helped me a lot in my current work place.
                        </p>
                    </div
                    >
                    
                    <div className="card lg:card-side bg-base-100 shadow-xl w-full">
                        <figure className="lg:w-1/3">
                            <img
                                className="max-h-screen"
                                src={Pimg}
                                alt="profile Pic" />
                        </figure>
                        <div className="card-body lg:w-2/3 justify-center items-center">
                            <h2 className="card-title mb-2 text-2xl underline">Some more information</h2>
                            <div className="text-start items-center justify-center flex gap-8 ">
                                <div>
                                    <p className="min-h-11">Name</p>
                                    <p  className="min-h-11">Education</p>
                                    <p  className="min-h-11">email</p>
                                    <p  className="min-h-11">Current Location</p>
                                </div>
                                <div className="font-bold font-serif">
                                    <p  className="min-h-11">Sokhorio Margon D&apos; Costa</p>
                                    <p  className="min-h-11">BSC in CSE, AIUB</p>
                                    <p  className="min-h-11">monondcosta@gmail.com</p>
                                    <p  className="min-h-11">Dhaka</p>
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