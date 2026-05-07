import { motion } from "framer-motion"
import {
  Bot,
  Cpu,
  Factory,
  Wrench
} from "lucide-react"

const robots = [
  {
    title: "Cobot",
    description:
      "Collaborative robots designed for safe human interaction and smart automation.",
    icon: Bot,
  },

  {
    title: "SCARA Robot",
    description:
      "High-speed robotic systems ideal for assembly and precision manufacturing.",
    icon: Cpu,
  },

  {
    title: "Delta Robot",
    description:
      "Ultra-fast robotic arms engineered for packaging and sorting applications.",
    icon: Factory,
  },

  {
    title: "Welding Robot",
    description:
      "AI-powered robotic welding systems delivering industrial-grade precision.",
    icon: Wrench,
  },
]

const Robots = () => {
  return (
   <section
  id="robots"
  className="relative min-h-screen flex items-center overflow-hidden"
>

      {/* Section Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Robotics Solutions
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced Industrial Robots
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Intelligent robotic systems engineered for
            modern manufacturing and industrial automation.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {robots.map((robot, index) => {

            const Icon = robot.icon

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="
                  relative
                  p-8
                  rounded-3xl
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400/40
                  transition-all
                  duration-500
                  overflow-hidden
                  group
                "
              >

                {/* Card Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/10 blur-3xl"></div>

                {/* Icon */}
                <div className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  border
                  border-cyan-400/20
                ">

                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {robot.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {robot.description}
                </p>

                {/* Button */}
                <button className="
                  text-cyan-400
                  hover:text-white
                  transition
                  duration-300
                ">
                  Learn More →
                </button>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Robots