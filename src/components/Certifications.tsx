import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ExternalLink, Shield, Code, Cpu, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certifications = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco',
      description: 'Cybersecurity fundamentals, threats and vulnerabilities, data and system protection.',
      icon: <Shield className="text-red-400" size={32} />,
      gradient: 'from-red-500 to-orange-500',
      year: '2024',
      skills: ['Network Security', 'Threat Analysis', 'Risk Assessment', 'Security Protocols'],
      credentialId: 'CISCO-CYB-2024',
      status: 'Verified',
      level: 'Fundamentals'
    },
    {
      id: 'python',
      title: 'Programming Essentials in Python',
      issuer: 'Cisco',
      description: 'Python programming, data structures, algorithms and application development.',
      icon: <Code className="text-blue-400" size={32} />,
      gradient: 'from-blue-500 to-indigo-500',
      year: '2023',
      skills: ['Python Programming', 'Data Structures', 'Algorithms', 'Object-Oriented Programming'],
      credentialId: 'CISCO-PY-2023',
      status: 'Verified',
      level: 'Intermediate'
    },
    {
      id: 'cpp',
      title: 'CPA - Programming Essentials in C++',
      issuer: 'Cisco',
      description: 'C++ programming, object-oriented programming, memory management and system development.',
      icon: <Cpu className="text-green-400" size={32} />,
      gradient: 'from-green-500 to-teal-500',
      year: '2023',
      skills: ['C++ Programming', 'OOP Concepts', 'Memory Management', 'System Programming'],
      credentialId: 'CISCO-CPP-2023',
      status: 'Verified',
      level: 'Advanced'
    }
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
    gsap.set(grid.children, { opacity: 0, scale: 0.8, y: 50 });

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
      gsap.set([title, grid.children], { opacity: 1, scale: 1, y: 0 });
    } else {
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      })
      .to(grid.children, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
        stagger: 0.2,
      }, '-=0.4');
    }

    return () => {
      tl.kill();
    };
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'Intermediate': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Fundamentals': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section
      id="certifications"
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
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
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
            style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              🎖 Key Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastery of Security and Programming Fundamentals
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{ willChange: 'transform' }}
            >
              {/* Certificate Header with Gradient */}
              <div className={`h-32 bg-gradient-to-r ${cert.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Floating Icons */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-white/10 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    />
                  ))}
                </div>

                {/* Certificate Icon */}
                <div className="absolute bottom-4 left-6 text-white">
                  {cert.icon}
                </div>

                {/* Verification Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    <CheckCircle size={12} />
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 right-6">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {cert.year}
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Title and Issuer */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-green-400 font-semibold text-sm">
                      {cert.issuer}
                    </p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm font-medium text-gray-300">Skills acquired:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs font-medium border border-gray-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-6 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="text-xs text-gray-400 mb-1">Credential ID:</div>
                  <div className="text-sm font-mono text-green-400">{cert.credentialId}</div>
                </div>

                {/* Action Button */}
                {/* <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-500/25">
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </button> */}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>

              {/* Hover Tooltip */}
              {hoveredCert === cert.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-72 p-4 bg-gray-900/95 border border-green-500/30 rounded-lg shadow-xl z-20 animate-fade-in-up">
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="font-medium text-green-400">Certificate details:</div>
                    <p className="text-xs leading-relaxed">{cert.description}</p>
                    <div className="pt-2 border-t border-gray-700">
                      <div className="font-medium text-green-400 mb-1">All skills:</div>
                      <div className="grid grid-cols-2 gap-1">
                        {cert.skills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-xs">{skill}</span>
                          </div>
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

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">{certifications.length}</div>
            <div className="text-gray-300 text-sm">Certifications earned</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Success rate</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">Cisco</div>
            <div className="text-gray-300 text-sm">Main partner</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <Award size={20} />
            <span>View all my certifications</span>
            <ExternalLink size={16} />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Certifications;