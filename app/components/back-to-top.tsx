"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: 20 }}
					transition={{ duration: 0.25, ease: "easeOut" }}
					onClick={scrollToTop}
					aria-label="Back to top"
					className="fixed! bottom-6! right-6! z-90! w-12! h-12! rounded-full! bg-card/90! hover:bg-accent! border! border-[rgba(242,237,230,0.15)]! hover:border-accent! text-ink! hover:text-white! shadow-lg! backdrop-blur-md! flex! items-center! justify-center! cursor-pointer! group! transition-all! duration-300!"
				>
					<svg
						className="w-5! h-5! transition-transform! duration-300! group-hover:-translate-y-1!"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
}
