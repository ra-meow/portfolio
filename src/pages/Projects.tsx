import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  image: string;
  link: string;
  github: string;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-featured e-commerce platform with product management, cart, and checkout functionality.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'web',
      technologies: ['React', 'Tailwind CSS'],
      description: 'A clean and modern portfolio website for a professional photographer.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'app',
      technologies: ['React', 'Firebase'],
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'app',
      technologies: ['JavaScript', 'Weather API'],
      description: 'An interactive weather dashboard that displays current and forecasted weather data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A responsive website for a local restaurant with menu, reservations, and location information.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'app',
      technologies: ['React Native', 'Node.js'],
      description: 'A mobile app that allows users to track workouts, set goals, and monitor progress.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      github: '#',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  return (
    <div className="pt-32 pb-20">
      {/* Projects Header */}
      <section className="py-8 mb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Here's a selection of my recent work. Each project represents a unique challenge
              and showcases different aspects of my skills and expertise.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('web')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'web' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Websites
              </button>
              <button 
                onClick={() => setFilter('app')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'app' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Applications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm">{project.technologies.join(', ')}</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.link} 
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition"
                        aria-label="Visit live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-blue-600 font-medium inline-flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 mt-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always looking for interesting projects to work on. If you have a project 
              that you'd like to discuss, feel free to get in touch.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;