import { motion } from "framer-motion"

import {
  MessagesSquare,
  PencilRuler,
  Cpu,
  Rocket,
  ShieldCheck,
} from "lucide-react"

const processSteps = [
  {
    title: "Consultation",
    description:
      "Understanding industrial requirements and automation goals.",
    icon: MessagesSquare,
  },

  {
    title: "Design & Simulation",
    description:
      "Creating intelligent robotic workflows and system simulations.",
    icon: PencilRuler,
  },

  {
    title: "Integration",
    description:
      "Seamless robotic integration into existing manufacturing systems.",
    icon: Cpu,
  },

  {
    title: "Deployment",
    description:
      "Launching advanced automation systems with precision engineering.",
    icon: Rocket,
  },

  {
    title: "Support & Optimization",
    description:
      "Continuous monitoring, maintenance, and AI optimization.",
    icon: ShieldCheck,
  },
]

const Process = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Workflow Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Concept to Automation
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our intelligent workflow ensures seamless robotic
            integration and optimized industrial performance.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Horizontal Line */}
          <div className="
            hidden
            lg:block
            absolute
            top-16
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-cyan-500/20
            via-cyan-400
            to-purple-500/20
          "></div>

          {/* Process Grid */}
          <div className="grid lg:grid-cols-5 gap-10">

            {processSteps.map((step, index) => {

              const Icon = step.icon

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="relative text-center"
                >

                  {/* Icon Circle */}
                  <div className="
                    relative
                    z-10
                    mx-auto
                    w-32
                    h-32
                    rounded-full
                    backdrop-blur-xl
                    bg-white/5
                    border
                    border-cyan-400/20
                    flex
                    items-center
                    justify-center
                    mb-8
                    shadow-[0_0_40px_rgba(0,217,255,0.15)]
                    group
                    hover:border-cyan-400/50
                    transition-all
                    duration-500
                  ">

                    {/* Glow */}
                    <div className="
                      absolute
                      inset-0
                      rounded-full
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      bg-cyan-500/10
                      blur-3xl
                    "></div>

                    <Icon
                      size={42}
                      className="text-cyan-400 relative z-10"
                    />

                  </div>

                  {/* Step Number */}
                  <p className="text-cyan-400 font-semibold mb-3">
                    Step {index + 1}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Process