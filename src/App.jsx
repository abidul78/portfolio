import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Progress
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3D Profile Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useTransform(smoothX, [-300, 300], [-8, 8]);
  const rotateX = useTransform(smoothY, [-300, 300], [8, -8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const projects = [
    {
      title: "Job Portal",
      status: "Completed",
      description:
        "A Django-based job portal where employers can post jobs and manage applicants, while job seekers can build profiles, upload resumes, and apply for jobs.",
      tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
      image: "/projects/jobportal.png",
      github: "https://github.com/abidul78/job-portal",
      live: "https://jobportal-vpw3.onrender.com/",
    },

    {
      title: "Chemryx",
      status: "Completed",
      description:
        "An online examination platform with exam scheduling, MCQ tests, negative marking, timers, progress saving, results, and rankings.",
      tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      image: "/projects/chemryx.png",
      github: "#",
      live: "#",
    },

    {
      title: "DealVault",
      status: "In Progress",
      description:
        "An escrow transaction platform with role-based users, deal creation, deposits, withdrawals, dispute management, analytics, and JWT authentication.",
      tech: ["Python", "Django", "DRF", "JWT", "REST API"],
      image: null,
      github: "https://github.com/abidul78/DealVault-",
      live: "#",
    },

    {
      title: "Deepfake Video Detection",
      status: "In Progress",
      description:
        "A deep learning project for detecting manipulated videos using frame extraction, face detection, CNN classification, and an inference pipeline.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
      image: null,
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    "Python",
    "Django",
    "FastAPI",
    "Django REST Framework",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "JavaScript",
    "React",
    "REST API",
    "Git",
    "GitHub",
    "Postman",
  ];

  return (
    <div className="min-h-screen bg-[#eef0ff] text-[#11162b] overflow-hidden">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[4px] bg-indigo-500 origin-left z-[100]"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#eef0ff]/80 backdrop-blur-xl border-b border-indigo-950/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

          <a href="#" className="text-2xl font-black tracking-tight">
            ABIDUL
            <span className="text-indigo-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-sm font-semibold">
            <a href="#about" className="hover:text-indigo-500 transition">
              ABOUT
            </a>

            <a href="#skills" className="hover:text-indigo-500 transition">
              SKILLS
            </a>

            <a href="#projects" className="hover:text-indigo-500 transition">
              WORK
            </a>

            <a href="#contact" className="hover:text-indigo-500 transition">
              CONTACT
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={23} /> : <FaBars size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#eef0ff] border-t border-indigo-950/10">
            <div className="px-6 py-6 flex flex-col gap-5 font-semibold">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                SKILLS
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                WORK
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">

        <div className="absolute top-24 -left-32 w-[450px] h-[450px] bg-blue-300/40 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-violet-300/40 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">

            {/* Hero Text */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="text-xs sm:text-sm font-bold tracking-[0.22em] sm:tracking-[0.28em] text-indigo-500 mb-7">
                BACKEND DEVELOPER • SOFTWARE ENGINEERING
              </div>

              <h1 className="text-[15vw] sm:text-[12vw] lg:text-[7vw] leading-[0.82] font-black tracking-[-0.06em] uppercase">

                <TypeAnimation
                  sequence={["ABIDUL", 500]}
                  speed={40}
                  repeat={0}
                  cursor={false}
                />

              </h1>

              <h1 className="text-[15vw] sm:text-[12vw] lg:text-[7vw] leading-[0.82] font-black tracking-[-0.06em] text-indigo-500 uppercase">
                ISLAM
              </h1>

              <p className="mt-8 sm:mt-10 text-base sm:text-lg max-w-xl text-slate-600 leading-8">
                I build backend systems, REST APIs, and practical web
                applications using Python, Django, FastAPI, and modern
                databases.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">

                <a
                  href="#projects"
                  className="inline-flex px-6 sm:px-7 py-3.5 sm:py-4 bg-[#11162b] text-white rounded-full font-semibold hover:bg-indigo-600 hover:-translate-y-1 transition duration-300"
                >
                  VIEW MY WORK ↓
                </a>

                <div className="flex gap-5 text-xl">

                  <a
                    href="https://github.com/abidul78"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hover:text-indigo-500 hover:-translate-y-1 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abidul-islam-0001a2295/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-indigo-500 hover:-translate-y-1 transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="mailto:abidulofficial@gmail.com"
                    aria-label="Email"
                    className="hover:text-indigo-500 hover:-translate-y-1 transition"
                  >
                    <MdEmail size={24} />
                  </a>

                </div>

              </div>
            </motion.div>

            {/* Desktop Floating Profile Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative hidden lg:flex justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* Floating Labels */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-20 bg-white/80 backdrop-blur-lg border border-white rounded-full px-5 py-3 text-sm font-bold shadow-lg z-20"
              >
                API BUILDER
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 top-36 bg-indigo-500 text-white rounded-full px-5 py-3 text-sm font-bold shadow-lg z-20"
              >
                BACKEND
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-4 bottom-14 bg-[#11162b] text-white rounded-full px-5 py-3 text-sm font-bold shadow-lg z-20"
              >
                SOFTWARE ENGINEER
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 bg-indigo-400/20 blur-[70px] rounded-full scale-90"></div>

              {/* Main Card */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }}
                className="relative w-[365px] rounded-[2.5rem] bg-white/55 backdrop-blur-xl border border-white/70 shadow-[0_30px_80px_rgba(74,72,160,0.20)] p-6 overflow-hidden"
              >

                <div className="absolute -top-16 -right-16 w-48 h-48 bg-violet-300/50 rounded-full blur-[50px]"></div>

                <div className="absolute bottom-0 -left-10 w-48 h-48 bg-blue-300/50 rounded-full blur-[60px]"></div>

                <div className="relative z-10">

                  <div className="flex justify-between items-center mb-5">

                    <span className="text-xs font-bold tracking-[0.2em] text-indigo-500">
                      PROFILE / 2026
                    </span>

                    <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>

                  </div>

                  {/* Photo */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-white border border-white shadow-lg">

                    <img
                      src="/profile.png"
                      alt="Abidul Islam"
                      className="w-full h-[300px] object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#11162b]/70 via-transparent to-transparent"></div>

                    <div className="absolute bottom-5 left-5">

                      <p className="text-[11px] font-bold tracking-[0.2em] text-white/80">
                        BACKEND DEVELOPER
                      </p>

                      <h3 className="text-3xl font-black text-white mt-1">
                        Abidul Islam
                      </h3>

                    </div>

                  </div>

                  <div className="mt-6">

                    <p className="text-slate-600 leading-7">
                      Building reliable APIs, backend systems, and practical
                      software experiences.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {["Python", "Django", "FastAPI", "SQL"].map((tech) => (

                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/80 border border-indigo-950/10"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

          {/* Mobile / Tablet Profile Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="lg:hidden mt-14"
          >

            <div className="max-w-sm mx-auto rounded-[2.2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_25px_70px_rgba(74,72,160,0.18)] p-4">

              <div className="flex justify-between items-center px-2 pb-4">

                <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-500">
                  PROFILE / 2026
                </span>

                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>

              </div>

              <div className="relative overflow-hidden rounded-[1.7rem]">

                <img
                  src="/profile.png"
                  alt="Abidul Islam"
                  className="w-full h-[360px] object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11162b]/80 via-[#11162b]/5 to-transparent"></div>

                <div className="absolute bottom-5 left-5">

                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/80">
                    BACKEND DEVELOPER
                  </p>

                  <h3 className="text-3xl font-black text-white mt-1">
                    Abidul Islam
                  </h3>

                </div>

              </div>

              <p className="mt-5 px-2 text-sm text-slate-600 leading-6">
                Building reliable APIs, backend systems, and practical software
                experiences.
              </p>

              <div className="mt-5 px-2 pb-2 flex flex-wrap gap-2">

                {["Python", "Django", "FastAPI", "PostgreSQL"].map(
                  (tech) => (

                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#eef0ff] border border-indigo-950/10"
                    >
                      {tech}
                    </span>

                  ),
                )}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 md:py-40 bg-[#cfd5ff] scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p className="text-sm font-bold tracking-[0.25em] text-indigo-700 mb-8">
              01 — WHO AM I?
            </p>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">

              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
                I BUILD
                <br />
                THINGS THAT
                <br />
                WORK.
              </h2>

              <div className="text-slate-700 text-base md:text-lg leading-8 space-y-6">

                <p>
                  I am a Computer Science student focused on backend development
                  and software engineering.
                </p>

                <p>
                  I enjoy designing APIs, working with databases, building
                  authentication systems, and turning ideas into working
                  applications.
                </p>

                <p>
                  My main focus is Python, Django, FastAPI, PostgreSQL, REST
                  APIs, and practical software development.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 md:py-40 bg-[#11162b] text-white scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <p className="text-sm font-bold tracking-[0.25em] text-blue-300 mb-8">
              02 — WHAT I DO
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">

              BACKEND
              <span className="text-indigo-400">.</span>

              <br />

              APIs
              <span className="text-blue-300">.</span>

              <br />

              DATABASES
              <span className="text-violet-400">.</span>

            </h2>

          </motion.div>

          <div className="mt-14 md:mt-16 flex flex-wrap gap-3">

            {skills.map((skill, index) => (

              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.04,
                }}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 text-sm sm:text-base text-slate-200 hover:bg-white hover:text-[#11162b] transition cursor-default"
              >
                {skill}
              </motion.span>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 md:py-40 bg-[#f6f7ff] scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="text-sm font-bold tracking-[0.25em] text-indigo-600 mb-6">
              03 — SELECTED WORK
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight">
              PROJECTS.
            </h2>

          </motion.div>

          <div className="mt-16 md:mt-20 space-y-20 md:space-y-24">

            {projects.map((project, index) => (

              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="grid md:grid-cols-2 gap-8 md:gap-10 items-center"
              >

                <div className={index % 2 === 1 ? "md:order-2" : ""}>

                  {project.image ? (

                    <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl">

                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full aspect-video object-cover hover:scale-105 transition duration-500"
                      />

                    </div>

                  ) : (

                    <div className="aspect-video rounded-[1.5rem] md:rounded-[2rem] bg-[#cfd5ff] flex items-center justify-center">

                      <div className="text-center px-6">

                        <span className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-bold">
                          In Progress
                        </span>

                        <p className="mt-4 text-2xl font-black">
                          {project.title}
                        </p>

                      </div>

                    </div>

                  )}

                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>

                  <div className="flex items-center gap-3 mb-4">

                    <span className="text-sm font-bold text-indigo-500">
                      0{index + 1}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {project.status}
                    </span>

                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-5 md:mt-6 text-slate-600 leading-8">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full border border-indigo-950/10 bg-white text-xs sm:text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.github !== "#" && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#11162b] text-white rounded-full text-sm font-semibold hover:bg-indigo-600 transition"
                      >
                        <FaGithub />
                        SOURCE
                      </a>

                    )}

                    {project.live !== "#" && (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-500 text-white rounded-full text-sm font-semibold hover:bg-indigo-600 transition"
                      >
                        <FaExternalLinkAlt size={12} />
                        LIVE DEMO
                      </a>

                    )}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-28 md:py-44 bg-[#b9c3ff] scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="text-sm font-bold tracking-[0.25em] text-indigo-700 mb-8">
              04 — CONTACT
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-[-0.05em] leading-[0.9] md:leading-[0.85]">

              LET'S BUILD
              <br />

              SOMETHING
              <br />

              <span className="text-indigo-600">
                USEFUL.
              </span>

            </h2>

            <p className="mt-10 max-w-xl text-base md:text-lg text-slate-700 leading-8">
              Have an opportunity, project, internship, or software idea?
              Feel free to reach out and start a conversation.
            </p>

            <div className="mt-10">

              <a
                href="mailto:abidulofficial@gmail.com?subject=Portfolio%20Contact%20-%20Abidul%20Islam"
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#11162b] text-white rounded-full font-semibold hover:bg-indigo-600 hover:-translate-y-1 transition duration-300"
              >
                <MdEmail size={21} />
                SEND ME AN EMAIL
              </a>

            </div>

            <p className="mt-5 text-sm text-indigo-950/60">
              abidulofficial@gmail.com
            </p>

          </motion.div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#11162b] text-slate-400 py-10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-5 justify-between text-sm">

          <p>© 2026 Abidul Islam</p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://github.com/abidul78"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abidul-islam-0001a2295/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:abidulofficial@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;