import { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import { Helmet } from "react-helmet-async";

import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import nextjs from "../assets/icons/nextjs.png";
import mongo from "../assets/icons/mongo.png";
import node from "../assets/icons/nodejs.png";
import react from "../assets/icons/react.png";
import mongoose from "../assets/icons/mongoose.png";
import CompactCard from "./CompactCard";

const bestdeal = `Our group project, Best Deal, is set to revolutionize online marketplaces by building a comprehensive Multi-Vendor eCommerce Platform. This platform is designed to accommodate multiple vendors, allowing them to independently manage and sell their products. Buyers benefit from a seamless experience, enabling them to browse, search, and purchase products from various vendors, all within a single, cohesive platform.

Built on the robust MERN stack (MongoDB, Express, React, Node.js), our platform ensures modern, efficient, and secure solutions tailored for both vendors and customers. Key features include:

- Vendor autonomy: Vendors can manage their own product listings, orders, and customer interactions.
- Centralized management: Platform owners can oversee vendor activities, ensuring smooth operation and quality control.
- State-of-the-art technology: Integration with Redux for efficient state management, enhancing user experience.

Explore more about our project at: https://best-deal-909.web.app

Demo Credentials: (email / pass)

Admin: margon@gmail.com / Mm@123
Vendor: newvendor@test.com / Vv@test.com
User: user@user1.com / User@user1.com`;

const medimart = `💊 MediMart – Medicine E-Commerce Platform

Overview:

MediMart is a full-featured medicine e-commerce platform that enables users to securely browse, search, and purchase medicines online. It includes role-based access for customers and admins, secure authentication, prescription verification, order tracking, and a responsive shopping experience.`;

const bicycle = `🚲 Bicycle Store – E-Commerce Application

Overview:

Bicycle Store is a responsive e-commerce platform that allows users to browse, search, and purchase bicycles. It features secure role-based authentication, product filtering, order management, and a streamlined checkout experience.

🔑 Features:

User Authentication: Role-based login with secure password hashing and JWT-based sessions.
Public Pages: Home, About, and All Bicycles with filtering, search, and dynamic bicycle listings.
Private Routes: Checkout and dashboards for both users and admins.
Admin Dashboard: Manage users, products, and orders with full CRUD functionality.
User Dashboard: View orders, update profiles, and change passwords securely.
Secure Payments: Integration with Stripe or ShurjoPay for order completion.

🛠 Tech Highlights:

JWT authentication, bcrypt password hashing
Role-based access control (Admin vs. Customer)
Fully responsive UI with search and filter features

🔗 Live Demo: https://bicyclestore.netlify.app

Demo Credentials: (email / pass)

Admin: mina@mail.com / 1234
User: nina@mail.com / 1234`;

const medihouse =`A robust Diagnostic Center Management System, a full-stack web application that effectively manages appointments, patient records, test results, and administrative tasks for a diagnostic center.
                            
🔗 Live Demo: https://medihouse.netlify.app

Demo Credentials: (email / pass)

Admin: margon@mail.com / mM123\``;

const Horizon=`A robust tourism management website. A tourism-focused website, but not just any tourism! Find out more information here!

🔗 Live Demo: https://tourism-management-client.web.app

To explore more, just open an account and you are good to go.`;

const WordInsight=`A Blog focused website. Here any user can create account. Then they can read, write and bookmark blogs.

🔗 Live Demo: https://worldinsight.netlify.app

To explore more, just open an account and you are good to go.`;

const RecentProjects = () => {

    // AOS animation useEffect
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,//Ensures that animations happen every time the element comes into view (not just the first time).
            mirror: true,//Allows animations to happen both when scrolling up and down.
        });

        // refresh AOS animations
        const handleScroll = () => {
            AOS.refresh();
        };

        // scroll event listener to the window object
        window.addEventListener('scroll', handleScroll);

        // Cleanup Function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Sokhorio Margon D&apos; Costa | Projects</title>
            </Helmet>

            <div className="hero mt-28 flex flex-col my-6  justify-center items-center" id="projects">
                <div
                    className="hero-content text-text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold text-center">Recent Projects</h1>
                        <p className="py-6">
                            Here is some of my recent projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 p-4">
                       <CompactCard
                            name='MediMart'
                            descp={medimart}
                            lang='Next.js + TypeScript'
                            link="/medi"
                            aos="fade"
                            aosDuration="2000"
                            techIcons={[ts, nextjs, react, node, mongo, mongoose]}
                        />

                         <CompactCard
                            name='Best Deal'
                            descp={bestdeal}
                            lang='MERN stack'
                            link=""
                            aos="fade-left"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo, mongoose]}
                        />

                        <CompactCard
                            name='Bicycle'
                            descp={bicycle}
                            lang='Next.js + TypeScript'
                            link=""
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[ts, nextjs, react, node, mongo]}
                        />

                        <CompactCard
                            name='MediHouse_Client'
                            descp={medihouse}
                            lang='MERN stack'
                            link=''
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo]}
                        />

                        <CompactCard
                            name='Horizon'
                            descp={Horizon}
                            lang='MERN stack'
                            link=""
                            aos="fade-up"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo]}
                        />

                        <CompactCard
                            name='Word Insight'
                            descp={WordInsight}
                            lang='MERN stack'
                            link=""
                            aos="fade-left"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentProjects;