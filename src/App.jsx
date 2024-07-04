
import About from './components/About'
import Footer from './components/Footer'
import Heading from './components/Heading'
import RecentProjects from './components/RecentProjects'
import Skills from './components/Skills'

import './App.css'
import { HiMenuAlt1 } from "react-icons/hi";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from 'react'

function App() {

  const pdfRef = useRef();

  const lists = <>
    <li><a className="dark2 hover:bg-orange-300" href="#header">Portfolio</a></li>
    <li><a className="dark2 hover:bg-orange-300" href="#about">About Me</a></li>
    <li><a className="dark2 hover:bg-orange-300" href="#skills">Skills</a></li>
    <li><a className="dark2 hover:bg-orange-300" href="#projects">Projects</a></li>
    <li><a href="#contact" className="lg:hidden  hover:bg-base-100">
      <button className="primary-color font-bold font-serif">Hire Me</button>
    </a></li>
  </>

  const downloadPdf = () => {
    //
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
      const imgY = 30;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("portfolio.pdf")
    });
  };

  return (
    <div className='font-lato space-y-10 w-screen' ref={pdfRef}  id="header">

      <div className="navbar  justify-center sticky top-0  bg-opacity-5 bg-orange-500 z-10 -mb-10">
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


        {/* name */}
        <nav className="nav-title dark1 flex justify-around w-full" >
          <h3>Ma<span className="primary-color">r</span>gon</h3>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center">
              {lists}
              <li ><a href="#contact">
                <button className="btn-customized">Hire Me</button>
              </a></li>
            </ul>
          </div>
        </nav >
      </div>

      <Heading downloadPdf={downloadPdf} />

      <About />

      <Skills />

      <RecentProjects />

      <Footer />

    </div>
  )
}

export default App
