import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import { GitHub, Linkedin, Twitter, ExternalLink } from "react-feather";

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
        strings: ["Ujjawal Kantt", "a Developer", "a Designer", "a Creator"],
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
  const projects = [
    {
      title: "Project 1",
      description:
        "A cutting-edge web application leveraging React and Node.js.",
      image: "https://via.placeholder.com/400x200",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Project 2",
      description:
        "An innovative mobile app built with React Native and Firebase.",
      image: "https://via.placeholder.com/400x200",
      githubLink: "#",
      liveLink: "#",
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
          Your Logo
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
            onClick={() => setCurrentPage("about")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            About
          </a>
          <a
            onClick={() => setCurrentPage("projects")}
            className="cursor-pointer hover:text-white transition-colors"
          >
            Projects
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
            className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Hi, I'm <span className="text-blue-400" ref={typedRef} />
              </h1>
              <p className="text-xl mb-8">
                Passionate about creating beautiful and functional web
                experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img
                src="https://via.placeholder.com/400"
                alt="Your Name"
                className="rounded-full border-4 border-blue-600 shadow-lg w-64 h-64 object-cover mx-auto"
              />
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                About Me
              </h2>
              <p className="text-lg mb-8">
                I'm a passionate web developer with expertise in React, Node.js,
                and modern web technologies. With a keen eye for design and a
                love for clean code, I strive to create engaging and intuitive
                user experiences.
              </p>
              <motion.div className="flex justify-center space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <GitHub size={32} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Linkedin size={32} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Twitter size={32} />
                </motion.a>
              </motion.div>
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Contact Me
              </h2>
              <p className="text-lg mb-8">
                I'd love to hear from you! Feel free to reach out through any of
                the channels below.
              </p>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                  rows={4}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">
          © 2024 Ujjawal Kantt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
