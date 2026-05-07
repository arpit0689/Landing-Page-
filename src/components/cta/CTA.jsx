import { motion } from "framer-motion"

const CTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-10
          py-20
          text-center
        "
      >

        <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
          Future of Automation
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Transform Your Factory <br />
          with Intelligent Robotics
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          Empower your manufacturing systems with AI-powered
          robotics and next-generation industrial automation.
        </p>

        <button className="
          px-10
          py-5
          rounded-2xl
          bg-cyan-400
          text-black
          font-bold
          text-lg
          hover:scale-105
          transition-all
          duration-300
          shadow-[0_0_40px_#00D9FF]
        ">
          Schedule Consultation
        </button>

      </motion.div>

    </section>
  )
}

export default CTA