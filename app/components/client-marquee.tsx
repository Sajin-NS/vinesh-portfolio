"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const logos = [
	// TOYOTA
	<div className="flex! items-center! gap-2! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<span className="text-[22px]! font-extrabold! tracking-[0.08em]! uppercase! font-sans">
			TOYOTA
		</span>
	</div>,
	// NEW CAL METALS
	<div className="flex! items-center! gap-3! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<svg
			className="w-8! h-8!"
			viewBox="0 0 40 40"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
		>
			<circle cx="20" cy="20" r="18" />
			<path d="M13 27V13l14 14V13" />
		</svg>
		<div className="flex! flex-col! leading-[1.05]! text-left!">
			<span className="text-[13px]! font-extrabold! tracking-[0.08em]! uppercase!">
				NEW CAL
			</span>
			<span className="text-[9px]! font-bold! opacity-60! tracking-[0.12em]! uppercase!">
				METALS INC.
			</span>
		</div>
	</div>,
	// PROOF
	<div className="flex! items-center! gap-1! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<span className="text-[28px]! font-light! tracking-[0.15em]! lowercase! font-serif">
			proof
		</span>
	</div>,
	// CLOUD PATROL
	<div className="flex! items-center! gap-3! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<svg
			className="w-8! h-8!"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
			<path d="M9.5 10l2.5 3 4.5-5" />
		</svg>
		<span className="text-[14px]! font-black! tracking-wider! uppercase! font-mono">
			CLOUD PATROL
		</span>
	</div>,
	// CLOUD VAPORY
	<div className="flex! items-center! gap-2! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<svg
			className="w-9! h-9!"
			viewBox="0 0 40 40"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
		>
			<circle cx="20" cy="20" r="16" />
			<path d="M20 4c4 4.5 6 9.5 6 16s-2 11.5-6 16" />
			<path d="M20 4c-4 4.5-6 9.5-6 16s2 11.5 6 16" />
			<path d="M4 20h32" />
		</svg>
		<div className="flex! flex-col! leading-none! text-left!">
			<span className="text-[12px]! font-extrabold! tracking-[0.15em]! uppercase!">
				CLOUD
			</span>
			<span className="text-[11px]! font-bold! opacity-65! tracking-[0.18em]! uppercase! mt-0.5!">
				VAPORY
			</span>
		</div>
	</div>,
	// FIRESTORM
	<div className="flex! items-center! gap-2! text-white/30! hover:text-white/80! transition-colors! duration-300!">
		<svg className="w-7! h-7!" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2C11.5 2.1 8 6.5 8 10c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3.5-3.5-7.9-4-8zm0 13.5c-3.5 0-6.5 2.5-6.5 6.5h13c0-4-3-6.5-6-6.5z" />
		</svg>
		<span className="text-[15px]! font-black! tracking-wider! uppercase!">
			FIRE STORM
		</span>
	</div>,
];

export default function ClientMarquee() {
	const marqueeVariants: Variants = {
		animate: {
			x: [0, "-100%"],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 28,
					ease: "linear",
				},
			},
		},
	};

	return (
		<div className="overflow-hidden! flex! w-full! py-6! relative!">
			{/* Fade overlays */}
			<div className="absolute! left-0! top-0! bottom-0! w-24! bg-linear-to-r! from-bg! to-transparent! z-10! pointer-events-none!" />
			<div className="absolute! right-0! top-0! bottom-0! w-24! bg-linear-to-l! from-bg! to-transparent! z-10! pointer-events-none!" />

			<div className="flex! whitespace-nowrap! min-w-full!">
				<motion.div
					className="flex! gap-24! shrink-0! items-center! justify-around! px-12!"
					style={{ minWidth: "100%" }}
					variants={marqueeVariants}
					animate="animate"
				>
					{logos.map((logo, i) => (
						<div
							key={i}
							className="flex! items-center! justify-center! select-none!"
						>
							{logo}
						</div>
					))}
				</motion.div>
				<motion.div
					className="flex! gap-24! shrink-0! items-center! justify-around! px-12!"
					style={{ minWidth: "100%" }}
					variants={marqueeVariants}
					animate="animate"
				>
					{logos.map((logo, i) => (
						<div
							key={`second-${i}`}
							className="flex! items-center! justify-center! select-none!"
						>
							{logo}
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
