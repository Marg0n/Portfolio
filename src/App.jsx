import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <body>
    <header id="header">
      <nav class="nav-title dark1">
        <h3>Ma<span class="primary-color">r</span>gon</h3>
        <ul>
          <li><a class="dark2" href="#">Portfolio</a></li>
          <li><a class="dark2" href="#">Blog</a></li>
          <li><button class="btn-primary">Hire Me</button></li>
        </ul>
      </nav>

      <div class="banner">
        <div class="banner-content">
          <h3 class="banner-greeting dark2">Hi, I am</h3>
          <h1 class="banner-title dark1">
            Sokhorio Margon D<span class="primary-color">'</span> Costa
          </h1>
          <p class="dark3">
            No matter the difficulties, anyone can overcome it if the person
            tried his best. Believe in oneself and have hope; because, 'Hope is
            a good thing, maybe the best of things, and no good thing ever dies.
            Hard working together with Intelligence never fails'.
          </p>

          <button class="btn-primary">
            <i class="fa-solid fa-download"></i> Download CV
          </button>
          <button class="btn"><i class="fa-solid fa-phone"></i> Contact</button>
        </div>

        <img id="profile-pic" src="images/SMD.png" alt="" />
      </div>
    </header>

    <main></main>

    <footer></footer>
  </body>
    </>
  )
}

export default App
