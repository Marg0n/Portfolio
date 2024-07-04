import Card from "./Card";


const RecentProjects = () => {
    return (
        <>
            <div className="hero flex flex-col my-6" id="projects">
                <div className="hero-content text-text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col">

                    <div>
                        <h1 className="text-5xl font-bold text-center">Current Projects</h1>
                        <p className="py-6">
                            Here is some of my recent projects:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <Card name='MediHouse_Client' descp='A robust Diagnostic Center Management System, a full-stack web application that effectively manages appointments, patient records, test results, and administrative tasks for a diagnostic center.' lang=' MERN stack' link='https://github.com/Marg0n/MediHouse_Client'/>
                        <Card name=' Horizon' descp='A robust tourism management website. A tourism-focused website, but not just any tourism!' lang=' MERN stack' link="https://github.com/Marg0n/tourism_management_client"/>
                        <Card name=' Word Insight' descp='A Blog based website.' lang=' MERN stack' link="https://github.com/Marg0n/word_insight_client"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentProjects;