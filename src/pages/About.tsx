import React from 'react';
import { Code, Layout, Database, Server, Monitor, Smartphone, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      {/* About Intro */}
      <section className="py-8 mb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/31928780/pexels-photo-31928780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Arjay Amatorio" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Hi, I'm Arjay Amatorio</h2>
                <p className="text-gray-700 mb-4">
                  I'm a passionate web developer with over 5 years of experience creating 
                  beautiful, functional websites and applications. I specialize in front-end 
                  development with React and have a strong background in UI/UX design.
                </p>
                <p className="text-gray-700 mb-6">
                  My journey in web development began when I was studying computer science 
                  and discovered my passion for creating interactive user experiences. Since then, 
                  I've worked with various clients from startups to established businesses, 
                  helping them build their online presence.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="btn-primary"
                  >
                    Download Resume
                  </a>
                  <Link 
                    to="/contact" 
                    className="btn-secondary"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4">
                    <Monitor size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">HTML & CSS</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">JavaScript</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">React</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Tailwind CSS</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mr-4">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Backend Development</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Node.js</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Express.js</span>
                      <span className="text-gray-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">MongoDB</span>
                      <span className="text-gray-600">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">API Development</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Skills */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center">Additional Skills</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full mx-auto mb-3 w-fit">
                    <Layout size={20} />
                  </div>
                  <p className="font-medium">UI/UX Design</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full mx-auto mb-3 w-fit">
                    <Smartphone size={20} />
                  </div>
                  <p className="font-medium">Responsive Design</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full mx-auto mb-3 w-fit">
                    <Database size={20} />
                  </div>
                  <p className="font-medium">Database Design</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full mx-auto mb-3 w-fit">
                    <Award size={20} />
                  </div>
                  <p className="font-medium">Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Work Experience */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BookOpen size={20} className="mr-2 text-blue-600" /> Work Experience
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2021 - Present</span>
                      <h4 className="text-lg font-bold mb-1">Senior Web Developer</h4>
                      <p className="text-gray-600 mb-1">TechSolutions Inc.</p>
                      <p className="text-gray-700">
                        Leading frontend development for multiple web applications using React, 
                        TypeScript, and Tailwind CSS. Collaborating with design and backend teams.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2018 - 2021</span>
                      <h4 className="text-lg font-bold mb-1">Web Developer</h4>
                      <p className="text-gray-600 mb-1">CreativeMinds Agency</p>
                      <p className="text-gray-700">
                        Developed responsive websites for clients across various industries.
                        Implemented modern frontend technologies and best practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2016 - 2018</span>
                      <h4 className="text-lg font-bold mb-1">Junior Developer</h4>
                      <p className="text-gray-600 mb-1">WebWorks Digital</p>
                      <p className="text-gray-700">
                        Started as an intern and grew into a full-time role. Focused on HTML, CSS, 
                        and JavaScript development for small business websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award size={20} className="mr-2 text-blue-600" /> Education
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2018 - 2020</span>
                      <h4 className="text-lg font-bold mb-1">Master's in Computer Science</h4>
                      <p className="text-gray-600 mb-1">Stanford University</p>
                      <p className="text-gray-700">
                        Specialized in Human-Computer Interaction and Web Technologies.
                        Graduate thesis on optimizing user interfaces for accessibility.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2014 - 2018</span>
                      <h4 className="text-lg font-bold mb-1">Bachelor's in Computer Science</h4>
                      <p className="text-gray-600 mb-1">University of California, Berkeley</p>
                      <p className="text-gray-700">
                        Graduated with honors. Participated in multiple hackathons and 
                        web development competitions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 mb-1 block">2021 - 2022</span>
                      <h4 className="text-lg font-bold mb-1">UX Design Certification</h4>
                      <p className="text-gray-600 mb-1">Google</p>
                      <p className="text-gray-700">
                        Comprehensive course covering the design thinking process, 
                        user research, wireframing, prototyping, and usability testing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Work Together?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
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

export default About;