import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
export default function App() {
  return (
    <div className='p-2'>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
    </div>
  )
}