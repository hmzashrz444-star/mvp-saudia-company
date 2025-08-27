import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0c1424] text-[#e6eefb] font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-[#0b1220]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
          <a href="#top" className="flex items-center gap-2 font-bold">
            <span className="w-7 h-7 rounded-md bg-gradient-to-r from-[#6aa2ff] to-[#4dd2ff] shadow"></span>
            Career Pathway – One City
          </a>
          <div className="hidden md:flex gap-6 text-[#8fa3bf] font-medium">
            <a href="#mission">Mission</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#questions">Questions</a>
          </div>
          <div className="hidden md:flex gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#6aa2ff] to-[#4dd2ff] text-[#0b1220] hover:brightness-105 transition"
            >
              MVP
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full text-sm text-[#8fa3bf]">
              <span className="w-2 h-2 rounded-full bg-[#4dd2ff] shadow-[0_0_0_6px_rgba(77,210,255,0.15)]"></span>
              Local-first career platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
              From confusion to career — built for our city, one student at a
              time.
            </h1>
            <p className="text-[#8fa3bf] mt-4">
              We help students and graduates in small cities move from education
              to employment with clear guidance, practical training, and real
              job connections nearby.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#mission"
                className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6aa2ff] to-[#4dd2ff] text-[#0b1220] hover:scale-105 transition"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">What we do</h3>
            <p className="text-[#8fa3bf] mb-4">
              Personal counseling, skill-building, job matching. A simple system
              that actually gets people hired.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Guidance", desc: "1:1 sessions to map real career paths." },
                { title: "Preparation", desc: "CV, interviews, and core skills." },
                { title: "Training", desc: "Local partners for practical courses." },
                { title: "Placement", desc: "Apply to jobs within our city radius." },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0f192a] border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-[#8fa3bf] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MISSION / VISION */}
      <section id="mission" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">Mission & Vision</h2>
            <a
              href="#services"
              className="px-3 py-1 text-sm rounded-full border border-white/10 text-[#8fa3bf] hover:bg-white/5 transition"
            >
              Scroll to services →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-[#8fa3bf]">
                Our mission is to guide students and graduates in small cities
                where career opportunities and awareness are limited. We give clarity, skills, and direction.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-[#8fa3bf]">
                Build a trusted career hub in our city that bridges education and employment. Focused, community-first support transforms futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Services Offered</h2>
          <p className="text-[#8fa3bf] mb-10">What we provide to students & graduates</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Career Counseling & Switching",
              "CV & Profile Building",
              "Interview Preparation",
              "Professional Skills Training",
              "Field & Technical Training",
              "Job Matching",
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-2xl p-6 shadow hover:scale-105">
                <h3 className="text-xl font-semibold flex items-center gap-2">{service}</h3>
                <p className="text-[#8fa3bf] mt-2 text-sm">
                  Description for {service}. Tailored support to help students succeed.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section id="process" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-[#8fa3bf] mb-10">Step-by-step guidance from first interaction to placement</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Data Collection",
              "Consultation & Recommendation",
              "Preparation",
              "Application & Placement",
              "Follow-Up",
            ].map((title, idx) => (
              <div key={idx} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-center gap-4 hover:scale-105 transition">
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow">
                  {idx + 1}
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-center flex items-center justify-center rounded-md shadow w-full py-20 mb-4">
                  Image Placeholder
                </div>
                <h3 className="text-xl font-semibold text-center">{title}</h3>
                <p className="text-[#8fa3bf] text-center text-sm">Step description for {title}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS / FAQ */}
      <FAQSection />

      {/* CONTACT / MVP */}
      <section id="contact" className="py-16 bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-[#8fa3bf] mb-6">Fill the form below to start your career journey or request the MVP.</p>

          <form className="max-w-xl mx-auto grid gap-4">
            <input type="text" placeholder="Full Name" className="p-3 rounded-xl bg-[#0b1220] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email" className="p-3 rounded-xl bg-[#0b1220] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows="4" className="p-3 rounded-xl bg-[#0b1220] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-[#6aa2ff] to-[#4dd2ff] text-[#0b1220] font-semibold rounded-xl hover:scale-105 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 mt-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[#8fa3bf] text-sm">
          <p>© 2025 Career Pathway – One City. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* FAQ Accordion Component */
function FAQSection() {
  const faqs = [
    {
      question: "Who is eligible for your services?",
      answer:
        "We primarily serve students and recent graduates from local educational institutions within our city radius.",
    },
    {
      question: "How do I sign up for a consultation?",
      answer:
        "You can sign up through our website or contact us directly via email or phone to schedule your first session.",
    },
    {
      question: "Are there any fees for your services?",
      answer:
        "Our basic counseling services are free of charge. Some specialized training programs may have associated costs, which will be communicated upfront.",
    },
    {
      question: "What kind of job placements do you offer?",
      answer:
        "We focus on entry-level positions in various industries such as administration, customer service, technical trades, and more, all within our local area.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "The duration varies based on individual needs but typically ranges from a few weeks to a couple of months from initial consultation to job placement.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section id="questions" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-[#8fa3bf] mb-10">Click a question to view the answer</p>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl shadow">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-[#e6eefb] hover:bg-white/10 transition"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.question}
                <span className={`transform transition-transform ${openIndex === idx ? "rotate-45" : "rotate-0"}`}>+</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 text-[#8fa3bf] border-t border-white/10 animate-slideDown">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}