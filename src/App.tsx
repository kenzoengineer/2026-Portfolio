import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import {useEffect, useState} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const App =() => {
  const [darkMode, setDarkMode] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() =>{
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDarkMode =()=> {
    const newMode =!darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className={darkMode
    ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
    : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
  }>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isAtTop={isAtTop}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
    </div>
  )
}
export default App