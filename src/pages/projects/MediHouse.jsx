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


const medihouse = {
  name: "🧪 MediHouse – Diagnostic Center Management System",
  Overview:
    "MediHouse is a robust full-stack web application designed for diagnostic centers to efficiently manage appointments, patient records, medical test results, and administrative operations. It offers role-based access, streamlined workflows, and secure data handling for a professional healthcare environment.",
  Features: [
    "User Authentication: Secure login with JWT and bcrypt-based password protection.",
    "Appointment Management: Book, reschedule, or cancel patient appointments with real-time availability tracking.",
    "Patient Records: Maintain detailed patient profiles including visit history and diagnostic reports.",
    "Test Results: Upload, manage, and share diagnostic test results with patients in digital format.",
    "Admin Dashboard: Oversee operations, manage appointments, test categories, patient records, and user roles.",
    "Notifications: Automated notifications for appointment confirmations and test result availability.",
  ],
  TechStack: {
    Frontend: ["React", "JavaScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MongoDB", "JWT", "bcryptjs"],
  },
  LiveDemo: "https://medihouse.netlify.app",
  Admin: "margon@mail.com / mM123`",
};

  
const MediHouse = () => {


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
                projectData={medihouse}
                techIcons={[ts, nextjs, react, node, mongo, mongoose]}
            />
        </div>
    );
};

export default MediHouse;