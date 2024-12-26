
import About from './components/About'
import Footer from './components/Footer'
import Heading from './components/Heading'
import RecentProjects from './components/RecentProjects'
import Skills from './components/Skills'

import './App.css'
import { HiMenuAlt1 } from "react-icons/hi";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import { useEffect, useRef } from 'react'
import { FcDownload } from 'react-icons/fc'
import { NavHashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import tap from "../src/assets/icons/tap-gesture.gif"

function App() {

  const pdfRef = useRef();
  // hash links
  const { hash } = useLocation();

  const lists = <>
    <li>
      <NavHashLink
        className={hash === "#header" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
        to="#header"
        smooth
      >
        Portfolio
      </NavHashLink>
    </li>
    <li>
      <NavHashLink
        smooth
        className={hash === "#about" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
        to="#about"
      >
        About Me
      </NavHashLink>
    </li>
    <li>
      <NavHashLink
        smooth
        className={hash === "#skills" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
        to="#skills"
      >
        Skills
      </NavHashLink>
    </li>
    <li><NavHashLink
      smooth
      className={hash === "#projects" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
      to="#projects">
      Projects
    </NavHashLink>
    </li>
    <li>
      <NavHashLink smooth className="lg:hidden btn btn-ghost hover:bg-red-200 group" to="#contact" >
        <button className="primary-color font-bold font-serif group-hover:text-black">
          Hire Me
        </button>
      </NavHashLink>
    </li>
  </>

  const downloadPdf = () => {

    // download pdf
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("portfolio of Sokhorio Margon D' Costa.pdf")
    });
  };

  // scrolling effect
  useEffect(() => {
    const navTitle = document.querySelector('.nav-title-sliding');
    const dropdown = document.querySelector('.dropdown-sliding');

    // Ensure navTitle is visible initially
    navTitle.classList.add('visible');

    const handleScroll = () => {
      if (window.scrollY < 1) {
        navTitle.classList.add('visible');
        dropdown.classList.remove('visible');
      } else {
        navTitle.classList.remove('visible');
        dropdown.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='font-lato space-y-10 max-w-screen' id="header">

      {/* navbar */}
      <div className="navbar justify-center sticky top-0 bg-opacity-5 bg-orange-500 z-10 -mb-10">

        {/* Download */}
        <button
          onClick={downloadPdf}
          className="btn btn-circle btn-warning absolute right-10 animate-pulse hover:animate-none"
        >
          <FcDownload size={25} />
        </button>

        {/* hidden nav list for mobile */}
        <div className="dropdown absolute left-8 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-[primary-color] lg:hidden">
            <HiMenuAlt1 size={25} className="primary-color" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
            {lists}
          </ul>
        </div >


        {/* nav list after scrolling */}
        <div 
        id='scroll-nav'
        className="lg:visible xl:visible invisible dropdown dropdown-sliding dropdown-top dropdown-end absolute right-10 top-[90vh] animate-bounce hover:animate-none">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-[primary-color]">
            {/* <HiMenuAlt1 size={25} className="primary-color" /> */}
            <img src={tap} alt={tap} className="w-10 h-10 rounded-full" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
            {lists}
            <li >
              <NavHashLink smooth to="#contact" className="btn btn-ghost hover:bg-red-200 group">
                <button id='hire' className="primary-color font-bold font-serif group-hover:text-black">Hire Me</button>
              </NavHashLink>
            </li>
          </ul>
        </div >


        {/* name */}
        <nav className="nav-title nav-title-sliding dark1 md:flex justify-around w-full hidden" >
          <h3>Ma<span className="primary-color">r</span>gon</h3>

          {/* nav for bigger screen */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center">
              {lists}
              <li >
                <NavHashLink smooth to="#contact" className="p-0 ">
                  <button id='hire' className="btn-customized hover:dark2">Hire Me</button>
                </NavHashLink>
              </li>
            </ul>
          </div>
        </nav >
      </div>

      <div ref={pdfRef}>
        <Heading downloadPdf={downloadPdf} />

        <About />

        <Skills />

        <RecentProjects />

        <Footer />
      </div>


    </div>
  )
}

export default App
