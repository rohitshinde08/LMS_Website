import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* ================= LIGHT SECTION ================= */}
      <div className="text-gray-800">
        {/* ================= ABOUT US ================= */}
        <section className="px-6 md:px-8 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>

            <p className="text-gray-600 leading-relaxed max-w-4xl mb-12">
              We are a Pune-based software company established in 2024,
              delivering scalable, secure, and high-performance digital
              solutions for businesses of all sizes.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations through innovative technology
                  solutions that drive growth and efficiency.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted global technology partner known for
                  quality, integrity, and innovation.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-xl">
                  <h3 className="font-semibold mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tailored software solutions designed to meet your business
                    needs.
                  </p>
                </div>

                <div className="p-6 border rounded-xl">
                  <h3 className="font-semibold mb-2">
                    Web & Mobile Applications
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Modern, scalable, and user-friendly applications.
                  </p>
                </div>

                <div className="p-6 border rounded-xl">
                  <h3 className="font-semibold mb-2">
                    Cloud & DevOps Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Secure cloud infrastructure and DevOps automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT (LIGHT) ================= */}
        <section className="px-6 md:px-8 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Reach out to us for business inquiries, partnerships, or technical
              support.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-xl shadow text-center">
                <h3 className="text-lg font-semibold mb-2">Our Office</h3>
                <p className="text-gray-600 text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow text-center">
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">contact@yourcompany.com</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow text-center">
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= DARK SECTION ================= */}
      <section className="bg-[#0B1120] text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-blue-500">LM Software Solutions</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
              We build scalable, secure, and future-ready digital solutions for
              modern businesses.
            </p>
          </motion.div>

          {/* STORY */}
          <div className="grid md:grid-cols-2 gap-14 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-400 leading-relaxed">
                LM Software Solutions was founded to help businesses solve
                real-world problems using modern technology and strong
                engineering practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                What We Do
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>✔ Web & Mobile Development</li>
                <li>✔ Cloud & DevOps</li>
                <li>✔ Backend & APIs</li>
                <li>✔ Automation Solutions</li>
              </ul>
            </motion.div>
          </div>

          {/* CONTACT FORM (DARK) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] rounded-3xl p-10 border border-blue-500/10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let’s Build Something Together
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Have a project in mind? Let’s talk.
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3 text-gray-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3 text-gray-200"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="md:col-span-2 bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3 text-gray-200"
              ></textarea>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
