/*
 * Design: Bold Contrast — About section on dark background
 * Split layout with team photo and text content
 */
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

const ABOUT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/wjwiXBJIOEBzcfyC.jpeg";
const TEAM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/yFfMHmJsFmtUHouB.jpeg";

const values = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with full insurance coverage and all work guaranteed.",
  },
  {
    icon: Clock,
    title: "Reliable & On Time",
    description: "We show up when we say we will and complete projects on schedule.",
  },
  {
    icon: Award,
    title: "Superior Workmanship",
    description: "Premium materials and meticulous preparation for a flawless, lasting finish.",
  },
  {
    icon: Users,
    title: "Clean & Professional",
    description: "We treat your property with respect — clean site, zero drama, every time.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={TEAM_IMG}
                alt="Jetblack Painting team at work"
                className="w-full rounded-lg shadow-2xl"
              />
              {/* Floating accent image */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-40 sm:w-52 rounded-lg overflow-hidden shadow-xl border-4 border-[#0D0D0D]">
                <img
                  src={ABOUT_IMG}
                  alt="Jetblack Painting branded workwear"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#00AACC] text-white rounded-lg px-5 py-3 shadow-lg">
                <div className="text-2xl font-bold" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>13+</div>
                <div className="text-xs font-medium uppercase tracking-wider">Years Exp.</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
              About Us
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Melbourne Repaints{" "}
              <span className="text-[#00AACC]">Done Properly</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              At Jetblack Painting, we specialise in high-quality repainting services for
              both residential and commercial properties. Whether it's refreshing a family
              home, revitalising an investment property, or giving a commercial space a
              modern update, we deliver flawless results with attention to detail.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              We work closely with real estate agencies, homeowners, and body corporates,
              ensuring properties are perfectly presented for sale or ongoing maintenance.
              With Jetblack Painting, you get expert craftsmanship, premium materials, and
              a commitment to excellence — every time.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded bg-[#00AACC]/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-[#00AACC]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
