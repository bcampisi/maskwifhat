
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const BuyNowButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className="btn-glow bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-6 py-6 h-auto rounded-full shadow-lg">
        <Rocket className="mr-2 h-5 w-5" />
        Buy Now
      </Button>
    </motion.div>
  );
};

export default BuyNowButton;
