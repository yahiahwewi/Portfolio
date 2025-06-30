import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Eye, Code2, Zap, Brain, Shield, BarChart3, Users, Globe, Database, Smartphone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Maghrebia from '../assets/Maghrebia.png';
import Maghrebia2 from '../assets/Maghrebia2.png';
import Maghrebia3 from '../assets/Maghrebia3.png';
import drax1 from '../assets/drax1.png';
import drax2 from '../assets/drax2.png';
import drax3 from '../assets/drax3.png';
import drax4 from '../assets/drax4.png';
import tac1 from '../assets/tac1.jpg';
import tac2 from '../assets/tac2.png';
import tac3 from '../assets/tac3.png';
import tac4 from '../assets/tac4.jpg';
import tac5 from '../assets/tac5.jpg';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  // stores { projectId: string, imageIndex: number }
  const [fullscreenMeta, setFullscreenMeta] = useState<{ projectId: string, imageIndex: number } | null>(null);

  const maghrebiaImages = [Maghrebia, Maghrebia2, Maghrebia3];
  const draxlmaierImages = [drax1, drax2, drax3, drax4];
  const tacImages = [tac1, tac2, tac3, tac4, tac5];

  const projects = [
    {
      id: 'maghrebia',
      title: 'Maghrebia Redesign',
      subtitle: 'Full AI-Enhanced Website Overhaul',
      description: 'Complete redesign of Maghrebia.com.tn with AI-powered insurance recommendations, dynamic disaster alerts, and modern UX/UI. Features secure client space and multilingual support.',
      image: Maghrebia,
      tech: ['Spring boot', 'Angular', 'GPT Integration', 'TypeScript'],
      features: [
        'AI-based insurance recommendation quiz',
        'Dynamic disaster/weather alert notifications',
        'Complete visual rebranding',
        'Secure client space & multilingual support'
      ],
      category: 'AI Integration',
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      // icon: <Brain className="text-purple-400" size={24} />,
      status: 'Completed',
      year: '2024',
      client: 'Maghrebia Insurance',
      specialEffect: 'ai-glitch'
    },
    {
      id: 'draxlmaier',
      title: 'Internal Request & Purchase System',
      subtitle: 'Power Apps + Power BI Solution',
      description: 'Enterprise-grade Power Apps application for DRÄXLMAIER Group to centralize purchase and material requests with real-time Power BI analytics dashboards.',
      image: drax1,
      tech: ['Power Apps', 'Power BI', 'SharePoint', 'Office 365', 'Power Automate'],
      features: [
        'Centralized purchase/material requests',
        'Real-time analytics dashboards',
        'Smoother workflows for department heads',
        'Better request tracking system'
      ],
      category: 'Enterprise Solution',
      gradient: 'from-green-600 via-teal-600 to-blue-600',
      icon: <BarChart3 className="text-green-400" size={24} />,
      status: 'Production',
      year: '2024',
      client: 'DRÄXLMAIER Group',
      specialEffect: 'corporate'
    },
    {
      id: 'ticketing',
      title: 'Ticketing & Complaint Platform',
      subtitle: 'Full-Stack Web Application',
      description: 'Comprehensive ticketing system built with Laravel backend and ReactJS frontend, featuring secure authentication, dynamic ticket management, and admin dashboard.',
      image: tac1,
      tech: ['Laravel', 'ReactJS', 'MySQL', 'JWT', 'Tailwind CSS'],
      features: [
        'Secure login system with JWT',
        'Dynamic ticket CRUD operations',
        'Admin dashboard for monitoring',
        'Responsive & user-focused design'
      ],
      category: 'Full-Stack Development',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      icon: <Users className="text-orange-400" size={24} />,
      status: 'Completed',
      year: '2023',
      client: 'Tac-Tic',
      specialEffect: 'standard'
    },
    // {
    //   id: 'tacticwebsite',
    //   title: 'Tac-Tic Company Website',
    //   subtitle: 'Modern Corporate Showcase',
    //   description: 'Responsive company website built with React and Tailwind CSS, featuring modern animations, service showcases, and optimized performance.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vite'],
    //   features: [
    //     'Modern responsive design',
    //     'Smooth animations with Tailwind',
    //     'Service portfolio showcase',
    //     'Performance optimized'
    //   ],
    //   category: 'Frontend Development',
    //   gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    //   icon: <Globe className="text-indigo-400" size={24} />,
    //   status: 'Live',
    //   year: '2023',
    //   client: 'Tac-Tic',
    //   specialEffect: 'standard'
    // },
    // {
    //   id: 'cybersecurity',
    //   title: 'Cybersecurity Tools Suite',
    //   subtitle: 'Security & Network Analysis',
    //   description: 'Collection of cybersecurity tools and network simulation applications developed during academic projects and internships, focusing on threat detection and analysis.',
    //   image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Python', 'C++', 'Packet Tracer', 'Wireshark', 'Linux'],
    //   features: [
    //     'Network vulnerability scanning',
    //     'Packet analysis tools',
    //     'Security assessment scripts',
    //     'Network topology simulation'
    //   ],
    //   category: 'Cybersecurity',
    //   gradient: 'from-red-600 via-orange-600 to-yellow-600',
    //   icon: <Shield className="text-red-400" size={24} />,
    //   status: 'Ongoing',
    //   year: '2023-2024',
    //   client: 'Academic Projects',
    //   specialEffect: 'security'
    // },
    // {
    //   id: 'microservices',
    //   title: 'Cloud Microservices Architecture',
    //   subtitle: 'Scalable Backend Solutions',
    //   description: 'Modern microservices architecture implementation with containerization, API gateways, and cloud deployment for scalable enterprise applications.',
    //   image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'],
    //   features: [
    //     'Containerized microservices',
    //     'API gateway implementation',
    //     'Cloud-native deployment',
    //     'Scalable architecture design'
    //   ],
    //   category: 'Cloud Architecture',
    //   gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    //   icon: <Database className="text-blue-400" size={24} />,
    //   status: 'In Development',
    //   year: '2024',
    //   client: 'Personal Project',
    //   specialEffect: 'cloud'
    // }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 50 });
    gsap.set(grid.children, { opacity: 0, y: 100, scale: 0.8 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    if (prefersReducedMotion) {
      gsap.set([title, grid.children], { opacity: 1, y: 0, scale: 1 });
    } else {
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      })
      .to(grid.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
      }, '-=0.3');
    }

    return () => {
      tl.kill();
    };
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'Production': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Live': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'In Development': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'Ongoing': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getSpecialEffect = (effect: string): string => {
    switch (effect) {
      case 'ai-glitch':
        return 'hover:animate-glitch';
      case 'corporate':
        return 'hover:shadow-2xl hover:shadow-green-500/20';
      case 'security':
        return 'hover:shadow-2xl hover:shadow-red-500/20';
      case 'cloud':
        return 'hover:shadow-2xl hover:shadow-blue-500/20';
      default:
        return 'hover:shadow-2xl hover:shadow-purple-500/20';
    }
    return '';
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center relative overflow-hidden"
      style={{ 
        scrollSnapAlign: 'start',
        paddingTop: '100px',
        paddingBottom: '80px',
        marginTop: '40px',
        marginBottom: '40px'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🚀 Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            My Concrete & Creative Contributions in the World of Code and AI
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Projects focused on security, performance, and user experience
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${getSpecialEffect(project.specialEffect || '')}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (project.id === 'maghrebia') {
                  setFullscreenMeta({ projectId: 'maghrebia', imageIndex: 0 });
                } else if (project.id === 'draxlmaier') {
                  setFullscreenMeta({ projectId: 'draxlmaier', imageIndex: 0 });
                } else {
                  setFullscreenMeta({ projectId: project.id, imageIndex: 0 });
                }
              }}
              style={{ willChange: 'transform' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    project.id === 'maghrebia'
                      ? 'w-full h-full object-contain bg-black transition-transform duration-500'
                      : 'w-full h-full object-cover transition-transform duration-500'
                  }
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                {/* Special AI Effect for Maghrebia */}
                {project.id === 'maghrebia' && hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse" />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-purple-400 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-yellow-400" size={16} />
                    <span className="text-sm font-medium text-gray-300">Key features:</span>
                  </div>
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 2 && (
                      <div className="text-xs text-purple-400">
                        +{project.features.length - 2} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Client: {project.client}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              {/* Extended Tooltip on Hover */}
              {hoveredProject === project.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-80 p-4 bg-gray-900/95 border border-purple-500/30 rounded-lg shadow-xl z-20 animate-fade-in-up">
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="font-medium text-purple-400">All features:</div>
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-700">
                      <div className="font-medium text-purple-400 mb-1">Complete tech stack:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/yahiahwewi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Github size={20} />
            <span>View all my projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      {/* Fullscreen Image Modal */}
      {fullscreenMeta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setFullscreenMeta(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-8 right-8 text-white bg-black/70 rounded-full p-2 hover:bg-black transition"
              onClick={() => setFullscreenMeta(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            {/* Carousel for maghrebia project */}
            {fullscreenMeta.projectId === 'maghrebia' ? (
              <>
                <button
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'maghrebia',
                    imageIndex: (meta.imageIndex + maghrebiaImages.length - 1) % maghrebiaImages.length
                  } : null)}
                  aria-label="Previous"
                >
                  <ChevronLeft size={36} />
                </button>
                <img
                  src={maghrebiaImages[fullscreenMeta.imageIndex]}
                  alt={`Maghrebia ${fullscreenMeta.imageIndex + 1}`}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  style={{ background: '#000' }}
                />
                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'maghrebia',
                    imageIndex: (meta.imageIndex + 1) % maghrebiaImages.length
                  } : null)}
                  aria-label="Next"
                >
                  <ChevronRight size={36} />
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-lg">
                  {fullscreenMeta.imageIndex + 1} / {maghrebiaImages.length}
                </div>
              </>
            ) : fullscreenMeta.projectId === 'draxlmaier' ? (
              <>
                <button
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'draxlmaier',
                    imageIndex: (meta.imageIndex + draxlmaierImages.length - 1) % draxlmaierImages.length
                  } : null)}
                  aria-label="Previous"
                >
                  <ChevronLeft size={36} />
                </button>
                <img
                  src={draxlmaierImages[fullscreenMeta.imageIndex]}
                  alt={`draxlmaier ${fullscreenMeta.imageIndex + 1}`}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  style={{ background: '#000' }}
                />
                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'draxlmaier',
                    imageIndex: (meta.imageIndex + 1) % draxlmaierImages.length
                  } : null)}
                  aria-label="Next"
                >
                  <ChevronRight size={36} />
                </button>
                {/* Image index indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-lg">
                  {fullscreenMeta.imageIndex + 1} / {draxlmaierImages.length}
                </div>
              </>
            ) : fullscreenMeta.projectId === 'ticketing' ? (
              <>
                <button
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'ticketing',
                    imageIndex: (meta.imageIndex + tacImages.length - 1) % tacImages.length
                  } : null)}
                  aria-label="Previous"
                >
                  <ChevronLeft size={36} />
                </button>
                <img
                  src={tacImages[fullscreenMeta.imageIndex]}
                  alt={`ticketing ${fullscreenMeta.imageIndex + 1}`}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  style={{ background: '#000' }}
                />
                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
                  onClick={() => setFullscreenMeta(meta => meta ? {
                    projectId: 'ticketing',
                    imageIndex: (meta.imageIndex + 1) % tacImages.length
                  } : null)}
                  aria-label="Next"
                >
                  <ChevronRight size={36} />
                </button>
                {/* Image index indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-lg">
                  {fullscreenMeta.imageIndex + 1} / {tacImages.length}
                </div>
              </>
            ) : (
              <img
                src={projects.find(p => p.id === fullscreenMeta.projectId)?.image ?? ''}
                alt="Zoomed Project"
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                style={{ background: '#000' }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;