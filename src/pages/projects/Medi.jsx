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


   const medimart = {
    name: "💊 MediMart – Medicine E-Commerce Platform",
    Overview:
      "MediMart is a full-featured medicine e-commerce platform that enables users to securely browse, search, and purchase medicines online. It includes role-based access for customers and admins, secure authentication, prescription verification, order tracking, and a responsive shopping experience.",
    Features: [
      "User Authentication: Secure login via email/phone with JWT and bcrypt password hashing.",
      "Role-Based Access: Customers can shop and track orders; admins manage inventory, prescriptions, and users.",
      "Medicine Listings: Search by name, category, or symptoms. Each product includes details like stock, expiry, and prescription requirements.",
      "Cart & Checkout: Dynamic cart, prescription upload for restricted medicines, and integrated payment gateways (SSLCommerz).",
      "Order Management: Real-time tracking with email notifications; admins can update order status and verify prescriptions.",
      "Admin Dashboard: Manage medicines, orders, users, and stock levels.",
    ],
    TechStack: {
      Frontend: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      Backend: ["Node.js", "Express", "MongoDB", "JWT", "bcryptjs"],
    },
    LiveDemo: "https://medi-mart-night.vercel.app",
    Admin: "mina@mail.com / 1234",
    User: "nina@mail.com / 1234",
  };
  
const Medi = () => {


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
                projectData={medimart}
                techIcons={[ts, nextjs, react, node, mongo, mongoose]}
            />
        </div>
    );
};

export default Medi;