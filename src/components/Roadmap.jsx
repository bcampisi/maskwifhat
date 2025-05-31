import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Coffee, Edit3, Image, Bug as Question } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Phase 1: The Idea',
    title: 'Someone Drew a Hat With a Mask',
    items: [
      { text: 'Acquire drawing implement (crayon?)', completed: true },
      { text: 'Draw hat', completed: true },
      { text: 'Draw mask on hat', completed: true },
      { text: 'Stare at it, bewildered', completed: true }
    ],
    date: 'Yesterday Afternoon'
  },
  {
    phase: 'Phase 2: "Innovation"',
    title: 'Put It On The Internet',
    items: [
      { text: 'Scan drawing (or take blurry photo)', completed: true },
      { text: 'Upload to obscure server', completed: true },
      { text: 'Tell two friends (they were confused)', completed: false },
      { text: 'Make this website', completed: false }
    ],
    date: 'This Morning'
  },
  {
    phase: 'Phase 3: World Domination?',
    title: 'Convince People It Means Something',
    items: [
      { text: 'Add more buzzwords to website', completed: false },
      { text: 'Maybe change hat color (radical!)', completed: false },
      { text: 'Consider adding shoes to the mask?', completed: false },
      { text: 'Nap', completed: false }
    ],
    date: 'Tomorrow, Probably'
  },
  {
    phase: 'Phase 4: The Legacy',
    title: 'It Remains A Picture Of A Hat With A Mask',
    items: [
      { text: 'People vaguely remember it', completed: false },
      { text: 'Art historians debate its "meaning"', completed: false },
      { text: 'The original crayon drawing is lost', completed: false },
      { text: 'Still just a picture', completed: false }
    ],
    date: 'The Distant Future'
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our "Roadmap" (A Series of Events)</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We've sketched out a highly ambitious plan. It mostly involves keeping the picture online and maybe, just maybe, thinking about it occasionally.
          </p>
        </motion.div>

        <div className="relative">
          <div className="roadmap-line"></div>
          
          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-md">
                      <div className="gradient-border">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                            <span className="text-purple-400 text-sm font-medium">{item.date}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-4">{item.title}</h4>
                          <ul className="space-y-3">
                            {item.items.map((listItem, i) => (
                              <li key={i} className="flex items-center gap-3">
                                {listItem.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-400" />
                                )}
                                <span className={`${listItem.completed ? 'text-white' : 'text-gray-400'}`}>
                                  {listItem.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center items-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      {index === 0 && <Edit3 className="w-8 h-8 text-white" />}
                      {index === 1 && <Coffee className="w-8 h-8 text-white" />}
                      {index === 2 && <Question className="w-8 h-8 text-white" />}
                      {index === 3 && <Image className="w-8 h-8 text-white" />}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;