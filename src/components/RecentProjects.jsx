import { useEffect } from "react";
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

const bestdeal = `E-Commerce Platform

Our group project, Best Deal, is set to revolutionize online marketplaces by building a comprehensive Multi-Vendor eCommerce Platform. This platform is designed to accommodate multiple vendors, allowing them to independently manage and sell their products. Buyers benefit from a seamless experience, enabling them to browse, search, and purchase products from various vendors, all within a single, cohesive platform.

To explore more, just open an account and you are good to go.`;

const medimart = `💊 MediMart – Medicine E-Commerce Platform

Overview:

MediMart is a full-featured medicine e-commerce platform that enables users to securely browse, search, and purchase medicines online. It includes role-based access for customers and admins, secure authentication, prescription verification, order tracking, and a responsive shopping experience.`;

const bicycle = `🚲 Bicycle Store – E-Commerce Application

Overview:

Bicycle Store is a responsive e-commerce platform that allows users to browse, search, and purchase bicycles. It features secure role-based authentication, product filtering, order management, and a streamlined checkout experience.

To explore more, just open an account and you are good to go.`;

const medihouse = `A robust Diagnostic Center Management System, a full-stack web application that effectively manages appointments, patient records, test results, and administrative tasks for a diagnostic center.


To explore more, just open an account and you are good to go.`;

const Horizon = `A robust tourism management website. A tourism-focused website, but not just any tourism! Find out more information here!


To explore more, just open an account and you are good to go.`;

const WordInsight = `A Blog focused website. Here any user can create account. Then they can read, write and bookmark blogs.


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
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[ts, nextjs, react, node, mongo, mongoose]}
                        />

                        <CompactCard
                            name='Best Deal'
                            descp={bestdeal}
                            lang='MERN stack'
                            link="/bestdeal"
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo, mongoose]}
                        />

                        <CompactCard
                            name='Bicycle'
                            descp={bicycle}
                            lang='Next.js + TypeScript'
                            link="bicycle"
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[ts, nextjs, react, node, mongo]}
                        />

                        <CompactCard
                            name='MediHouse_Client'
                            descp={medihouse}
                            lang='MERN stack'
                            link='medihouse'
                            aos="fade-right"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo]}
                        />

                        <CompactCard
                            name='Horizon'
                            descp={Horizon}
                            lang='MERN stack'
                            link="/horizon"
                            aos="fade-up"
                            aosDuration="2000"
                            techIcons={[js, react, node, mongo]}
                        />

                        <CompactCard
                            name='Word Insight'
                            descp={WordInsight}
                            lang='MERN stack'
                            link="/wordinsight"
                            aos="fade-right"
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