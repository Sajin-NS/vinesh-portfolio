"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoGallery() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// 22 actual logos from the public/logo directory
	const logos = [
		{
			id: 1,
			src: "/logo/img1.jpg",
			title: "Identity Mark 1",
			desc: "Selected logo work & brand system",
		},
		{
			id: 2,
			src: "/logo/img2.jpg",
			title: "Identity Mark 2",
			desc: "Selected logo work & brand system",
		},
		{
			id: 3,
			src: "/logo/img3.jpg",
			title: "Identity Mark 3",
			desc: "Selected logo work & brand system",
		},
		{
			id: 4,
			src: "/logo/img4.jpg",
			title: "Identity Mark 4",
			desc: "Selected logo work & brand system",
		},
		{
			id: 5,
			src: "/logo/img5.jpg",
			title: "Identity Mark 5",
			desc: "Selected logo work & brand system",
		},
		{
			id: 6,
			src: "/logo/img6.jpg",
			title: "Identity Mark 6",
			desc: "Selected logo work & brand system",
		},
		{
			id: 7,
			src: "/logo/img7.jpg",
			title: "Identity Mark 7",
			desc: "Selected logo work & brand system",
		},
		{
			id: 8,
			src: "/logo/img8.jpg",
			title: "Identity Mark 8",
			desc: "Selected logo work & brand system",
		},
		{
			id: 9,
			src: "/logo/img9.jpg",
			title: "Identity Mark 9",
			desc: "Selected logo work & brand system",
		},
		{
			id: 10,
			src: "/logo/img10.jpg",
			title: "Identity Mark 10",
			desc: "Selected logo work & brand system",
		},
		{
			id: 11,
			src: "/logo/img11.jpg",
			title: "Identity Mark 11",
			desc: "Selected logo work & brand system",
		},
		{
			id: 12,
			src: "/logo/img12.jpg",
			title: "Identity Mark 12",
			desc: "Selected logo work & brand system",
		},
		{
			id: 13,
			src: "/logo/img13.jpg",
			title: "Identity Mark 13",
			desc: "Selected logo work & brand system",
		},
		{
			id: 14,
			src: "/logo/img14.png",
			title: "Identity Mark 14",
			desc: "Selected logo work & brand system",
		},
		{
			id: 15,
			src: "/logo/img15.png",
			title: "Identity Mark 15",
			desc: "Selected logo work & brand system",
		},
		{
			id: 16,
			src: "/logo/img16.png",
			title: "Identity Mark 16",
			desc: "Selected logo work & brand system",
		},
		{
			id: 17,
			src: "/logo/img17.png",
			title: "Identity Mark 17",
			desc: "Selected logo work & brand system",
		},
		{
			id: 18,
			src: "/logo/img18.png",
			title: "Identity Mark 18",
			desc: "Selected logo work & brand system",
		},
		{
			id: 19,
			src: "/logo/img19.png",
			title: "Identity Mark 19",
			desc: "Selected logo work & brand system",
		},
		{
			id: 20,
			src: "/logo/img20.png",
			title: "Identity Mark 20",
			desc: "Selected logo work & brand system",
		},
		{
			id: 21,
			src: "/logo/img21.png",
			title: "Identity Mark 21",
			desc: "Selected logo work & brand system",
		},
		{
			id: 22,
			src: "/logo/img22.png",
			title: "Identity Mark 22",
			desc: "Selected logo work & brand system",
		},
	];

	// Keyboard navigation support
	useEffect(() => {
		if (activeIndex === null) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveIndex(null);
			} else if (e.key === "ArrowRight") {
				setActiveIndex((prev) =>
					prev !== null ? (prev + 1) % logos.length : null,
				);
			} else if (e.key === "ArrowLeft") {
				setActiveIndex((prev) =>
					prev !== null ? (prev - 1 + logos.length) % logos.length : null,
				);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex, logos.length]);

	return (
		<>
			{/* Full width stacked gallery */}
			<div className="flex! flex-col! gap-8! md:gap-12! w-full!">
				{logos.map((logo, idx) => {
					return (
						<div
							key={logo.id}
							onClick={() => setActiveIndex(idx)}
							className="relative! overflow-hidden! rounded-xl! border! border-[rgba(29,29,31,0.08)]! bg-card! group! cursor-pointer! w-full! transition-all! duration-300! shadow-xs!"
						>
							<div className="relative! w-full! overflow-hidden!">
								<img
									src={logo.src}
									alt={logo.title}
									className="w-full! h-auto! block! group-hover:scale-[1.01]! transition-transform! duration-700! ease-out!"
								/>

								{/* Mini Hover Label */}
								<div className="absolute! bottom-4! left-4! md:bottom-6! md:left-6! z-2! opacity-0! group-hover:opacity-100! transition-all! duration-300! translate-y-2! group-hover:translate-y-0! bg-white/90! border! border-black/10! backdrop-blur-md! px-4! py-2! rounded-md! shadow-sm!">
									<p className="text-xs! md:text-sm! font-extrabold! tracking-widest! uppercase! text-accent!">
										{logo.title}
									</p>
									<p className="text-[10px]! md:text-xs! text-ink/70! mt-0.5!">
										{logo.desc}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{activeIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed! inset-0! z-200! flex! items-center! justify-center! bg-black/95! backdrop-blur-md! p-4! md:p-8!"
						onClick={() => setActiveIndex(null)}
					>
						{/* Close button */}
						<button
							onClick={() => setActiveIndex(null)}
							aria-label="Close preview"
							className="absolute! top-6! right-6! z-210! w-12! h-12! flex! items-center! justify-center! text-[36px]! text-white! hover:text-accent! transition-colors! duration-200! bg-transparent! border-none! cursor-pointer!"
						>
							×
						</button>

						{/* Lightbox container */}
						<div
							className="relative! max-w-4xl! w-full! max-h-[85vh]! flex! items-center! justify-center!"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Prev Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null ? (prev - 1 + logos.length) % logos.length : null,
									)
								}
								aria-label="Previous logo"
								className="absolute! left-2! md:-left-15! z-210! w-10! h-10! md:w-12! md:h-12! flex! items-center! justify-center! text-white! hover:text-accent! transition-colors! duration-200! bg-black/50! hover:bg-black/80! rounded-full! border! border-white/20! cursor-pointer! text-xl!"
							>
								‹
							</button>

							{/* Active Image Container */}
							<div className="flex! flex-col! items-center! gap-4!">
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.96 }}
									transition={{
										duration: 0.35,
										ease: [0.16, 1, 0.3, 1],
									}}
									className="relative! overflow-hidden! rounded-lg! border! border-white/15! bg-card!"
								>
									<img
										src={logos[activeIndex].src}
										alt={logos[activeIndex].title}
										className="max-w-full! max-h-[70vh]! object-contain! select-none!"
									/>
								</motion.div>

								{/* Title & description below image inside lightbox */}
								<div className="text-center! mt-2!">
									<h4 className="text-lg! font-bold! text-white!">
										{logos[activeIndex].title}
									</h4>
									<p className="text-[13px]! text-white/70! mt-1!">
										{logos[activeIndex].desc}
									</p>
								</div>
							</div>

							{/* Next Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null ? (prev + 1) % logos.length : null,
									)
								}
								aria-label="Next logo"
								className="absolute! right-2! md:-right-15! z-210! w-10! h-10! md:w-12! md:h-12! flex! items-center! justify-center! text-white! hover:text-accent! transition-colors! duration-200! bg-black/50! hover:bg-black/80! rounded-full! border! border-white/20! cursor-pointer! text-xl!"
							>
								›
							</button>
						</div>

						{/* Counter */}
						<div className="absolute! bottom-6! left-1/2! -translate-x-1/2! z-210! bg-black/40! px-4! py-2! rounded-full! border! border-white/15! text-sm! font-semibold! tracking-[0.06em]! text-white/80!">
							{activeIndex + 1} / {logos.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
