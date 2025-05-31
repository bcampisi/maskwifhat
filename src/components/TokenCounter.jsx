
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TokenCounter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 69420;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 10; // update every 10ms
    const steps = duration / interval;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="text-gray-400 text-sm mb-1">Holders Count</p>
      <div className="flex items-end">
        <span className="text-2xl font-bold gradient-text">{count.toLocaleString()}</span>
        <span className="text-green-500 text-sm ml-2">+12.5%</span>
      </div>
    </motion.div>
  );
};

export default TokenCounter;
