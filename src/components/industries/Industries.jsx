import { motion } from "framer-motion"

const industries = [
  {
    title: "Automotive",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Pharmaceutical",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Packaging",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Food Processing",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1200&auto=format&fit=crop",
  },
]

const Industries = () => {
  return (
    <section 
    id="industries"
    className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

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
            Industries We Serve
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Automation Across Industries
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Intelligent robotic systems transforming
            manufacturing and industrial operations worldwide.
          </p>

        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                h-[350px]
                group
                cursor-pointer
              "
            >

              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-black/60
                group-hover:bg-black/40
                transition
                duration-500
              "></div>

              {/* Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                bg-cyan-500/10
                blur-3xl
                transition
                duration-500
              "></div>

              {/* Content */}
              <div className="
                relative
                z-10
                h-full
                flex
                items-end
                p-8
              ">

                <div>

                  <p className="text-cyan-400 mb-2 uppercase tracking-[3px]">
                    Industrial Sector
                  </p>

                  <h3 className="text-3xl font-bold">
                    {industry.title}
                  </h3>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Industries