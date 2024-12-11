import Card from "./Card";

const description = `Our group project, Best Deal, is set to revolutionize online marketplaces by building a comprehensive Multi-Vendor eCommerce Platform. This platform is designed to accommodate multiple vendors, allowing them to independently manage and sell their products. Buyers benefit from a seamless experience, enabling them to browse, search, and purchase products from various vendors, all within a single, cohesive platform.

Built on the robust MERN stack (MongoDB, Express, React, Node.js), our platform ensures modern, efficient, and secure solutions tailored for both vendors and customers. Key features include:

- Vendor autonomy: Vendors can manage their own product listings, orders, and customer interactions.
- Centralized management: Platform owners can oversee vendor activities, ensuring smooth operation and quality control.
- State-of-the-art technology: Integration with Redux for efficient state management, enhancing user experience.

Explore more about our project at: https://best-deal-909.web.app`;

const RecentProjects = () => {
    return (
        <>
            <div className="hero flex flex-col my-6  justify-center items-center" id="projects">
                <div className="hero-content text-text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col">

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold text-center">Recent Projects</h1>
                        <p className="py-6">
                            Here is some of my recent projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 p-4">
                        <Card
                            name='Best Deal'
                            descp={description}
                            lang='MERN stack'
                            link="https://best-deal-909.web.app"
                        />


                        <Card
                            name='MediHouse_Client'
                            descp='A robust Diagnostic Center Management System, a full-stack web application that effectively manages appointments, patient records, test results, and administrative tasks for a diagnostic center.'
                            lang=' MERN stack'
                            link='https://medihouse.netlify.app'
                        />

                        <Card
                            name='Horizon'
                            descp='A robust tourism management website. A tourism-focused website, but not just any tourism! Find out more information here!'
                            lang=' MERN stack'
                            link="https://tourism-management-client.web.app"
                        />

                        <Card
                            name='Word Insight'
                            descp='A Blog focused website. Here any user can create account. Then they can read, write and bookmark blogs.'
                            lang=' MERN stack'
                            link="https://worldinsight.netlify.app"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentProjects;