import { motion } from "framer-motion"

import {
  BrainCircuit,
  Cpu,
  Eye,
  Factory,
  ShieldCheck,
  Gauge,
} from "lucide-react"

const features = [
  {
    title: "AI Powered Automation",
    description:
      "Intelligent robotics systems optimized with machine learning and AI algorithms.",
    icon: BrainCircuit,
  },

  {
    title: "Precision Engineering",
    description:
      "Industrial-grade robotic accuracy designed for modern manufacturing.",
    icon: Cpu,
  },

  {
    title: "Smart Vision Systems",
    description:
      "Advanced computer vision for real-time inspection and quality control.",
    icon: Eye,
  },

  {
    title: "Industry 4.0 Integration",
    description:
      "Seamless connectivity with smart factories and IoT ecosystems.",
    icon: Factory,
  },

  {
    title: "Predictive Maintenance",
    description:
      "AI monitoring systems to reduce downtime and optimize performance.",
    icon: Gauge,
  },

  {
    title: "24/7 Reliability",
    description:
      "Robotic systems engineered for continuous industrial operation.",
    icon: ShieldCheck,
  },
]

const Features = () => {
  return (
    <section
    id ="solutions"
     className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full"></div>

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
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Robotics Features
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Innovative automation technologies built for
            next-generation industrial manufacturing.
          </p>

        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  relative
                  overflow-hidden
                  p-8
                  rounded-3xl
                  backdrop-blur-xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  transition-all
                  duration-500
                  group
                "
              >

                {/* Glow Effect */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-cyan-500/10
                  blur-3xl
                "></div>

                {/* Icon Box */}
                <div className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  mb-6
                ">

                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Features