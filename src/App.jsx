/* eslint-disable no-unused-vars */

import About from './components/About'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import RecentProjects from './components/RecentProjects'
import Skills from './components/Skills'

import { HiMenuAlt1 } from "react-icons/hi"
import './App.css'

import html2canvas from "html2canvas-pro"
import { jsPDF } from "jspdf"
import React, { useEffect, useRef, useState } from 'react'
import { FcDownload } from 'react-icons/fc'
import { useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import tap from "../src/assets/icons/tap-gesture.gif"
import useIntersectionObserver from './hooks/useIntersectionObserver'
import { PropTypes } from 'prop-types'

function App() {

  const pdfRef = useRef();

  //* hash links
  const { hash } = useLocation();

  //* Object to store refs for sections
  const sectionsRef = useRef({});

  //* Track active section
  const [activeSection, setActiveSection] = useState('#introduction');

  const sectionIds = ['#introduction', '#about', '#skills', '#projects', '#contact'];
  const sectionsMap = {
    '#introduction': (props) => <Introduction {...props} />,
    '#about': () => <About />,
    '#skills': () => <Skills />,
    '#projects': () => <RecentProjects />,
    '#contact': () => <Footer />,
  };

  //* Initialize refs for each section
  useEffect(() => {
    sectionIds.forEach((id) => {
      if (!sectionsRef.current[id]) {
        sectionsRef.current[id] = React.createRef();
      }
    });
  }, []);

  //* Update active section when a section becomes visible
  const handleSectionVisibility = (id, isVisible) => {
    if (isVisible) setActiveSection(id);
  };

  //* list of navigation
  const lists = sectionIds.map((id) => (
    <li key={id}>
      <NavHashLink
        smooth
        className={
          activeSection === id
            ? 'text-red-500 dark2 btn btn-ghost' // Active style
            : 'dark2 hover:bg-orange-300 btn btn-ghost' // Inactive style
        }
        to={id}
      >
        {id.replace('#', '').replace(/^\w/, (c) => c.toUpperCase())}
      </NavHashLink>
    </li>
  ));


  // list of navigation
  // const lists = <>
  //   <li>
  //     <NavHashLink
  //       className={hash === "#portfolio" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
  //       to="#portfolio"
  //       smooth
  //     >
  //       Portfolio
  //     </NavHashLink>
  //   </li>
  //   <li>
  //     <NavHashLink
  //       smooth
  //       className={hash === "#about" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
  //       to="#about"
  //     >
  //       About Me
  //     </NavHashLink>
  //   </li>
  //   <li>
  //     <NavHashLink
  //       smooth
  //       className={hash === "#skills" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
  //       to="#skills"
  //     >
  //       Skills
  //     </NavHashLink>
  //   </li>
  //   <li><NavHashLink
  //     smooth
  //     className={hash === "#projects" ? "text-red-500 dark2 btn btn-ghost" : "dark2 hover:bg-orange-300 btn btn-ghost"}
  //     to="#projects">
  //     Projects
  //   </NavHashLink>
  //   </li>
  //   <li>
  //     <NavHashLink smooth className="lg:hidden btn btn-ghost hover:bg-red-200 group" to="#contact" >
  //       <button className="primary-color font-bold font-serif group-hover:text-black">
  //         Hire Me
  //       </button>
  //     </NavHashLink>
  //   </li>
  // </>

  // download pdf
  const downloadPdf = () => {

    //* download pdf
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

  //* scrolling effect
  useEffect(() => {
    const navTitle = document.querySelector('.nav-title-sliding');
    const dropdown = document.querySelector('#scroll-nav');

    //* Ensure navTitle is visible initially
    navTitle.classList.add('visible');

    const handleScroll = () => {
      if (window.scrollY < 1) {
        navTitle.classList.add('visible');
        dropdown.classList.remove('visible');
      } else {
        navTitle.classList.remove('visible');
        if (window.innerWidth >= 1024) {
          dropdown.classList.add('visible');
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        dropdown.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    //* Call handleResize initially to check the screen size on load 
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // on screen section detection to highlight the navigation



  return (
    <div className='font-lato space-y-10 max-w-screen' id="introduction">

      {/* navbar */}
      <div className="navbar justify-center sticky top-0 bg-opacity-5 bg-orange-500 z-10 -mb-10">

        {/* Download */}
        {/* <button
          onClick={downloadPdf}
          className="btn btn-circle bg-[#fd6e0a] bg-opacity-80 absolute right-10 animate-pulse hover:border-4 hover:border-x-[#fd6e0a] hover:border-y-[cornflowerblue] hover:animate-none"
        >
          <FcDownload size={25} />
        </button> */}


        {/* hidden nav list for mobile */}
        <div className="dropdown absolute left-8 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-[primary-color] lg:hidden">
            <HiMenuAlt1 size={25} className="primary-color" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl bg-gray-200 bg-opacity-80">
            {lists}
          </ul>
        </div >


        {/* nav list after scrolling */}
        <div
          id='scroll-nav'
          className="dropdown dropdown-top dropdown-end absolute right-10 top-[90vh]">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:border-4 hover:border-y-[#fd6e0a] hover:border-x-[cornflowerblue] ">
            {/* <HiMenuAlt1 size={25} className="primary-color" /> */}
            <img src={tap} alt={tap} className="w-10 h-10 rounded-full animate-bounce hover:animate-none" />
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


        {/* My name */}
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

      {/* <div ref={pdfRef}>
        <Introduction downloadPdf={downloadPdf} />

        <About />

        <Skills />

        <RecentProjects />

        <Footer />
      </div> */}

      {/* SectionObserver components */}
      {/* Dynamic Sections */}
      <div ref={pdfRef}>
        {sectionIds.map((id) => (
          <div
            key={id}
            id={id.replace('#', '')} // Remove # for ID
            ref={sectionsRef.current[id]} // Assign ref
          // className="min-h-screen flex items-center justify-center"
          >
            <SectionObserver
              id={id}
              onVisible={(isVisible) => handleSectionVisibility(id, isVisible)}
            />
            {sectionsMap[id]({
              downloadPdf: id === '#introduction' ? downloadPdf : undefined,
            })}
          </div>
        ))}
      </div>

    </div>
  )
}

// SectionObserver Component
function SectionObserver({ id, onVisible }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.4 }); // 40% visibility

  useEffect(() => {
    onVisible(isVisible);
  }, [isVisible, onVisible]);

  return <div ref={ref} />;
}

SectionObserver.propTypes = {
  id: PropTypes.string.isRequired,
  onVisible: PropTypes.func.isRequired,
};


export default App
