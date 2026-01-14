import { Navbar } from "./layout/Navbar"
import { Hero } from "./pages/Hero"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
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
