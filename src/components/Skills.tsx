import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, Star, Award, Code, Database, Settings, Monitor } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Skills data with categories, icons, and proficiency levels
  const skillsData = [
    // Programming Languages
    {
      name: 'JavaScript',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      stars: 4,
      description: 'ES6+, Async/Await, DOM manipulation, Modern frameworks'
    },
    {
      name: 'Python',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      stars: 4,
      description: 'Django, Flask, Data Science, Automation scripts'
    },
    {
      name: 'Java',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      stars: 4,
      description: 'Spring Boot, OOP, Enterprise applications'
    },
    {
      name: 'C#',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      stars: 3,
      description: '.NET Framework, WPF, Desktop applications'
    },
    {
      name: 'C++',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      stars: 3,
      description: 'STL, Algorithms, System programming'
    },
    {
      name: 'PHP',
      category: 'languages',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      stars: 4,
      description: 'Laravel, Symfony, Web development'
    },

    // Frontend Frameworks
    {
      name: 'React',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      stars: 4,
      description: 'Hooks, Context API, Redux, Next.js'
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      stars: 4,
      description: 'Semantic HTML, Accessibility, SEO optimization'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      stars: 5,
      description: 'Grid, Flexbox, Animations, Responsive design'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      stars: 4,
      description: 'Utility-first, Custom components, Responsive'
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      stars: 4,
      description: 'Responsive frameworks, Grid system, Components'
    },

    // Backend & Databases
    {
      name: 'Laravel',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      stars: 4,
      description: 'MVC, Eloquent ORM, API development, Artisan'
    },
    {
      name: 'MySQL',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      stars: 4,
      description: 'Database design, Query optimization, Indexing'
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      stars: 3,
      description: 'Express.js, REST APIs, NPM packages'
    },

    // Tools & Platforms
    {
      name: 'Git',
      category: 'tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 'Advanced',
      stars: 4,
      description: 'Version control, Branching strategies, Collaboration',
      projects: 'Daily use'
    },
    {
      name: 'Visual Studio',
      category: 'tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
      level: 'Advanced',
      stars: 4,
      description: 'IDE mastery, Debugging, Extensions, IntelliSense',
    },
    {
      name: 'Postman',
      category: 'tools',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      level: 'Advanced',
      stars: 4,
      description: 'API testing, Automation, Collections',
      projects: '20+ APIs'
    },
    {
      name: 'Power Apps',
      category: 'tools',
      icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg',
      level: 'Intermediate',
      stars: 3,
      description: 'Business applications, SharePoint integration',
      projects: '3+ apps'
    },
    {
      name: 'Power BI',
      category: 'tools',
      icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg',
      level: 'Intermediate',
      stars: 3,
      description: 'Data visualization, Dashboard creation, Analytics',
      projects: '5+ dashboards'
    },

    // Operating Systems
    {
      name: 'Windows',
      category: 'systems',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
      level: 'Expert',
      stars: 5,
      description: 'Administration, PowerShell scripting, Troubleshooting',
      projects: '10+ years'
    },
    {
      name: 'Linux',
      category: 'systems',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      level: 'Advanced',
      stars: 4,
      description: 'Shell scripting, System administration, Ubuntu/CentOS',
      projects: '3+ years'
    },
    {
      name: 'macOS',
      category: 'systems',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
      level: 'Intermediate',
      stars: 3,
      description: 'Unix commands, Development environment, Terminal',
      projects: '2+ years'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: <Star size={16} /> },
    { id: 'languages', label: 'Languages', icon: <Code size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Monitor size={16} /> },
    { id: 'backend', label: 'Backend', icon: <Database size={16} /> },
    { id: 'tools', label: 'Tools', icon: <Settings size={16} /> },
    { id: 'systems', label: 'Systems', icon: <Award size={16} /> }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const filters = filtersRef.current;
    const grid = gridRef.current;

    if (!section || !title || !filters || !grid) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 50 });
    gsap.set(filters, { opacity: 0, y: 30 });
    gsap.set(grid.children, { opacity: 0, y: 60, scale: 0.9 });

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
      gsap.set([title, filters, grid.children], { opacity: 1, y: 0, scale: 1 });
    } else {
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      })
      .to(filters, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }, '-=0.4')
      .to(grid.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
        stagger: 0.1,
      }, '-=0.4');
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Re-animate grid when filter changes
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.fromTo(grid.children, 
        { opacity: 0, y: 20, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.5,
          ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
          stagger: 0.05
        }
      );
    }
  }, [activeFilter]);

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < count ? 'text-yellow-400 fill-current' : 'text-gray-600'}
      />
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'Advanced': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section
      id="skills"
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
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
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
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              🧠 My Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The tools & languages that power my code
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ willChange: 'transform' }}
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a generic icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Code className="w-10 h-10 text-blue-400 hidden" />
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h3>


              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(skill.stars)}
              </div>

              {/* Projects Count */}
              <div className="text-center text-sm text-gray-400 mb-4">
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">
                  {skill.projects}
                </span>
              </div>

              {/* Hover Tooltip */}
              {hoveredSkill === skill.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900/95 border border-blue-500/30 rounded-lg shadow-xl z-10 animate-fade-in-up">
                  <div className="text-sm text-gray-300 leading-relaxed">
                    {skill.description}
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">{skillsData.length}+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
            <div className="text-gray-300 text-sm">Years of experience</div>
          </div>
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-300 text-sm">Projects completed</div>
          </div>
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Passion for learning</div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Skills;