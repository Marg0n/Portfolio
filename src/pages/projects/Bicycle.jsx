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



const bicycle = {
  name: "🚲 Bicycle Store – E-Commerce Application",

  Overview:
    "Bicycle Store is a responsive e-commerce platform that allows users to browse, search, and purchase bicycles. It features secure role-based authentication, product filtering, order management, and a streamlined checkout experience.",

  Features: [
    "User Authentication: Role-based login with secure password hashing and JWT-based sessions.",
    "Public Pages: Home, About, and All Bicycles with filtering, search, and dynamic bicycle listings.",
    "Private Routes: Checkout and dashboards for both users and admins.",
    "Admin Dashboard: Manage users, products, and orders with full CRUD functionality.",
    "User Dashboard: View orders, update profiles, and change passwords securely.",
    "Secure Payments: Integration with Stripe or ShurjoPay for order completion.",
  ],

  TechStack: {
    Frontend: ["React", "Tailwind CSS", "React Router"],
    Backend: ["Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
  },

  LiveDemo: "https://bicyclestore.netlify.app",

  Admin: "mina@mail.com / 1234",
  User: "nina@mail.com / 1234",
};


const Bicycle = () => {


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
                projectData={bicycle}
                techIcons={[react, node, mongo]}
            />
        </div>
    );
};

export default Bicycle;