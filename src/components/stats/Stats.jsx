import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Installations",
  },

  {
    number: 98,
    suffix: "%",
    title: "Efficiency",
  },

  {
    number: 50,
    suffix: "+",
    title: "Countries Served",
  },

  {
    number: 24,
    suffix: "/7",
    title: "Support",
  },
]

const Stats = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

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
            Our Achievements
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Driving Industrial Innovation
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering global industries with intelligent robotics
            and next-generation automation systems.
          </p>

        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

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
              className="
                relative
                overflow-hidden
                rounded-3xl
                p-10
                text-center
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

              {/* Glow */}
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

              {/* Number */}
              <h3 className="
  relative
  text-5xl
  md:text-6xl
  font-bold
  text-cyan-400
  mb-4
  drop-shadow-[0_0_20px_rgba(0,217,255,0.8)]
">

  {stat.number}
  {stat.suffix}

</h3>

              {/* Title */}
              <p className="relative text-gray-300 text-lg">
                {stat.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Stats