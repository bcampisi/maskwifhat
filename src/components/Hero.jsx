import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, TrendingUp, HelpCircle } from 'lucide-react';
import TokenCounter from '@/components/TokenCounter';

const Hero = () => {
  const heroImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c742f1a9-3a06-4f31-a1ff-b056f6db4bfb/ab143c13d4053e2eb8445222a7ca4ec2.png";

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">MaskWifHat</span>
              <br />
              <span className="text-white glow-text">It's... A Mask. With a Hat.</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Witness the pinnacle of financial innovation: a digital picture of a hat, but wait, there's MORE! It also has a mask.
              Prepare to have your world (and wallet) mildly amused.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-glow bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold text-lg px-8 py-6 h-auto">
                Acquire This JPEG <Rocket className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/20 font-bold text-lg px-8 py-6 h-auto">
                Why Though? <HelpCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <TokenCounter />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 rounded-full blur-[100px] z-0"></div>
              
              <motion.div 
                className="relative z-10"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              >
                <img   
                  className="w-full max-w-md mx-auto" 
                  alt="The official MaskWifHat coin image: a ski mask wearing a colorful propeller beanie."
                  src={heroImageUrl} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <div className="marquee">
            <div className="marquee-content">
              <div className="flex gap-8 items-center">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="font-bold">Just A MaskWifHat</span>
                    <span className="text-yellow-500">~0.00%</span>
                    <span>|</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;