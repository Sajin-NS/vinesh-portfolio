import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { PROJECTS } from "../data";
import GalleryClient from "./gallery-client";

// Dynamic routing static paths generation for Next.js build optimization
export async function generateStaticParams() {
	return PROJECTS.map((project) => ({
		slug: project.case_slug,
	}));
}

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.case_slug === slug);
	if (!project) {
		return {
			title: "Project Not Found — Vinesh Studio",
		};
	}
	return {
		title: `${project.title} — Vinesh Studio`,
		description: project.desc,
	};
}

export default async function ProjectDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const projectIndex = PROJECTS.findIndex((p) => p.case_slug === slug);

	if (projectIndex === -1) {
		notFound();
	}

	const project = PROJECTS[projectIndex];
	const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

	const BORDER = "border-[rgba(242,237,230,0.07)]!";

	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main className="pt-35! md:pt-45!">
				{/* ── HEADER & BACK NAVIGATION ── */}
				<section className="px-6! md:px-10! pb-14! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-360! mx-auto!">
						<Link
							href="/work"
							className="inline-flex! items-center! gap-2! text-white/50! hover:text-accent! transition-colors! duration-300! text-base! font-semibold! tracking-[0.06em]! mb-10! group!"
						>
							<svg
								className="w-4! h-4! transition-transform! duration-300! group-hover:-translate-x-1!"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2.5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							<span>Back to Work</span>
						</Link>

						<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-6! items-start!">
							<span className="text-xl! font-bold! text-accent! tracking-widest! capitalize! pt-2!">
								{project.num}
							</span>
							<div>
								<span className="text-[14px]! text-white/40! font-bold! tracking-widest! uppercase! block! mb-4!">
									{project.subtitle}
								</span>
								<h1 className="text-[clamp(44px,7vw,100px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
									{project.title}
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* ── PROJECT DETAILS ── */}
				<section className={`py-20! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-12! items-start!">
						<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
							The Overview
						</span>
						<div>
							<p className="text-[clamp(18px,2.4vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-225!">
								{project.desc}
							</p>
						</div>
					</div>
				</section>

				{/* ── GALLERY MASONRY WORK ── */}
				<section className={`py-20! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto!">
						<div className="mb-14!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! block! mb-2!">
								The Case Study
							</span>
							<h2 className="text-[32px]! font-extrabold! tracking-[-0.02em]! text-ink!">
								Visual Architecture &amp; Delivery
							</h2>
						</div>

						<GalleryClient
							images={project.gallery}
							title={project.title}
						/>
					</div>
				</section>

				{/* ── NEXT PROJECT TRANSITION CARD ── */}
				<section className="py-30! px-6! md:px-10! bg-card/20! relative! overflow-hidden! group! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-360! mx-auto! flex! flex-col! items-center! text-center! relative! z-2!">
						<span className="text-xl! font-bold! text-accent! tracking-widest! uppercase! mb-4!">
							Up Next
						</span>
						<h3 className="text-[clamp(40px,6vw,90px)]! font-extrabold! leading-[0.93]! tracking-[-0.03em]! capitalize! text-ink! group-hover:text-accent! transition-colors! duration-500! max-w-225! mb-8!">
							{nextProject.title}
						</h3>
						<span className="inline-flex! items-center! gap-3! text-[16px]! font-bold! tracking-widest! uppercase! border-b-2! border-accent! pb-2! group-hover:gap-5! transition-all! duration-300!">
							<span>View Next Case Study</span>
							<Link
								href={`/work/${nextProject.case_slug}`}
								className="absolute! inset-0! z-1! cursor-pointer!"
							/>
							<svg
								className="w-5! h-5! text-accent!"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="3"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</span>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
