"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryClientProps {
	images: string[];
	title: string;
}

export default function GalleryClient({ images, title }: GalleryClientProps) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Simulated aspect ratios to make a dynamic masonry feel with repeated images
	const aspectRatios = ["4/3", "3/4", "1/1", "16/9", "2/3", "4/5"];

	// Keyboard accessibility
	useEffect(() => {
		if (activeIndex === null) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveIndex(null);
			} else if (e.key === "ArrowRight") {
				setActiveIndex((prev) =>
					prev !== null ? (prev + 1) % images.length : null,
				);
			} else if (e.key === "ArrowLeft") {
				setActiveIndex((prev) =>
					prev !== null
						? (prev - 1 + images.length) % images.length
						: null,
				);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex, images.length]);

	return (
		<>
			{/* Masonry multi-column layout */}
			<div className="columns-1! sm:columns-2! lg:columns-3! gap-6! space-y-6!">
				{images.map((img, idx) => {
					const aspect = aspectRatios[idx % aspectRatios.length];
					return (
						<div
							key={idx}
							onClick={() => setActiveIndex(idx)}
							className="break-inside-avoid! mb-6! relative! overflow-hidden! rounded-lg! border! border-[rgba(242,237,230,0.07)]! group! cursor-pointer! w-full!"
						>
							<img
								src={img}
								alt={`${title} Work Showcase ${idx + 1}`}
								style={{ aspectRatio: aspect }}
								className="w-full! h-auto! object-cover! group-hover:scale-105! transition-transform! duration-700! ease-out!"
							/>
							<div className="absolute! inset-0! bg-black/20! group-hover:bg-black/0! transition-colors! duration-500!" />
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
						className="fixed! inset-0! z-200! flex! items-center! justify-center! bg-black/90! backdrop-blur-md! p-4! md:p-8!"
						onClick={() => setActiveIndex(null)}
					>
						{/* Close button */}
						<button
							onClick={() => setActiveIndex(null)}
							aria-label="Close preview"
							className="absolute! top-6! right-6! z-210! w-12! h-12! flex! items-center! justify-center! text-[36px]! text-ink! hover:text-accent! transition-colors! duration-200! bg-transparent! border-none! cursor-pointer!"
						>
							×
						</button>

						{/* Lightbox container */}
						<div
							className="relative! max-w-5xl! w-full! max-h-[80vh]! flex! items-center! justify-center!"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Prev Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null
											? (prev - 1 + images.length) % images.length
											: null,
									)
								}
								aria-label="Previous image"
								className="absolute! -left-4! md:-left-15! z-210! w-10! h-10! md:w-12! md:h-12! flex! items-center! justify-center! text-ink! hover:text-accent! transition-colors! duration-200! bg-black/50! hover:bg-black/80! rounded-full! border! border-[rgba(242,237,230,0.1)]! cursor-pointer! text-xl!"
							>
								‹
							</button>

							{/* Active Image */}
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
								className="relative! overflow-hidden! rounded-lg! border! border-[rgba(242,237,230,0.07)]!"
							>
								<img
									src={images[activeIndex]}
									alt={`${title} Preview ${activeIndex + 1}`}
									className="max-w-full! max-h-[75vh]! object-contain! select-none!"
								/>
							</motion.div>

							{/* Next Button */}
							<button
								onClick={() =>
									setActiveIndex((prev) =>
										prev !== null ? (prev + 1) % images.length : null,
									)
								}
								aria-label="Next image"
								className="absolute! -right-4! md:-right-15! z-210! w-10! h-10! md:w-12! md:h-12! flex! items-center! justify-center! text-ink! hover:text-accent! transition-colors! duration-200! bg-black/50! hover:bg-black/80! rounded-full! border! border-[rgba(242,237,230,0.1)]! cursor-pointer! text-xl!"
							>
								›
							</button>
						</div>

						{/* Counter / Label */}
						<div className="absolute! bottom-6! left-1/2! -translate-x-1/2! z-210! bg-black/40! px-4! py-2! rounded-full! border! border-[rgba(242,237,230,0.07)]! text-sm! font-semibold! tracking-[0.06em]! text-ink/70!">
							{activeIndex + 1} / {images.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
