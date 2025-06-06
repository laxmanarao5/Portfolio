import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Terminal,
    Zap,
    BookOpen,
    Briefcase,
    Mail,
    MapPin,
    Smartphone,
    Github,
    Linkedin,
} from 'lucide-react';
import { Button } from './ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from "./ui/badge"

// --- Helper Components ---

// Reusable animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

// --- Data ---
// Bio data extracted from the resume
const bio = {
    name: 'Boddepalli Laxmana Rao',
    tagline: 'Software Engineer',
    contact: {
        phone: '+91 8367027220',
        email: 'lakshmana5296@gmail.com',
        website: 'https://laxman-dev.vercel.app/', // Added website
        location: {text:'Sanyasirajupeta, Polaki, Srikakulam, Andhra Pradesh, 532429',
                  url:"https://www.google.com/maps/place/18%C2%B024'07.9%22N+84%C2%B005'07.5%22E/@18.4021901,84.0828491,17z"
        },
    },
    social: {
        github: 'https://github.com/laxmanarao5', // Added placeholder
        linkedin: 'https://www.linkedin.com/in/boddepalli-laxmanarao', // Added placeholder
    },
    summary: `
    Tech enthusiast with a strong foundation from early education and hands-on experience with modern technologies and frameworks. Committed to continuous learning and embracing challenges in the technology industry. Currently seeking opportunities to apply my skills and contribute to innovative and impactful projects.
    `,
};

// Skills data from the resume
const skills = [
    "Node.js", "Python", "AWS","Azure", "Flask", "Azure DevOps", "Django",
    "React", "GitHub Actions", "Docker", "Java", "JavaScript", "Linux",
    "MongoDB", "MySQL", "MSSQL", "DynamoDB", "Firebase", "PowerShell",
    "Shell Scripting",
];

// Experience data from the resume
const experience = [
    {
        title: 'Software Engineer',
        company: 'Veltris',
        dates: '02/2023 - Present',
        location: 'Remote',
        description: [
            'Completed training in full-stack development technologies, including React.js, Express.js, Node.js, MySQL, and PostgreSQL.',
            'Worked on developing Internal project with AWS lambda and CloudFront.',
            'Migrated on-premises servers to Microsoft Azure, improving scalability, performance, and availability.',
            'Worked on a project to synchronize large volumes of historical client data with the live application using a custom Node.js utility.',
            'Contributed to the development of Node.js and Python Flask microservices and supported AWS infrastructure management.',
        ],
    },
];

// Education data from the resume
const education = [
    {
        degree: 'Bachelor Of Technology',
        institution: 'Rajiv Gandhi University of Knowledge Technologies',
        dates: '08/2019 - 05/2023',
        location: 'Srikakulam',
    },
    {
        degree: 'Pre-University Course (MPC)',
        institution: 'Rajiv Gandhi University of Knowledge Technologies',
        dates: '08/2017 - 07/2019',
        location: 'Srikakulam',
    },
];

// Projects Data (Added a projects section)
const projects = [
    {
        title: "Ganesh Chaturthi Finance Manager",
        description: "Designed and developed a mobile app to manage festival-related finances during Ganesh Chaturthi celebrations.",
        technologies: ["React", "React Native", "Fire store","Github Actions - CI/CD", "Flask", "DynamoDB", "CloudFront"],
        link: "https://github.com/laxmanarao5/Ganesh-Chaturthi-Finance-Manager", // Placeholder
    },
    {
        title: "InfraWatch – Network & Infrastructure Monitoring System",
        description: "Developed a web application to monitor real-time status of devices in a college or organization's IT infrastructure.",
        technologies: ["NodeJs", "PHP","ARP Protocol"],
        link: "https://github.com/laxmanarao5/InfraWatch-Network-and-Infrastructure-Monitoring-System", // Placeholder
    },
    {
        title: "Full-Stack E-Commerce Platform",
        description: "Developed a full-stack e-commerce application using React and Flask with user auth, cart, orders, and payment features.",
        technologies: ["React","Flask", "MySQL","SQLAlchemy","CI/CD"],
        link: "https://github.com/laxmanarao5/Full-Stack-E-Commerce-Platform", // Placeholder
    },
    {
        title: "RGUKT Bus Reservation System",
        description: "Developed a web-based application for booking bus tickets provided by RGUKT Srikakulam during holidays.",
        technologies: ["PHP", "MySQL","Paytm Payments Gateway"],
        link: "https://github.com/laxmanarao5/RGUKT-Bus-Reservation-System", // Placeholder
    },
];

