import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  GraduationCap,
  MapPin,
  Search,
  SlidersHorizontal,
  Upload,
  X,
} from "lucide-react"

const jobs = [
  {
    title: "Robotics Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    experience: "2-5 years",
    description:
      "Design, integrate, and validate robotic systems for precision manufacturing and automation cells.",
    skills: ["Robot kinematics", "Motion planning", "PLC basics", "Industrial safety"],
    qualifications: "B.E./B.Tech in Robotics, Mechatronics, Mechanical, or related engineering discipline.",
    requirements: "Hands-on experience with industrial robots, sensors, actuators, and factory automation workflows.",
    responsibilities: [
      "Develop robotic cell concepts and integration layouts.",
      "Test robot programs for cycle time, accuracy, and safety.",
      "Coordinate with mechanical, electrical, and software teams.",
    ],
    tools: ["ROS", "RoboDK", "ABB/FANUC/KUKA", "SolidWorks"],
  },
  {
    title: "Electronics Engineer",
    department: "Hardware",
    location: "Bengaluru, India",
    experience: "1-4 years",
    description:
      "Build reliable control boards, wiring systems, and sensor interfaces for industrial robotics products.",
    skills: ["Circuit design", "PCB debugging", "Sensor interfacing", "Power electronics"],
    qualifications: "B.E./B.Tech in Electronics, Electrical, Instrumentation, or equivalent.",
    requirements: "Experience troubleshooting embedded hardware and industrial electrical systems.",
    responsibilities: [
      "Prototype and validate control electronics.",
      "Debug field issues using test equipment.",
      "Prepare wiring, harness, and test documentation.",
    ],
    tools: ["Altium", "KiCad", "Oscilloscope", "CAN/I2C/SPI"],
  },
  {
    title: "Mechanical Engineer",
    department: "Engineering",
    location: "Pune, India",
    experience: "2-6 years",
    description:
      "Create robust mechanical assemblies, fixtures, and end effectors for automated production lines.",
    skills: ["Machine design", "DFM", "Tolerance analysis", "Pneumatics"],
    qualifications: "B.E./B.Tech in Mechanical, Production, or Mechatronics Engineering.",
    requirements: "Industrial machine design experience with a strong grasp of manufacturing processes.",
    responsibilities: [
      "Design fixtures, frames, guards, and robotic end effectors.",
      "Review fabrication drawings and BOMs.",
      "Support installation and commissioning teams.",
    ],
    tools: ["SolidWorks", "AutoCAD", "ANSYS", "GD&T"],
  },
  {
    title: "Embedded Systems Engineer",
    department: "Software",
    location: "Bengaluru, India",
    experience: "2-5 years",
    description:
      "Develop firmware for controllers, sensor modules, and real-time communication in robotic equipment.",
    skills: ["C/C++", "RTOS", "Motor control", "Communication protocols"],
    qualifications: "B.E./B.Tech in ECE, EEE, Computer Engineering, or related field.",
    requirements: "Firmware development experience on microcontrollers used in industrial products.",
    responsibilities: [
      "Write and test embedded firmware for robot subsystems.",
      "Integrate sensors, drives, and communication modules.",
      "Improve reliability through diagnostics and logging.",
    ],
    tools: ["STM32", "FreeRTOS", "CANopen", "Git"],
  },
  {
    title: "Automation Engineer",
    department: "Automation",
    location: "Chennai, India",
    experience: "3-7 years",
    description:
      "Program PLC, HMI, and SCADA systems for turnkey automation and smart factory deployments.",
    skills: ["PLC programming", "HMI design", "Industrial networking", "Commissioning"],
    qualifications: "Diploma/B.E. in Electrical, Electronics, Instrumentation, or Automation.",
    requirements: "Commissioning experience with PLC-based industrial automation systems.",
    responsibilities: [
      "Develop PLC logic and HMI screens.",
      "Commission automation panels and robotic workcells.",
      "Prepare FAT/SAT documentation and customer handover notes.",
    ],
    tools: ["Siemens TIA Portal", "Allen-Bradley", "SCADA", "Profinet"],
  },
  {
    title: "Software Developer",
    department: "Software",
    location: "Hybrid",
    experience: "1-4 years",
    description:
      "Build dashboards, control interfaces, and data tools for robotic automation platforms.",
    skills: ["React", "APIs", "Databases", "Industrial IoT"],
    qualifications: "B.E./B.Tech/MCA in Computer Science, IT, or equivalent practical experience.",
    requirements: "Experience building production web applications or automation monitoring tools.",
    responsibilities: [
      "Develop operator dashboards and service portals.",
      "Integrate APIs with machine data and analytics systems.",
      "Collaborate with field engineers to improve usability.",
    ],
    tools: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Service Engineer",
    department: "Operations",
    location: "Pan India",
    experience: "1-5 years",
    description:
      "Install, service, and troubleshoot robotic automation systems at customer manufacturing sites.",
    skills: ["Troubleshooting", "Electrical panels", "Customer support", "Preventive maintenance"],
    qualifications: "Diploma/B.E. in Electrical, Electronics, Mechanical, or Mechatronics.",
    requirements: "Comfortable with travel and hands-on service work in industrial environments.",
    responsibilities: [
      "Perform installation, maintenance, and breakdown support.",
      "Train customer teams on safe equipment operation.",
      "Maintain service reports and spare parts records.",
    ],
    tools: ["Multimeter", "PLC diagnostics", "Servo drives", "Service CRM"],
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Bengaluru, India",
    experience: "1-4 years",
    description:
      "Identify automation opportunities, manage prospects, and support consultative sales for robotics solutions.",
    skills: ["B2B sales", "Lead qualification", "CRM", "Technical communication"],
    qualifications: "Graduate degree in Engineering, Business, or a related field.",
    requirements: "Experience selling industrial products, automation services, or technical solutions is preferred.",
    responsibilities: [
      "Build pipeline across manufacturing and logistics accounts.",
      "Coordinate demos, proposals, and technical discussions.",
      "Track customer requirements and commercial follow-ups.",
    ],
    tools: ["HubSpot", "LinkedIn Sales Navigator", "Excel", "PowerPoint"],
  },
]

