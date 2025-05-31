import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Percent, Image, Bug as Question } from 'lucide-react';

const tokenomicsData = [
  { name: 'Pixels for the Hat', percentage: 40, color: '#a855f7', icon: <Image className="w-5 h-5" /> },
  { name: 'Pixels for the Mask', percentage: 30, color: '#ec4899', icon: <Box className="w-5 h-5" /> },
  { name: 'Marketing (Showing People the Picture)', percentage: 20, color: '#3b82f6', icon: <Percent className="w-5 h-5" /> },
  { name: '¯\\_(ツ)_/¯', percentage: 10, color: '#ef4444', icon: <Question className="w-5 h-5" /> }
];

const Tokenomics = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const segments = tokenomicsData.map((item, index) => {
    const startAngle = index === 0 ? 0 : tokenomicsData
      .slice(0, index)
      .reduce((sum, segment) => sum + segment.percentage, 0) * 3.6;
    
    const endAngle = startAngle + item.percentage * 3.6;
    
    return {
      ...item,
      startAngle,
      endAngle
    };
  });

  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">"Tokenomics" (aka How We Split The Pixels)</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We've meticulously planned how to distribute the... uh... value. It's mostly about ensuring the hat and mask are well-represented. And some for... other stuff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="token-chart">
              {segments.map((segment, index) => {
                const isHovered = hoveredSegment === index;
                const midAngle = (segment.startAngle + segment.endAngle) / 2;
                const midAngleRad = (midAngle - 90) * (Math.PI / 180);
                
                const radius = isHovered ? 120 : 110;
                
                return (
                  <motion.div
                    key={index}
                    className="token-chart-segment"
                    style={{
                      width: radius * 2,
                      height: radius * 2,
                      borderRadius: '50%',
                      background: segment.color,
                      clipPath: `conic-gradient(from ${segment.startAngle}deg, ${segment.color} 0deg ${segment.percentage * 3.6}deg, transparent ${segment.percentage * 3.6}deg 360deg)`,
                      left: 150 - radius,
                      top: 150 - radius,
                      zIndex: isHovered ? 10 : 1
                    }}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                    whileHover={{ scale: 1.05 }}
                  />
                );
              })}
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-full w-32 h-32 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Total Pixels</p>
                  <p className="gradient-text font-bold text-xl">Many</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Pixel Allocation Strategy</h3>
              
              {tokenomicsData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="gradient-border"
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <span className="text-white font-bold">{item.percentage}%</span>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-8 p-6 glass-effect rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4">Picture Details</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Name:</span>
                    <span className="text-white font-medium">MaskWifHat (Still just a picture)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Symbol:</span>
                    <span className="text-white font-medium">$MASKHAT (For the picture)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Blockchain:</span>
                    <span className="text-white font-medium">Your Imagination (and Ethereum, maybe)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Tax:</span>
                    <span className="text-white font-medium">0% on looking, 100% on understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;