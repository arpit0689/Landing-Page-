import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Carter",
    company: "Tesla Manufacturing",
    review:
      "Neo Robotics transformed our automation pipeline with incredible precision and efficiency.",
  },

  {
    name: "Sophia Williams",
    company: "Intel Systems",
    review:
      "Their AI-powered robotics solutions significantly improved our manufacturing productivity.",
  },

  {
    name: "Daniel Kim",
    company: "Siemens Automation",
    review:
      "A highly professional robotics company delivering futuristic industrial solutions.",
  },
]

const Testimonials = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

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
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by Global Industries
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leading manufacturers worldwide rely on our
            intelligent automation and robotics solutions.
          </p>

        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

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
                p-8
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

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-cyan-400 fill-cyan-400"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mb-8 relative">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="relative">

                <h3 className="text-xl font-bold mb-1">
                  {item.name}
                </h3>

                <p className="text-cyan-400">
                  {item.company}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials