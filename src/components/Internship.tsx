import React from 'react';
import { Calendar, MapPin, Building, Users, Target, CheckCircle } from 'lucide-react';

const Internship = () => {
  const timelineEvents = [
    {
      date: '05/07/2024',
      title: 'Internship Start',
      description: 'Began internship at SATS, part of Dräxlmaier Group',
      type: 'milestone'
    },
    {
      date: '01/07/2024',
      title: 'Company Discovery',
      description: 'Comprehensive introduction to company culture, values, and automotive industry standards',
      type: 'learning'
    },
    {
      date: '02/07/2024',
      title: 'Initial Team Meeting',
      description: 'Met development team, discussed project scope and established communication channels',
      type: 'collaboration'
    },
    {
      date: '08/07/2024',
      title: 'Domain Analysis Phase',
      description: 'Deep dive into automotive systems, analyzing business requirements and technical specifications',
      type: 'analysis'
    },
    {
      date: '15/07/2024',
      title: 'Power Apps Development',
      description: 'Started building business applications using Microsoft Power Platform',
      type: 'development'
    },
    {
      date: '22/07/2024',
      title: 'Scrum Implementation',
      description: 'Participated in sprint planning, daily standups, and retrospectives',
      type: 'methodology'
    },
    {
      date: '21/08/2024',
      title: 'Internship Completion',
      description: 'Successfully completed internship with comprehensive project delivery',
      type: 'milestone'
    }
  ];

  const achievements = [
    'Developed 3+ business applications using Power Apps',
    'Participated in 8 sprint cycles using Scrum methodology',
    'Collaborated with cross-functional teams of 12+ members',
    'Analyzed automotive domain requirements and specifications',
    'Gained hands-on experience with Microsoft Power Platform',
    'Contributed to process optimization initiatives'
  ];

  const skills = [
    'Power Apps Development',
    'Scrum Methodology',
    'Domain Analysis',
    'Team Collaboration',
    'Business Process Analysis',
    'Microsoft Power Platform'
  ];

  return (
    <section id="internship" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience at SATS (Dräxlmaier Group) - Building real-world solutions in the automotive industry
          </p>
        </div>

        {/* Company Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building className="text-blue-600" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SATS</h3>
                  <p className="text-gray-600">Système Automobile et Technique de Siliana</p>
                  <p className="text-sm text-blue-600 font-medium">Part of Dräxlmaier Group</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-gray-400" size={20} />
                  <span className="text-gray-600">July 5, 2024 - August 21, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="text-gray-600">Siliana, Tunisia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-gray-400" size={20} />
                  <span className="text-gray-600">Software Development Intern</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Internship Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-sm text-blue-600 font-medium mb-2">{event.date}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                      <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-3 ${
                        event.type === 'milestone' ? 'bg-green-100 text-green-800' :
                        event.type === 'development' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'learning' ? 'bg-purple-100 text-purple-800' :
                        event.type === 'collaboration' ? 'bg-orange-100 text-orange-800' :
                        event.type === 'analysis' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <Target className="text-blue-600 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Skills & Technologies</h3>
            <p className="text-gray-600">Technical and professional skills acquired during the internship</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Calendar size={20} />
              Download Internship Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;