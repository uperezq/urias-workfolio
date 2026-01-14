import { Navbar } from "./layout/Navbar"
import { Hero } from "./pages/Hero"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"
import { items } from "./data/navbarItems"
import logo from "./assets/react.svg"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out" />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default App
