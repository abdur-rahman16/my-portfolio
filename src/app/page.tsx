import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Hero from '@/components/hero'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 h-full">
      <div className='top-0 sticky'><Navbar/></div>
      <div><Hero/></div>
      <div><Skills/></div>
      <div><Projects/></div>
      <div><Contact/> </div>
      <div><Footer/></div>
    </div>
  )
}

export default Home