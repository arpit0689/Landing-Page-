import Navbar from "./components/layout/Navbar"
import Hero from "./components/hero/Hero"
import Robots from "./components/robots/Robots"
import Features from "./components/features/Features"
import Industries from "./components/industries/Industries"
import Stats from "./components/stats/Stats"
import Process from "./components/process/Process"
import Testimonials from "./components/testimonials/Testimonials"
import CTA from "./components/cta/CTA"
import Footer from "./components/layout/Footer"

function App() {
  return (

    <div className="relative bg-[#050816] overflow-hidden min-h-screen">

      {/* Top Left Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Robots />
        <Features />
        <Industries />
        <Stats />
        <Process />
        <Testimonials />
        <CTA />
       <Footer />

      </div>

    </div>
  )
}

export default App