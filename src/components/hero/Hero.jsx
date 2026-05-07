import { motion } from "framer-motion"
import { Link } from "react-scroll"
import RobotModel from "./RobotModel"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-0 flex items-center overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Next Generation Robotics
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Redefining <br />
            Industrial <span className="text-cyan-400">Automation</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
            AI-powered robotic systems engineered for precision,
            speed, and intelligent manufacturing solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              to="robots"
              smooth={true}
              duration={500}
              className="
                px-8
                py-4
                rounded-xl
                bg-cyan-400
                text-black
                font-semibold
                hover:scale-105
                transition
                duration-300
                shadow-[0_0_30px_#00D9FF]
                cursor-pointer
                text-center
              "
            >
              Explore Robots
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="
                px-8
                py-4
                rounded-xl
                border
                border-cyan-400
                text-cyan-400
                hover:bg-cyan-400
                hover:text-black
                transition
                duration-300
                cursor-pointer
                text-center
              "
            >
              Book Demo
            </Link>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >

          {/* Premium Glow Behind Robot */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 blur-[90px] rounded-full"></div>

          {/* 3D Robot Container */}
          <div className="
            relative
            w-full
            max-w-[700px]
            h-[400px]
            sm:h-[500px]
            md:h-[700px]
            flex
            items-center
            justify-center
          ">

            <RobotModel />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero