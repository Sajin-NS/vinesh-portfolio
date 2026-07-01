"use client";

import React, { useState, useEffect } from "react";

interface MobileMenuProps {
	links: { label: string; href: string }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => {
			const nextState = !prev;
			if (nextState) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "";
			}
			return nextState;
		});
	};

	const closeMenu = () => {
		setIsOpen(false);
		document.body.style.overflow = "";
	};

	// Ensure scroll is restored if component unmounts
	useEffect(() => {
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<>
			{/* Burger Button */}
			<button
				className={`menu-btn ${isOpen ? "open" : ""}`}
				onClick={toggleMenu}
				aria-label="Toggle Navigation Menu"
				aria-expanded={isOpen}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			{/* Drawer Panel Overlay */}
			<div
				className={`fixed inset-0 z-40 bg-background backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
					isOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-full pointer-events-none"
				} flex flex-col justify-center items-center overflow-y-auto p-8`}
			>
				<nav className="flex flex-col gap-6 text-center max-w-sm w-full py-12">
					{links.map((link, index) => (
						<a
							key={link.href}
							href={link.href}
							onClick={closeMenu}
							className="text-4xl uppercase font-extrabold tracking-tight text-foreground hover:text-(--accent) transition-all duration-300 hover:scale-105"
							style={{ transitionDelay: `${index * 50}ms` }}
						>
							{link.label}
						</a>
					))}
					<a
						href="#contact"
						onClick={closeMenu}
						className="btn dark mt-8 text-sm px-8 py-3 tracking-widest hover:bg-(--accent) hover:text-white"
					>
						Let’s Connect
					</a>
				</nav>
			</div>
		</>
	);
}
