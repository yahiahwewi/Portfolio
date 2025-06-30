import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    '> Booting system...',
    '> Loading developer profile...',
    '',
    '> Name: Yahya Houaoui',
    '> Role: Software Engineering Student | Full-Stack Development',
    '> Core Stack: JavaScript | React | Laravel | Node.js',
    '> Focus Areas: Full-Stack Development | Web Security | API Integration | DevOps Basics',
    '',
    '> Status: Open to opportunities | Always learning | Building the future, one commit at a time',
    '',
    '> System initialized. Let\'s build something great.',
    '',
    '> _'
  ];

  // Developer-focused background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Developer symbols and code snippets
    const codeElements = [
      '{ }', '< >', '[ ]', '( )', '=>', '&&', '||', '!=', '===', '++', '--',
      'const', 'let', 'var', 'function', 'class', 'import', 'export',
      'if', 'else', 'for', 'while', 'return', 'true', 'false', 'null',
      'React', 'Node', 'JS', 'TS', 'CSS', 'HTML', 'API', 'JSON',
      'git', 'npm', 'yarn', 'dev', 'build', 'test', 'deploy',
      '0', '1', '10', '11', '100', '101', '110', '111'
    ];

    const particles: Array<{
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      size: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeElements[Math.floor(Math.random() * codeElements.length)],
        speed: 0.2 + Math.random() * 0.8,
        opacity: 0.1 + Math.random() * 0.4,
        size: 10 + Math.random() * 8,
        color: ['#00ff41', '#00bcd4', '#22d3ee', '#4ade80', '#a855f7'][Math.floor(Math.random() * 5)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height + 50) {
          particle.y = -50;
          particle.x = Math.random() * canvas.width;
          particle.text = codeElements[Math.floor(Math.random() * codeElements.length)];
        }

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.text, 0, 0);
        
        // Add glow effect for some particles
        if (Math.random() > 0.95) {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fillText(particle.text, 0, 0);
          ctx.shadowBlur = 0;
        }
        
        ctx.restore();

        // Occasionally change particle properties
        if (Math.random() > 0.998) {
          particle.opacity = 0.1 + Math.random() * 0.4;
          particle.speed = 0.2 + Math.random() * 0.8;
        }
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.globalAlpha = (150 - distance) / 150 * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Terminal typing animation - faster speed
  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
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
        }, line === '' ? 100 : 500); // Reduced delay between lines
      }
    }, line.startsWith('>') ? 10 : 7); // Much faster typing speed

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // GSAP animations
  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const photo = photoRef.current;
    const subtitle = subtitleRef.current;
    const tagline = taglineRef.current;
    const cta = ctaRef.current;
    const terminal = terminalRef.current;
    const scanline = scanlineRef.current;

    if (!hero || !title || !photo || !subtitle || !tagline || !cta || !terminal || !scanline) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([title, photo, subtitle, tagline, cta, terminal], { opacity: 1 });
      return;
    }

    // Initial states
    gsap.set([title, photo, subtitle, tagline, cta], { opacity: 0, y: 60 });
    gsap.set(terminal, { opacity: 0, x: -100 });

    // Main timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    })
    .to(photo, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }, '-=0.6')
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }, '-=0.6')
    .to(tagline, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }, '-=0.6')
    .to(terminal, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.4')
    .to(cta, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }, '-=0.5');

    // Scanline animation
    gsap.to(scanline, {
      x: '100vw',
      duration: 3,
      ease: 'power2.inOut',
      repeat: -1,
      repeatDelay: 5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ 
        scrollSnapAlign: 'start',
        paddingTop: '120px',
        paddingBottom: '80px',
        marginTop: '0',
        marginBottom: '40px'
      }}
    >
      {/* Developer Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
        style={{ pointerEvents: 'none' }}
      />

      {/* Scanline Effect */}
      <div
        ref={scanlineRef}
        className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50 -translate-x-full"
        style={{ filter: 'blur(1px)' }}
      />

      {/* Code Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-lg animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['{ }', '< />', '[ ]', '=>', '&&', '||', 'fn()', 'const', 'let', 'if'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/10 font-mono text-xs leading-tight"
            style={{
              left: `${i * 7}%`,
              animation: `binaryRain ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </div>
        ))}
      </div>

      {/* Main Content Container - Now centered single column */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Terminal Window */}
          <div
            ref={terminalRef}
            className="w-full max-w-2xl bg-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 group"
          >
            {/* Terminal Header */}
            <div className="bg-gray-800/50 border-b border-cyan-500/30 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 font-mono text-sm">terminal</span>
              <div className="ml-auto text-cyan-400/60 text-xs font-mono">
                {new Date().toLocaleTimeString()}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
              {/* Previous lines */}
              {terminalLines.slice(0, currentLine).map((line, index) => (
                <div key={index} className="mb-1">
                  {line.startsWith('>') ? (
                    <span className="text-green-400">{line}</span>
                  ) : line === '' ? (
                    <div className="h-4"></div>
                  ) : line.includes('@') ? (
                    <span className="text-cyan-400">{line}</span>
                  ) : line.includes('|') && !line.includes(' ') ? (
                    <span className="text-yellow-400">{line}</span>
                  ) : (
                    <span className="text-gray-300">{line}</span>
                  )}
                </div>
              ))}
              
              {/* Current typing line */}
              {currentLine < terminalLines.length && (
                <div className="mb-1">
                  {terminalLines[currentLine].startsWith('>') ? (
                    <span className="text-green-400">
                      {typedText}
                      {showCursor && <span className="bg-green-400 text-black">|</span>}
                    </span>
                  ) : terminalLines[currentLine] === '' ? (
                    <div className="h-4"></div>
                  ) : terminalLines[currentLine].includes('@') ? (
                    <span className="text-cyan-400">
                      {typedText}
                      {showCursor && <span className="bg-cyan-400 text-black">|</span>}
                    </span>
                  ) : terminalLines[currentLine].includes('|') && !terminalLines[currentLine].includes(' ') ? (
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

          {/* Main Title and Photo Section */}
          <div className="space-y-8">
            {/* Name Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">Yahya</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Houaoui
              </span>
            </h1>

            {/* Profile Photo */}
            <div
              ref={photoRef}
              className="flex justify-center"
            >
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Inner border ring */}
                <div className="relative bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 rounded-full p-1">
                  <div className="bg-black rounded-full p-2">
                    <img
                      src="/src/assets/my photo.png"
                      alt="Yahya Houaoui"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-800 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                  </div>
                </div>

                {/* Floating particles around photo */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-green-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Subtitle and Tagline */}
            <div className="space-y-4">
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-cyan-300 font-medium"
                style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
              >
                Software Engineering Student | Full-Stack Development
              </p>

              <p
                ref={taglineRef}
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                "Crafting secure, scalable software—from desktop apps to cloud microservices."
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://drive.google.com/file/d/1dZtp5aRUx60bi4QXStmUv6pqHDZc2JpE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-black rounded-lg font-semibold hover:from-cyan-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download CV
              </span>
            </a>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </span>
            </button>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/houaouiyahya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-medium">↓ Explore</span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;