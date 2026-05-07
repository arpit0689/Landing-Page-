import { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Neo Robotics
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="solutions"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Solutions
            </Link>
          </li>

          <li>
            <Link
              to="robots"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Robots
            </Link>
          </li>

          <li>
            <Link
              to="industries"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Industries
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* CTA Button */}
        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/10 px-6 py-8">

          <ul className="flex flex-col gap-6 text-gray-300">

            {["home", "solutions", "robots", "industries", "contact"].map((item) => (

              <li key={item}>

                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-cyan-400 transition capitalize text-lg"
                >
                  {item}
                </Link>

              </li>
            ))}

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar