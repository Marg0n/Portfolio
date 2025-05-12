/* eslint-disable no-unused-vars */
import Card from "../../components/Card";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import nextjs from "../../assets/icons/nextjs.png";
import mongo from "../../assets/icons/mongo.png";
import node from "../../assets/icons/nodejs.png";
import react from "../../assets/icons/react.png";
import mongoose from "../../assets/icons/mongoose.png";
import AOS from "aos";
import { useEffect } from "react";



const bestdeal = {
  name: "🛒 Best Deal – Multi-Vendor eCommerce Platform",

  Overview:
    "Best Deal is a comprehensive multi-vendor eCommerce platform built with the MERN stack. It enables multiple vendors to manage and sell their products independently, while providing customers with a seamless online shopping experience from various sellers under one roof.",

  Features: [
    "Vendor Autonomy: Vendors can manage their own product listings, orders, and customer interactions.",
    "Centralized Management: Admins can oversee vendor activities, ensure quality control, and maintain platform integrity.",
    "Customer Experience: Users can browse, search, and shop from multiple vendors with a unified cart system.",
    "State Management: Integrated Redux for smooth and efficient application state handling.",
    "Authentication: Role-based login system for admins, vendors, and customers.",
    "Responsive Design: Mobile-friendly, intuitive user interface for all roles.",
  ],

  TechStack: {
    Frontend: ["React", "Redux", "Tailwind CSS", "React Router"],
    Backend: ["Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
  },

  LiveDemo: "https://best-deal-909.web.app",

  Admin: "margon@gmail.com / Mm@123",
  User: "user@user1.com / User@user1.com",
  Vendor: "newvendor@test.com / Vv@test.com",
};


const BestDeal = () => {


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
        <div
            className="flex flex-col items-center justify-center w-full h-screen"
            // className="hero-content text-text-center md:w-3/4 min-h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col"
            data-aos="fade"
            data-aos-duration="2000"
        >
            <Card
                projectData={bestdeal}
               techIcons={[js, react, node, mongo, mongoose]}
            />
        </div>
    );
};

export default BestDeal;