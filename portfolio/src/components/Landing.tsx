import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import {
  GitHub,
  Linkedin,
  Twitter,
  Code,
  Phone,
  MapPin,
  Send,
  Database,
  Server,
  Mail,
  Calendar,
  ExternalLink,
  Smartphone,
  Globe,
  Zap,
  Award,
  FileText,
  ChevronDown,
} from "react-feather";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-600 mix-blend-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between">
          <motion.a
            href={githubLink}
            className="text-blue-400 hover:text-blue-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <GitHub size={24} />
          </motion.a>
          <motion.a
            href={liveLink}
            className="text-blue-400 hover:text-blue-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={24} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function AnimatedPortfolio() {
  const typedRef = useRef<HTMLSpanElement | null>(null); // Create a ref for the typed element
  const backgroundTypedRef = useRef<HTMLDivElement | null>(null); // C // Create a ref for the background typing effect

  // Initialize Typed for the main title
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Ujjawal Kantt",
          "a Developer",
          "a Learner",
          "a Problem Solver",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy(); // Cleanup Typed instance
      };
    }
  }, []);

  // Initialize Typed for the background typing effect
  useEffect(() => {
    if (backgroundTypedRef.current) {
      const backgroundTyped = new Typed(backgroundTypedRef.current, {
        strings: [
          '<code>const life = ["eat", "sleep", "code", "repeat"]</code>',
          "<code>while (true) { learnNewTechnologies(); }</code>",
          "<code>if (coffee.isEmpty()) { refill(); }</code>",
          "<code>function createAwesomeStuff() { /* TODO: Implement awesomeness */ }</code>",
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
        contentType: "html",
      });

      return () => {
        backgroundTyped.destroy(); // Cleanup Typed instance
      };
    }
  }, []);

  const [currentPage, setCurrentPage] = useState("home");
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };
  const achievements = [
    { title: "LeetCode", description: "300+ problems solved", icon: <Code /> },
    {
      title: "HackerRank",
      description: "5-star problem-solving badge",
      icon: <Award />,
    },
    {
      title: "GitHub",
      description: "500+ contributions in the last year",
      icon: <GitHub />,
    },
    {
      title: "Certifications",
      description: "AWS Certified Developer",
      icon: <FileText />,
    },
  ];
  const skills = [
    {
      name: "Frontend",
      icon: <Code />,
      description: "Expertise in React, Vue.js, and modern CSS frameworks",
    },
    {
      name: "Backend",
      icon: <Server />,
      description: "Proficient in Node.js, Express, and RESTful API design",
    },
    {
      name: "Database",
      icon: <Database />,
      description: "Experience with SQL and NoSQL databases like MongoDB",
    },
    {
      name: "Mobile",
      icon: <Smartphone />,
      description:
        "Skilled in React Native for cross-platform mobile development",
    },
    {
      name: "DevOps",
      icon: <Globe />,
      description: "Familiar with CI/CD pipelines and cloud platforms like AWS",
    },
    {
      name: "Performance",
      icon: <Zap />,
      description:
        "Focused on optimizing web applications for speed and efficiency",
    },
  ];
  const projects = [
    {
      title: "Audit Safe",
      description:
        "A web application that visually analyzes security audit reports and provides insightful summaries and suggestions for improving security measures.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymUJmIm_8DXxxHNR2PvAcsS_ig-Y9fKnmnA&s",
      githubLink: "https://github.com/Ujjawal-Kantt/Audit-Safe",
      liveLink: "https://audit-safe.vercel.app/",
    },
    {
      title: "Matdaan",
      description:
        " An e-voting platform that enables secure and efficient online voting, ensuring transparency and accessibility in the electoral process.",
      image:
        "https://play-lh.googleusercontent.com/0rf4ONHGjraar5CqiRA9sFDBeI5C_7o7C8ESMOMlfnbcscAj6n3HKg-Jci3QJEkww8b1",
      githubLink: "https://github.com/Ujjawal-Kantt/Matdaan",
      liveLink: "https://matdaan.vercel.app/",
    },
    {
      title: "Cropify",
      description:
        "A farmer helper application that predicts plant diseases and offers guidance to improve agricultural production and crop management.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbWfmWwWmavhttJy8zDlwxoJc4HtgUf-I2g&s",
      githubLink: "https://github.com/Ujjawal-Kantt/Cropify",
      liveLink: "https://github.com/Ujjawal-Kantt/Cropify",
    },
    {
      title: "Your Hr",
      description:
        "An intuitive human resources management platform designed to streamline employee onboarding, performance tracking, and communication within organizations.",
      image:
        "https://img.freepik.com/free-vector/human-resources-hr-typographic-header-idea-recruitment-job-management-hr-manager-interviewing-job-candidate-flat-vector-illustration_613284-1240.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729036800&semt=ais_hybrid",
      githubLink: "https://github.com/Ujjawal-Kantt/Your_HR",
      liveLink: "https://your-hr-drab.vercel.app/",
    },
    {
      title: "Project 3",
      description: "A high-performance backend system using Go and PostgreSQL.",
      image: "https://via.placeholder.com/400x200",
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          Logo
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-4"
        >
          <a
            onClick={() => setCurrentPage("home")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            onClick={() => setCurrentPage("projects")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            Project
          </a>
          <a
            onClick={() => setCurrentPage("about")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            About
          </a>
          <a
            onClick={() => setCurrentPage("achievements")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            Achievements
          </a>
          <a
            onClick={() => setCurrentPage("contact")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </nav>

      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white ">
                  Hey,I'm{" "}
                  <span ref={typedRef} className="text-blue-400 block"></span>
                </h1>
                <p className="text-xl mb-8 text-gray-400">
                  Developer passionate about creating efficient and
                  user-friendly applications that enhance user experience and
                  support business success.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setCurrentPage("projects")}
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-colors"
                    onClick={() => setCurrentPage("contact")}
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 relative"
              >
                <img
                  src={require("./pic.jpg")}
                  alt="Ujjawal Kantt"
                  className="rounded-full border-4 border-blue-600 shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.div>
                <motion.div
                  className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Calendar size={24} />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 text-center"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Featured Technologies
              </h2>
              <div className="flex justify-center space-x-8">
                {["React", "Node.js", "TypeScript", "GraphQL", "AWS"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      className="text-blue-400 font-semibold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {tech}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} className="text-blue-400" />
            </motion.div>
          </motion.section>
        )}

        {currentPage === "about" && (
          <motion.section
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 py-20 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-white text-center"
              >
                About Me
              </motion.h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-1/3"
                >
                  <video
                    // src={require("./Portfolio.mp4")}
                    controls
                    className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                  />
                </motion.div>
                <div className="md:w-2/3">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg mb-6"
                  >
                    Hello! I'm Ujjawal Kantt, a passionate software developer
                    studying Computer Science Engineering at SRMIST Chennai. I
                    enjoy solving problems on LeetCode and have a strong
                    interest in Data Structures and Algorithms. Over time, I’ve
                    developed a love for building scalable applications and
                    exploring AI technologies.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg mb-6"
                  >
                    I specialize in JavaScript ecosystems, with expertise in
                    React for frontend development and Node.js for backend
                    services. My approach to development is rooted in clean code
                    principles, a focus on problem-solving through Data
                    Structures and Algorithms, and a constant eagerness to learn
                    and adapt to new technologies. I also enjoy tackling
                    challenges on LeetCode to sharpen my skills.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg mb-8"
                  >
                    When I'm not coding, you can find me exploring new
                    technologies, reading about AI advancements, or practicing
                    competitive programming. I believe in the power of
                    technology to solve real-world problems and am always
                    excited to take on new challenges that push the boundaries
                    of what's possible in software development.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center md:justify-start space-x-4"
                  >
                    <motion.a
                      href="https://github.com/Ujjawal-Kantt"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <GitHub size={24} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/ujjawal-kantt-069aba269/"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      href="https://x.com/ujjawalkantt"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Twitter size={24} />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-semibold mb-8 text-white text-center">
                  My Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out"
                      whileHover={{ scale: 1.05, backgroundColor: "#2a4365" }}
                      onClick={() =>
                        setActiveSkill(activeSkill === index ? null : index)
                      }
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-blue-400 mr-4">{skill.icon}</div>
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                      </div>
                      <AnimatePresence>
                        {activeSkill === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-gray-400"
                          >
                            {skill.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
        {currentPage === "achievements" && (
          <motion.section
            key="achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 py-20 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-white text-center"
              >
                Achievements
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-6 flex items-start"
                  >
                    <div className="text-blue-400 mr-4 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  View My Full Resume
                </h3>
                <motion.a
                  href="https://drive.google.com/file/d/1hLCZ4dnMtB9CY07H1nRlMvfC-vvCnUOb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="mr-2" size={20} />
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.section>
        )}
        {currentPage === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 py-20 px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                My Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                  />
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}
        {currentPage === "contact" && (
          <motion.section
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 py-20 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-white text-center"
              >
                Get in Touch
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-blue-400 mr-4" size={24} />
                      <span>kanttujjawal06@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-400 mr-4" size={24} />
                      <span>India</span>
                    </div>
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <motion.a
                      href="https://github.com/Ujjawal-Kantt"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <GitHub size={32} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/ujjawal-kantt-069aba269/"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Linkedin size={32} />
                    </motion.a>
                    <motion.a
                      href="https://x.com/ujjawalkantt"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Twitter size={32} />
                    </motion.a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-black text-gray-300 overflow-hidden">
        {/* Background typing effect */}
        <div
          ref={backgroundTypedRef}
          className="fixed bottom-0 left-0 right-0 p-4 text-s text-bold text-gray-600 overflow-hidden whitespace-nowrap flex justify-centerixed bottom-0 left-0 right-0 p-4 text-s text-gray-600 overflow-hidden whitespace-nowrap"
        />
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">
          © 2024 Ujjawal Kantt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
