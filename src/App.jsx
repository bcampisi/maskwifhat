import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import BuyNowButton from '@/components/BuyNowButton';
import StarBackground from '@/components/StarBackground';

const App = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toast({
        title: "Behold! MaskWifHat! 🎩🎭",
        description: "It's... exactly what it sounds like. Enjoy the absurdity!",
        duration: 6000,
      });
    }, 2000);
  }, [toast]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarBackground />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Community />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {scrollY > 300 && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <BuyNowButton />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Toaster />
    </div>
  );
};

export default App;