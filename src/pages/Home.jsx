import Hero from '../components/Hero'
import About from '../components/About'
import Porjects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import TimelineSection from '../components/TimelineSection'

const Home = () => {
  return (
    <div>
       <Hero />
       <About />
       <TimelineSection/>
       <Porjects/>
       <Skills/>
       <Contact/>
     </div>
  )
}
export default Home;