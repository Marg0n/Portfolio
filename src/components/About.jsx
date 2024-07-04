

const About = () => {
    return (
        <>
            <div className="hero  min-h-screen">
                <div className="hero-content text-center w-3/4 h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">
                            Currently I am studying in MBA in UAP and working at <span className="primary-color" title="The CCCUL Ltd"><a href="https://cccul.com/" target="blank">The Christian Co-operative Credit Union Ltd., Dhaka</a></span>. Here, I have been working in the NOC, ICT Department since July 2021. I am practicing my coding beside my daily scedule.
                        </p>
                    </div
                    >
                    <div className="w-full flex justify-center items-center">
                        <table className="w-full">
                            <tr className="font-bold text-lg">
                                <td>Name</td>
                                <td>Education</td>
                                <td>email</td>
                                <td>Current Location</td>
                            </tr>
                            <tr>
                                <td>Sokhorio Margon D&apos; Costa</td>
                                <td>BSC in CSE, AIUB</td>
                                <td>monondcosta@gmail.com</td>
                                <td>Dhaka</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;