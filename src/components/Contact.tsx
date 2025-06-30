import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  const [state, handleSubmit] = useForm("xeoknkaw");

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const contactInfo = contactInfoRef.current;

    if (!section || !title || !form || !contactInfo) return;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 50 });
    gsap.set(form, { opacity: 0, x: 100 });
    gsap.set(contactInfo, { opacity: 0, x: -100 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    })
    .to(contactInfo, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
    }, '-=0.4')
    .to(form, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
    }, '-=0.8');

    return () => {
      tl.kill();
    };
  }, []);


  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: 'Email',
      value: 'yahya.houaoui@esprit.tn',
      link: 'mailto:yahya.houaoui@esprit.tn',
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      title: 'Phone',
      value: '+216 94 702 014',
      link: 'tel:+21694702014',
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: 'Location',
      value: 'Tunis, Tunisia',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-gray-900 text-white flex items-center"
      style={{ 
        scrollSnapAlign: 'start',
        paddingTop: '100px',
        paddingBottom: '80px',
        marginTop: '40px'
      }}
    >
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef}>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas 
              to life. I'm always excited to work on new challenges.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-medium">{info.title}</div>
                    <div className="text-lg font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/houaouiyahya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-green-800 font-medium">Message sent successfully!</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white"
                placeholder="your@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white resize-none"
                placeholder="Tell me about your project..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;