const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))]

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)

  const filteredJobs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return jobs.filter((job) => {
      const matchesDepartment =
        activeDepartment === "All" || job.department === activeDepartment
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)

      return matchesDepartment && matchesSearch
    })
  }, [activeDepartment, searchTerm])

  return (
    <section id="careers" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-16 left-0 w-[420px] h-[420px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-emerald-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Careers
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Build the Future of Industrial Robotics
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Join Neo Robotics to design intelligent machines, automation
            platforms, and customer-ready engineering systems that transform
            modern manufacturing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 grid lg:grid-cols-[1fr_auto] gap-5 items-center"
        >
          <label className="relative block">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
            />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by role, department, or location"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-14 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeDepartment === department
                    ? "border-cyan-400 bg-cyan-400 text-black shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300"
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredJobs.map((job, index) => (
            <motion.article
              key={job.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <SlidersHorizontal size={16} />
                    {job.department}
                  </span>
                  <BriefcaseBusiness size={24} className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 min-h-[84px]">
                  {job.description}
                </p>

                <div className="space-y-3 text-gray-300 mb-7">
                  <p className="flex items-center gap-3">
                    <MapPin size={18} className="text-cyan-400" />
                    {job.location}
                  </p>
                  <p className="flex items-center gap-3">
                    <GraduationCap size={18} className="text-cyan-400" />
                    {job.experience}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black shadow-[0_0_28px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
                >
                  Apply Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-gray-400">
            No openings match your search. Try another role or department.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#071021] p-6 shadow-[0_0_60px_rgba(34,211,238,0.18)] md:p-8"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                aria-label="Close job details"
              >
                <X size={22} />
              </button>

              <div className="pr-12">
                <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
                  Apply for
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span className="rounded-full bg-white/5 px-4 py-2">
                    {selectedJob.department}
                  </span>
                  <span className="rounded-full bg-white/5 px-4 py-2">
                    {selectedJob.location}
                  </span>
                  <span className="rounded-full bg-white/5 px-4 py-2">
                    {selectedJob.experience}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-2 gap-6">
                <DetailBlock
                  title="Required Skills"
                  items={selectedJob.skills}
                  icon={CheckCircle2}
                />
                <DetailBlock
                  title="Technologies / Tools"
                  items={selectedJob.tools}
                  icon={Cpu}
                />
                <DetailBlock
                  title="Qualifications"
                  items={[selectedJob.qualifications]}
                  icon={GraduationCap}
                />
                <DetailBlock
                  title="Experience Requirements"
                  items={[selectedJob.requirements]}
                  icon={BriefcaseBusiness}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-bold mb-4">Responsibilities</h4>
                <ul className="space-y-3 text-gray-400">
                  {selectedJob.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                />
                <label className="md:col-span-2 flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-cyan-400/40 bg-cyan-400/10 px-4 py-4 text-cyan-300 transition hover:bg-cyan-400/15">
                  <Upload size={20} />
                  Upload resume
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
                <button
                  type="button"
                  className="md:col-span-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const DetailBlock = ({ title, items, icon: Icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="mb-4 flex items-center gap-3">
      <Icon size={22} className="text-cyan-400" />
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
    <ul className="space-y-3 text-gray-400">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default Careers
