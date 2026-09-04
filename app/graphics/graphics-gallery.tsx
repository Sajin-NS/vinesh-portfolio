"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GraphicsGallery() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const graphics = [
		{
			id: 1,
			src: "/graphic/img1.jpg",
			title: "Graphic Work 1",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 2,
			src: "/graphic/img2.jpg",
			title: "Graphic Work 2",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 3,
			src: "/graphic/img3.jpg",
			title: "Graphic Work 3",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 4,
			src: "/graphic/img4.jpg",
			title: "Graphic Work 4",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 5,
			src: "/graphic/img5.jpg",
			title: "Graphic Work 5",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 6,
			src: "/graphic/img6.jpg",
			title: "Graphic Work 6",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 7,
			src: "/graphic/img7.jpg",
			title: "Graphic Work 7",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 8,
			src: "/graphic/img8.jpg",
			title: "Graphic Work 8",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 9,
			src: "/graphic/img9.jpg",
			title: "Graphic Work 9",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 10,
			src: "/graphic/img10.jpg",
			title: "Graphic Work 10",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 11,
			src: "/graphic/img11.jpg",
			title: "Graphic Work 11",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 12,
			src: "/graphic/img12.jpg",
			title: "Graphic Work 12",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 13,
			src: "/graphic/img13.jpg",
			title: "Graphic Work 13",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 14,
			src: "/graphic/img14.jpg",
			title: "Graphic Work 14",
			desc: "Selected Graphics work & brand system",
		},
		{
			id: 15,
			src: "/graphic/img15.jpg",
			title: "Graphic Work 15",
			desc: "Selected Graphics work & brand system",
		},
	];

	useEffect(() => {
		if (activeIndex === null) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveIndex(null);
			} else if (e.key === "ArrowRight") {
				setActiveIndex((prev) =>
					prev !== null ? (prev + 1) % graphics.length : null,
				);
			} else if (e.key === "ArrowLeft") {
				setActiveIndex((prev) =>
					prev !== null
						? (prev - 1 + graphics.length) % graphics.length
						: null,
				);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex, graphics.length]);

	return (
		<>
			{/* Full width stacked gallery */}
			<div className="flex! flex-col! gap-8! md:gap-12! w-full!">
				{graphics.map((item, idx) => (
					<div
						key={item.id}
						onClick={() => setActiveIndex(idx)}
						className="relative! overflow-hidden! rounded-xl! border! border-[rgba(29,29,31,0.08)]! bg-card! group! cursor-pointer! w-full! transition-all! duration-300! shadow-xs!"
					>
						<div className="relative! w-full! overflow-hidden!">
							<img
								src={item.src}
								alt={item.title}
								className="w-full! h-auto! block! group-hover:scale-[1.01]! transition-transform! duration-700! ease-out!"
							/>

							{/* Mini Hover Label */}
							<div className="absolute! bottom-4! left-4! md:bottom-6! md:left-6! z-2! opacity-0! group-hover:opacity-100! transition-all! duration-300! translate-y-2! group-hover:translate-y-0! bg-white/90! border! border-black/10! backdrop-blur-md! px-4! py-2! rounded-md! shadow-sm!">
								<p className="text-xs! md:text-sm! font-extrabold! tracking-widest! uppercase! text-accent!">
									{item.title}
								</p>
								<p className="text-[10px]! md:text-xs! text-ink/70! mt-0.5!">
									{item.desc}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{activeIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
						onClick={() => setActiveIndex(null)}
					>
						{/* Close button */}
						<button
							onClick={() => setActiveIndex(null)}
							aria-label="Close preview"
							className="absolute top-6 right-6 z-[210] w-12 h-12 flex items-center justify-center text-[36px] text-white hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
						>
							×
						</button>

						{/* Lightbox container */}
						<div
							className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Prev Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null
											? (prev - 1 + graphics.length) %
												graphics.length
											: null,
									)
								}
								aria-label="Previous image"
								className="absolute left-2 md:-left-15 z-[210] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/80 rounded-full border border-white/20 cursor-pointer text-xl"
							>
								‹
							</button>

							{/* Active Image Container */}
							<div className="flex flex-col items-center gap-4">
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.96 }}
									transition={{
										duration: 0.35,
										ease: [0.16, 1, 0.3, 1],
									}}
									className="relative overflow-hidden rounded-lg border border-white/15 bg-card"
								>
									<img
										src={graphics[activeIndex].src}
										alt={graphics[activeIndex].title}
										className="max-w-full max-h-[70vh] object-contain select-none"
									/>
								</motion.div>

								<div className="text-center mt-2">
									<h4 className="text-lg font-bold text-white">
										{graphics[activeIndex].title}
									</h4>
									<p className="text-[13px] text-white/70 mt-1">
										{graphics[activeIndex].desc}
									</p>
								</div>
							</div>

							{/* Next Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null
											? (prev + 1) % graphics.length
											: null,
									)
								}
								aria-label="Next image"
								className="absolute right-2 md:-right-15 z-[210] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/80 rounded-full border border-white/20 cursor-pointer text-xl"
							>
								›
							</button>
						</div>

						{/* Counter */}
						<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[210] bg-black/40 px-4 py-2 rounded-full border border-white/15 text-sm font-semibold tracking-[0.06em] text-white/80">
							{activeIndex + 1} / {graphics.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