// --- Components ---

// Header Component
const Header = () => (
    <header className="py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
            >
                <Code className="w-6 h-6 text-blue-500" />
                <h1 className="text-2xl font-bold text-white">{bio.name}</h1>
            </motion.div>
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="text-gray-300 hover:text-white transition-colors">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

// Hero Section Component
const HeroSection = () => (
    <section id="about" className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
            >
                {/* No Image provided in resume */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">BLR</span>
                </div>
            </motion.div>
            <div className="md:w-1/2">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-4"
                >
                    {bio.name}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-gray-300 mb-6"
                >
                    {bio.tagline}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-gray-400 leading-relaxed"
                >
                    {bio.summary}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 flex gap-4"
                >
                    <Button variant="outline" className="text-blue-400 hover:text-white hover:bg-blue-500/50 border-blue-500/30">
                        <a href="#contact">Contact Me</a>
                    </Button>
                    <Button variant="outline" className="text-purple-400 hover:text-white hover:bg-purple-500/50 border-purple-500/30">
                        <a href="#projects">My Projects</a>
                    </Button>
                </motion.div>
            </div>
        </div>
    </section>
);

// Skills Section Component
const SkillsSection = () => (
    <section id="skills" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-800 rounded-lg p-4 flex items-center gap-2"
                    >
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">{skill}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

// Experience Section Component
const ExperienceSection = () => (
    <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
            <div className="space-y-8">
                {experience.map((exp, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-white">{exp.title}</CardTitle>
                            <CardDescription className="text-gray-400">
                                {exp.company} | {exp.dates} | {exp.location}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

// Education Section Component
const EducationSection = () => (
    <section id="education" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-white">{edu.degree}</CardTitle>
                            <CardDescription className="text-gray-400">
                                {edu.institution} | {edu.dates} | {edu.location}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

// Projects Section
const ProjectsSection = () => (
    <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                            <CardDescription className="text-gray-400">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <h4 className="text-gray-300 font-medium">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <Button
                              asChild
                              variant="outline" className="text-purple-400 hover:text-white hover:bg-purple-500/50 border-purple-500/30"
                            >
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  View Project
                              </a>
                            </Button>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

// Contact Section Component
const ContactSection = () => (
    <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-white">Get in Touch</CardTitle>
                            <CardDescription className="text-gray-400">
                                Feel free to reach out to me for any opportunities or collaborations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-300">{bio.contact.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Smartphone className="w-5 h-5 text-green-400" />
                                <span className="text-gray-300">{bio.contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-purple-400" />
                                <a href={bio.contact.location.url} target="_blank" rel="noopener noreferrer"><span className="text-gray-300">{bio.contact.location.text}</span></a>
                            </div>
                            {bio.contact.website && (
                              <div className="flex items-center gap-2">
                                  <BookOpen className="w-5 h-5 text-yellow-400" />
                                  <a
                                    href={bio.contact.website}
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 hover:underline"
                                  >
                                      Website
                                  </a>
                              </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-white">Follow Me</CardTitle>
                            <CardDescription className="text-gray-400">
                                Connect with me on social media.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex gap-4">
                            <Button
                                asChild
                                variant="outline" className="text-white hover:bg-gray-700 border-gray-600"
                            >
                                <a href={bio.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline" className="text-white hover:bg-gray-700 border-gray-600"
                            >
                                <a href={bio.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
);

// Main App Component
const App = () => {
    return (
        <div className="bg-gray-950 min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <footer className="py-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Boddepalli Laxmana Rao. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
