import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const Footer = () => {
  return (
    <footer 
    id ="contact"
    className="relative border-t border-cyan-500/10 bg-black/30 backdrop-blur-xl overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Neo Robotics
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Intelligent industrial robotics and AI-powered
              automation solutions engineered for the future of manufacturing.
            </p>

            <p className="text-cyan-400 font-semibold">
              Future of Industrial Automation
            </p>

          </div>

          

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Industrial Automation</li>
              <li>AI Robotics</li>
              <li>Smart Manufacturing</li>
              <li>Robot Integration</li>
              <li>Predictive Maintenance</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-cyan-400 mt-1" />

                <p>
                  Neo Robotics Pvt. Ltd. <br />
                  Bengaluru, Karnataka, India
                </p>

              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-cyan-400" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-400" />
                <p>contact@neorobotics.in</p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 Neo Robotics. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Made with ❤️ by{" "}
            <span className="text-cyan-400 font-semibold">
              Arpit Pandey
            </span>
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer