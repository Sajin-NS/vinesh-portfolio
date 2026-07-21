"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		projectType: "Branding",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => {
				const copy = { ...prev };
				delete copy[name];
				return copy;
			});
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};
		if (!form.name.trim()) newErrors.name = "Name is required.";
		if (!form.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = "Please enter a valid email address.";
		}
		if (!form.message.trim()) newErrors.message = "Message is required.";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setStatus("loading");

		// Simulate API call for premium user experience
		setTimeout(() => {
			setStatus("success");
			setForm({
				name: "",
				email: "",
				projectType: "Branding",
				message: "",
			});
		}, 1500);
	};

	// Prefilled message for WhatsApp connection
	const whatsappNumber = "971501234567"; // Placeholder UAE number, easy to update
	const prefilledText = encodeURIComponent(
		"Hello Vinesh, I visited your portfolio and would love to connect about a brand/design project!",
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledText}`;

	return (
		<div className="w-full! flex! flex-col! gap-10!">
			<AnimatePresence mode="wait">
				{status === "success" ? (
					<motion.div
						key="success"
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -15 }}
						transition={{ duration: 0.4 }}
						className="border! border-[rgba(242,237,230,0.07)]! bg-card/20! p-10! rounded-lg! text-center! flex! flex-col! items-center! justify-center! gap-6!"
					>
						<div className="w-16! h-16! rounded-full! bg-accent/10! border! border-accent! flex! items-center! justify-center! text-accent! text-3xl! font-semibold!">
							✓
						</div>
						<div>
							<h3 className="text-2xl! font-bold! text-ink! mb-2!">
								Message Sent Successfully
							</h3>
							<p className="text-sm! text-white/50! max-w-sm! mx-auto! leading-relaxed!">
								Thank you for reaching out! Vinesh will review your
								inquiry and get back to you within 24 hours.
							</p>
						</div>
						<button
							onClick={() => setStatus("idle")}
							className="mt-2! uppercase! inline-flex! items-center! justify-center! px-6! py-3! bg-white/10! text-ink! text-xs! font-bold! tracking-[0.14em]! transition-all! duration-300! hover:bg-white/20! cursor-pointer!"
						>
							Send Another Message
						</button>
					</motion.div>
				) : (
					<motion.form
						key="form"
						onSubmit={handleSubmit}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex! flex-col! gap-6!"
					>
						{/* Name Field */}
						<div className="flex! flex-col! gap-2!">
							<label
								htmlFor="name"
								className="text-xs! font-bold! tracking-widest! uppercase! text-white/40!"
							>
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={form.name}
								onChange={handleInputChange}
								className={`w-full! bg-card/30! border! px-5! py-4! text-ink! rounded-lg! outline-none! transition-all! duration-300! text-base! ${
									errors.name
										? "border-accent!"
										: "border-[rgba(242,237,230,0.07)]! focus:border-accent!"
								}`}
								placeholder="Enter your name"
							/>
							{errors.name && (
								<p className="text-xs! text-accent! mt-1!">
									{errors.name}
								</p>
							)}
						</div>

						{/* Email Field */}
						<div className="flex! flex-col! gap-2!">
							<label
								htmlFor="email"
								className="text-xs! font-bold! tracking-widest! uppercase! text-white/40!"
							>
								Email Address
							</label>
							<input
								type="text"
								id="email"
								name="email"
								value={form.email}
								onChange={handleInputChange}
								className={`w-full! bg-card/30! border! px-5! py-4! text-ink! rounded-lg! outline-none! transition-all! duration-300! text-base! ${
									errors.email
										? "border-accent!"
										: "border-[rgba(242,237,230,0.07)]! focus:border-accent!"
								}`}
								placeholder="Enter your email"
							/>
							{errors.email && (
								<p className="text-xs! text-accent! mt-1!">
									{errors.email}
								</p>
							)}
						</div>

						{/* Project Type Field */}
						<div className="flex! flex-col! gap-2!">
							<label
								htmlFor="projectType"
								className="text-xs! font-bold! tracking-widest! uppercase! text-white/40!"
							>
								What are we building?
							</label>
							<div className="relative! w-full!">
								<select
									id="projectType"
									name="projectType"
									value={form.projectType}
									onChange={handleInputChange}
									className="w-full! bg-card/30! border! border-[rgba(242,237,230,0.07)]! px-5! py-4! text-ink! rounded-lg! outline-none! transition-all! duration-300! text-base! appearance-none! focus:border-accent! cursor-pointer!"
								>
									<option value="Branding" className="bg-bg!">
										Branding & Identity
									</option>
									<option value="Web Design" className="bg-bg!">
										Web Design & Development
									</option>
									<option value="Campaign" className="bg-bg!">
										Creative Campaigns
									</option>
									<option value="Consultancy" className="bg-bg!">
										Creative Direction
									</option>
									<option value="Other" className="bg-bg!">
										Other Projects
									</option>
								</select>
								<div className="absolute! right-5! top-1/2! -translate-y-1/2! pointer-events-none! text-white/40! text-sm!">
									▼
								</div>
							</div>
						</div>

						{/* Message Field */}
						<div className="flex! flex-col! gap-2!">
							<label
								htmlFor="message"
								className="text-xs! font-bold! tracking-widest! uppercase! text-white/40!"
							>
								Project Brief
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								value={form.message}
								onChange={handleInputChange}
								className={`w-full! bg-card/30! border! px-5! py-4! text-ink! rounded-lg! outline-none! transition-all! duration-300! text-base! resize-none! ${
									errors.message
										? "border-accent!"
										: "border-[rgba(242,237,230,0.07)]! focus:border-accent!"
								}`}
								placeholder="Describe your project goals or send a quick note..."
							/>
							{errors.message && (
								<p className="text-xs! text-accent! mt-1!">
									{errors.message}
								</p>
							)}
						</div>

						{/* Submit button */}
						<button
							type="submit"
							disabled={status === "loading"}
							className="uppercase! inline-flex! items-center! justify-center! w-full! py-4! bg-accent! text-ink! text-sm! font-bold! tracking-[0.14em]! transition-all! duration-300! hover:bg-[#c94a36]! hover:-translate-y-0.5! cursor-pointer! disabled:opacity-50! disabled:pointer-events-none!"
						>
							{status === "loading" ? "Sending..." : "Submit Inquiry"}
						</button>
					</motion.form>
				)}
			</AnimatePresence>

			{/* Divider */}
			<div className="flex! items-center! gap-4! text-white/20! w-full!">
				<div className="h-px! bg-[rgba(242,237,230,0.07)]! grow!" />
				<span className="text-[10px]! font-bold! uppercase! tracking-widest!">
					Or Connect Instantly
				</span>
				<div className="h-px! bg-[rgba(242,237,230,0.07)]! grow!" />
			</div>

			{/* WhatsApp Button */}
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="uppercase! inline-flex! items-center! justify-center! gap-3! w-full! py-4! bg-[#25d366]/10! border! border-[#25d366]/30! text-[#25d366]! text-sm! font-bold! tracking-[0.14em]! transition-all! duration-300! hover:bg-[#25d366]/20! hover:border-[#25d366]! hover:-translate-y-0.5!"
			>
				<FaWhatsapp className="w-5! h-5!" />
				<span>Chat on WhatsApp</span>
			</a>
		</div>
	);
}
