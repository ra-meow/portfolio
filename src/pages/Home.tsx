import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const skills = ['Web Developer', 'Frontend Specialist', 'UI/UX Designer', 'React Expert'];
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentSkill = skills[skillIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentSkill.length) {
        typingSpeed = 1500; // Pause at the end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingSpeed = 500; // Pause before typing next
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
    
    // No need for cleanup as the component doesn't unmount in this simple demo
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-blue-600">Arjay Amatorio</span>
            </h1>
            <div className="flex justify-center mb-8">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
                I'm a <span ref={typingRef} className="text-blue-600"></span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              I build beautiful, functional websites and applications with modern technologies
              and a focus on user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a range of services to help businesses and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full w-fit mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Design</h3>
              <p className="text-gray-600 mb-6">
                Creative and responsive designs that look great on all devices and provide an exceptional user experience.
              </p>
              <Link 
                to="/contact" 
                className="text-blue-600 font-medium inline-flex items-center group"
              >
                Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full w-fit mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern frameworks and technologies for optimal performance.
              </p>
              <Link 
                to="/contact" 
                className="text-blue-600 font-medium inline-flex items-center group"
              >
                Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full w-fit mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">CMS Integration</h3>
              <p className="text-gray-600 mb-6">
                Integration with content management systems to make website updates easy and accessible.
              </p>
              <Link 
                to="/contact" 
                className="text-blue-600 font-medium inline-flex items-center group"
              >
                Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md bg-white">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="E-commerce Website" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">E-commerce Website</h3>
                    <p className="text-gray-200 text-sm">React, Node.js, MongoDB</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">E-commerce Website</h3>
                <p className="text-gray-600 mb-4">A full-featured e-commerce platform with product management, cart, and checkout.</p>
                <Link 
                  to="/projects" 
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group overflow-hidden rounded-lg shadow-md bg-white">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Portfolio Website" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Portfolio Website</h3>
                    <p className="text-gray-200 text-sm">React, Tailwind CSS</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Portfolio Website</h3>
                <p className="text-gray-600 mb-4">A clean and modern portfolio website for a professional photographer.</p>
                <Link 
                  to="/projects" 
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md bg-white">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Task Management App" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Task Management App</h3>
                    <p className="text-gray-200 text-sm">React, Firebase</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Task Management App</h3>
                <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates.</p>
                <Link 
                  to="/projects" 
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="btn-primary"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;