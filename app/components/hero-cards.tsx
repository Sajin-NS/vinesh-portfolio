"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardData {
	id: string;
	title: string;
	gradient: string;
	glowColor: string;
	rotation: number;
	className: string;
	zIndex: number;
	delay: number;
}

const CARDS: CardData[] = [
	{
		id: "brand-identity",
		title: "BRAND IDENTITY",
		gradient:
			"linear-gradient(145deg, rgba(74, 38, 21, 0.95) 0%, rgba(163, 82, 44, 0.85) 50%, rgba(224, 122, 72, 0.75) 100%)",
		glowColor: "rgba(224, 122, 72, 0.35)",
		rotation: 6,
		className: "w-[200px] sm:w-[245px] h-[190px] sm:h-[235px] top-0 right-0 sm:right-2",
		zIndex: 10,
		delay: 0.1,
	},
	{
		id: "digital-product",
		title: "DIGITAL PRODUCT",
		gradient:
			"linear-gradient(145deg, rgba(17, 34, 51, 0.95) 0%, rgba(32, 58, 86, 0.9) 50%, rgba(58, 93, 132, 0.8) 100%)",
		glowColor: "rgba(58, 93, 132, 0.4)",
		rotation: -7,
		className: "w-[175px] sm:w-[210px] h-[165px] sm:h-[195px] top-12 sm:top-14 left-0 sm:left-2",
		zIndex: 20,
		delay: 0.2,
	},
	{
		id: "campaigns",
		title: "CAMPAIGNS",
		gradient:
			"linear-gradient(145deg, rgba(15, 36, 26, 0.95) 0%, rgba(40, 79, 58, 0.88) 50%, rgba(76, 124, 96, 0.78) 100%)",
		glowColor: "rgba(76, 124, 96, 0.35)",
		rotation: 3,
		className: "w-[195px] sm:w-[235px] h-[185px] sm:h-[220px] bottom-4 sm:bottom-6 right-2 sm:right-4",
		zIndex: 15,
		delay: 0.3,
	},
	{
		id: "ai-visuals",
		title: "AI VISUALS",
		gradient:
			"linear-gradient(145deg, rgba(59, 28, 18, 0.95) 0%, rgba(140, 67, 34, 0.88) 50%, rgba(196, 104, 53, 0.78) 100%)",
		glowColor: "rgba(196, 104, 53, 0.35)",
		rotation: 7,
		className: "w-[165px] sm:w-[195px] h-[155px] sm:h-[185px] bottom-0 left-4 sm:left-8",
		zIndex: 30,
		delay: 0.4,
	},
];

export default function HeroCards() {
	return (
		<div className="relative w-[340px] sm:w-[410px] h-[440px] sm:h-[500px] mx-auto select-none p-2">
			{/* Background ambient lighting */}
			<div className="absolute inset-0 bg-radial from-accent/15 via-transparent to-transparent blur-3xl pointer-events-none" />

			<div className="relative w-full h-full">
				{CARDS.map((card) => (
					<motion.div
						key={card.id}
						initial={{ opacity: 0, y: 30, rotate: card.rotation }}
						animate={{ opacity: 1, y: 0, rotate: card.rotation }}
						transition={{
							duration: 0.7,
							delay: card.delay,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
						whileHover={{
							scale: 1.06,
							rotate: card.rotation * 0.4,
							zIndex: 50,
							transition: { duration: 0.25 },
						}}
						style={{
							background: card.gradient,
							boxShadow: `0 20px 40px -10px ${card.glowColor}, inset 0 1px 1px rgba(255,255,255,0.25)`,
							zIndex: card.zIndex,
						}}
						className={`absolute rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/15 flex flex-col justify-end overflow-hidden backdrop-blur-xs cursor-pointer ${card.className}`}
					>
						{/* Soft light orb effect inside card */}
						<div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/20 blur-xl pointer-events-none" />
						<div className="absolute top-4 left-6 w-14 h-14 rounded-full bg-amber-200/10 blur-lg pointer-events-none" />

						{/* Subtle card grid texture lines */}
						<div
							className="absolute inset-0 opacity-15 pointer-events-none"
							style={{
								backgroundImage:
									"radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
								backgroundSize: "14px 14px",
							}}
						/>

						{/* Badge Pill */}
						<div className="relative z-10 self-start bg-white/90 backdrop-blur-md border border-black/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-xs">
							<span className="text-[10px] sm:text-xs font-extrabold tracking-wider sm:tracking-widest text-[#1D1D1F] uppercase">
								{card.title}
							</span>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

