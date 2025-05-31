import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Twitter, Twitter as Telegram, Twitch as Discord, MessageSquare } from 'lucide-react';

const communityLinks = [
  { 
    name: 'Twitter (Maybe)', 
    icon: <Twitter className="w-6 h-6" />, 
    color: 'bg-[#1DA1F2]',
    url: 'https://twitter.com' 
  },
  { 
    name: 'Telegram (If We Remember)', 
    icon: <Telegram className="w-6 h-6" />, 
    color: 'bg-[#0088cc]',
    url: 'https://telegram.org' 
  },
  { 
    name: 'Discord (For Deep Thoughts)', 
    icon: <Discord className="w-6 h-6" />, 
    color: 'bg-[#5865F2]',
    url: 'https://discord.com' 
  },
  { 
    name: 'Carrier Pigeon Fan Club', 
    icon: <MessageSquare className="w-6 h-6" />, 
    color: 'bg-[#6d28d9]',
    url: '#' 
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Join The "Community" (It's A Vibe)</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Connect with other... individuals... who also appreciate a good hat-mask combo. Or just want to know what's going on. (Spoiler: Not much, it's a picture).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-3xl blur-[50px]"></div>
            <div className="relative z-10">
              <img   
                className="w-full h-auto rounded-3xl shadow-2xl" 
                alt="People pointing and laughing (affectionately?) at the MaskWifHat picture"
                src="https://images.unsplash.com/photo-1656948680472-49d5389664fa" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Stare At The Picture With Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {communityLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} rounded-lg p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.icon}
                    <span className="text-white font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 p-6 glass-effect rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4">Perks of This... Thing</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Exclusive right to say "I was there"</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Early glimpses if we ever change the picture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Vote on... hat colors? Mask styles? The possibilities are... finite.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Directly tell us how absurd this all is</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-6 h-auto text-lg">
                Join the Confusion (Telegram)
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;