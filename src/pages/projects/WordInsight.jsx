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



const wordInsight = {
  name: "📝 WordInsight – Blogging Platform",

  Overview:
    "WordInsight is a clean and responsive blogging platform where users can read, write, and bookmark blogs. With a user-first experience and simple onboarding, the platform encourages creative expression and discovery.",

  Features: [
    "User Authentication: Sign up and login to access personalized features.",
    "Blog Creation: Authenticated users can write and publish blog posts.",
    "Bookmarking: Save favorite blogs for easy access later.",
    "Responsive UI: Mobile-friendly and intuitive design.",
    "Content Feed: Browse and read public blogs from various users.",
    "Simple Navigation: Seamless transitions and easy blog discovery.",
  ],

  TechStack: {
    Frontend: ["React", "Tailwind CSS", "React Router"],
    Backend: ["Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
  },

  LiveDemo: "https://worldinsight.netlify.app",

  Admin: "No admin login required.",
  User: "Sign up to read, write, and bookmark blogs.",
};



const WordInsight = () => {


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
                projectData={wordInsight}
               techIcons={[js, react, node, mongo, mongoose]}
            />
        </div>
    );
};

export default WordInsight;