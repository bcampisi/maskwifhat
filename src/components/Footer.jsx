import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Twitter as Telegram, Twitch as Discord, Github, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl gradient-text">MaskWifHat</span>
            </div>
            <p className="text-gray-400 mb-4">
              Still just a picture of a hat with a mask. But hey, it's *our* picture.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Telegram className="w-5 h-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Discord className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <HelpCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <p className="text-white font-bold mb-4">Navigational Aids</p>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">The Picture</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About The Picture</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Picture Pixels</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Picture's Future</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Picture Fans</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <p className="text-white font-bold mb-4">"Resources"</p>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Doodle Paper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Self-Audit (Looks Fine!)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructions (Stare at it)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ (Q: Why? A: Why not?)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog (Musings on Hats)</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <p className="text-white font-bold mb-4">The Fine Print (Probably)</p>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms (It's a picture)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy (Your secrets are safe)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer (Don't take this seriously)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy (We like cookies)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MaskWifHat. It is what it is.
          </p>
          <p className="text-gray-400 text-sm">
            Crafted with maximum irony and a dash of 🤷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;