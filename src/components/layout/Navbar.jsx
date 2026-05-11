import { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "home", label: "Home" },
  { id: "solutions", label: "Solutions" },
  { id: "robots", label: "Robots" },
  { id: "industries", label: "Industries" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact" },
]

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

          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

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

            {navItems.map((item) => (

              <li key={item.id}>

                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-cyan-400 transition capitalize text-lg"
                >
                  {item.label}
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
