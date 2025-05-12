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



const horizon = {
  name: "🌄 Horizon – Tourism Management Website",

  Overview:
    "Horizon is a robust and user-friendly tourism management platform designed to help users discover and book travel experiences seamlessly. Whether it's exploring destinations, managing bookings, or viewing travel guides, Horizon simplifies the tourism journey with a modern web interface.",

  Features: [
    "User Registration: Sign up and create a travel profile to begin exploring.",
    "Tour Listings: Browse curated travel experiences and destinations.",
    "Booking System: Reserve spots on tours with instant confirmation.",
    "Admin Access: Manage listings, user activity, and booking data.",
    "Responsive Design: Optimized for both desktop and mobile browsing.",
    "Secure Authentication: Ensures safe and personalized access to services.",
  ],

  TechStack: {
    Frontend: ["React", "Tailwind CSS", "React Router"],
    Backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },

  LiveDemo: "https://tourism-management-client.web.app",

  Admin: "No specific admin login provided.",
  User: "Sign up as a new user to explore the platform.",
};



const Horizon = () => {


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
                projectData={horizon}
                techIcons={[js, react, node, mongo]}
            />
        </div>
    );
};

export default Horizon;