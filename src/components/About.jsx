import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Smile, Meh } from 'lucide-react';

const features = [
	{
		icon: <Shield className="w-6 h-6 text-purple-500" />,
		title: 'Sorta Community-Ish',
		description:
			'Someone, somewhere, probably made this. Or maybe it was an AI. Who knows?',
	},
	{
		icon: <Zap className="w-6 h-6 text-pink-500" />,
		title: 'Exists Digitally',
		description:"It's on the internet. So, technically, it's fast... to look at. On your screen.",
	},
	{
		icon: <Smile className="w-6 h-6 text-yellow-500" />,
		title: 'Peak Meme (allegedly)',
		description: "It's a hat. And a mask. If you don't get it, that's okay, neither do we. But it's *art*.",
	},
	{
		icon: <Meh className="w-6 h-6 text-blue-500" />,
		title: 'Ecosystem? More like Echo-system',
		description:'Join a rapidly... existing... collection of pixels. The future is... a picture.',
	},
];

const About = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section id="about" className="py-20 relative">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
						What IS MaskWifHat (Seriously)?
					</h2>
					<p className="text-gray-300 max-w-3xl mx-auto text-lg">
						Look, we're not gonna lie. It's literally a picture of a hat wearing a
						mask. We spent a whole afternoon on this. Groundbreaking, we know. The
						utility? It makes you chuckle. Or question reality. Same diff.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 mb-20">
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
								alt="A deep philosophical representation of... a hat and a mask"
								src="https://images.unsplash.com/photo-1649325898354-fcae26b749fc"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-6 text-white">
							The "Profound" Story of MaskWifHat
						</h3>
						<p className="text-gray-300 mb-6">
							One day, someone thought, "What if a hat... also wore a mask?" And
							then, after much deliberation (probably over pizza), MaskWifHat was
							born. It's the hero we didn't ask for, but got anyway.
						</p>
						<p className="text-gray-300 mb-6">
							The name? We just smashed "Mask" and "Wif Hat" together. Genius,
							right? It’s so random, it’s almost… intentional? Don't think too hard
							about it. We didn't.
						</p>
						<p className="text-gray-300">
							Unlike other meme coins that promise the moon, we promise... well,
							this picture. Our roadmap is to keep showing you this picture. Maybe
							we'll change the hat color one day. Big plans!
						</p>
					</motion.div>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="gradient-border"
						>
							<div className="p-6 h-full flex flex-col">
								<div className="bg-black/40 rounded-full w-12 h-12 flex items-center justify-center mb-4">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold mb-3 text-white">
									{feature.title}
								</h3>
								<p className="text-gray-300 flex-grow">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;