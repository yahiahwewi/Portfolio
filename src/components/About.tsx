import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Code2, User, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const terminalContent = [
    '$ whoami',
    'yahya.houaoui@esprit.tn',
    '',
    '$ cat about.txt',
    'Software Engineering Student at ESPRIT since September 2023.',
    'Graduated with Applied Computer Science Degree, DSI specialization, in 2023.',
    '',
    'Passionate about cybersecurity, IoT, UI/UX, and data visualization.',
    'I strive to create secure and scalable software solutions.',
    '',
    '$ ls skills/',
    'cybersecurity/  iot/  ui-ux/  data-visualization/  full-stack/',
    '',
    '$ echo "Ready for new challenges!"',
    'Ready for new challenges!',
    '',
    '$ _'
  ];

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible || currentLine >= terminalContent.length) return;

    const line = terminalContent[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setTypedText(line.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setTypedText('');
        }, line === '' ? 100 : 800);
      }
    }, line.startsWith('$') ? 100 : 30);

    return () => clearInterval(typeInterval);
  }, [currentLine, isVisible]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const terminal = terminalRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !terminal || !cards) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 50 });
    gsap.set(terminal, { opacity: 0, scale: 0.9, rotationX: 10 });
    gsap.set(cards.children, { opacity: 0, y: 60, scale: 0.95 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => setIsVisible(true),
        onLeave: () => setIsVisible(false),
        onEnterBack: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false),
      },
    });

    if (prefersReducedMotion) {
      gsap.set([title, terminal, cards.children], { opacity: 1, scale: 1, rotationX: 0, y: 0 });
      setIsVisible(true);
    } else {
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
      .to(terminal, {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.3')
      .to(cards.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
      }, '-=0.4');
    }

    return () => {
      tl.kill();
    };
  }, []);

  const highlights = [
    {
      icon: <User className="text-cyan-400" size={24} />,
      title: 'Education',
      description: 'Software Engineering Degree at ESPRIT',
      accent: 'cyan',
    },
    {
      icon: <Code2 className="text-green-400" size={24} />,
      title: 'Specialization',
      description: 'Full-Stack Development',
      accent: 'green',
    },
    // {
    //   icon: <Zap className="text-yellow-400" size={24} />,
    //   title: 'Passions',
    //   description: 'IoT, UI/UX, Data Visualization',
    //   accent: 'yellow',
    // },
    {
      icon: <Terminal className="text-purple-400" size={24} />,
      title: 'Mission',
      description: 'Create secure and scalable solutions',
      accent: 'purple',
    },
  ];

  return (
    <section
      id="about"
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
            linear-gradient(rgba(0, 255, 193, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 193, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
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
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono"
            style={{ textShadow: '0 0 20px rgba(0, 255, 193, 0.5)' }}
          >
            <span className="text-cyan-400">{'>'}</span> About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Terminal Window */}
          <div
            ref={terminalRef}
            className="perspective-1000"
          >
            <div className="bg-black/90 backdrop-blur-sm border-2 border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 group">
              {/* Terminal Header */}
              <div className="bg-gray-800/50 border-b border-cyan-500/30 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-cyan-400 font-mono text-sm">about.sh</span>
                <div className="ml-auto text-cyan-400/60 text-xs font-mono">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px]">
                {/* Previous lines */}
                {terminalContent.slice(0, currentLine).map((line, index) => (
                  <div key={index} className="mb-1">
                    {line.startsWith('$') ? (
                      <span className="text-green-400">{line}</span>
                    ) : line === '' ? (
                      <div className="h-4"></div>
                    ) : line.includes('@') ? (
                      <span className="text-cyan-400">{line}</span>
                    ) : line.includes('/') && !line.includes(' ') ? (
                      <span className="text-yellow-400">{line}</span>
                    ) : (
                      <span className="text-gray-300">{line}</span>
                    )}
                  </div>
                ))}
                
                {/* Current typing line */}
                {currentLine < terminalContent.length && (
                  <div className="mb-1">
                    {terminalContent[currentLine].startsWith('$') ? (
                      <span className="text-green-400">
                        {typedText}
                        {showCursor && <span className="bg-green-400 text-black">|</span>}
                      </span>
                    ) : terminalContent[currentLine] === '' ? (
                      <div className="h-4"></div>
                    ) : terminalContent[currentLine].includes('@') ? (
                      <span className="text-cyan-400">
                        {typedText}
                        {showCursor && <span className="bg-cyan-400 text-black">|</span>}
                      </span>
                    ) : terminalContent[currentLine].includes('/') && !terminalContent[currentLine].includes(' ') ? (
                      <span className="text-yellow-400">
                        {typedText}
                        {showCursor && <span className="bg-yellow-400 text-black">|</span>}
                      </span>
                    ) : (
                      <span className="text-gray-300">
                        {typedText}
                        {showCursor && <span className="bg-gray-300 text-black">|</span>}
                      </span>
                    )}
                  </div>
                )}

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div
            ref={cardsRef}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group p-6 bg-gray-900/50 backdrop-blur-sm border border-${highlight.accent}-500/20 rounded-lg hover:border-${highlight.accent}-400/40 transition-all duration-500 cursor-pointer hover:bg-gray-800/50`}
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-${highlight.accent}-500/10 border border-${highlight.accent}-500/30 rounded-lg group-hover:bg-${highlight.accent}-500/20 transition-all duration-300`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${highlight.accent}-400 mb-2 font-mono group-hover:text-${highlight.accent}-300 transition-colors duration-300`}>
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-mono text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${highlight.accent}-500/0 via-${highlight.accent}-500/5 to-${highlight.accent}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;