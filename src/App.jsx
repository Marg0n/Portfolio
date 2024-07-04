
import About from './components/About'
import Footer from './components/Footer'
import Heading from './components/Heading'
import RecentProjects from './components/RecentProjects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='font-lato space-y-10'>

      <Heading/>

      <About/>

      <Skills/>

      <RecentProjects/>

      <Footer />

    </div>
  )
}

export default App
