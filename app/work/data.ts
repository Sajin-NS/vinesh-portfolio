export interface Project {
	case_slug: string;
	num: string;
	emoji: string;
	title: string;
	subtitle: string;
	desc: string;
	gallery: string[];
}

export const PROJECTS: Project[] = [
	{
		case_slug: "mashroob",
		num: "Project 1",
		emoji: "⚡",
		title: "Mashroob App",
		subtitle: "Concept - Branding",
		desc: "Led complete creative vision for a luxury sports lounge concept that achieved rapid brand recognition in the UAE market within 3 months. Strategic creative decisions drove significant footfall and hospitality revenue through bold brand positioning and immersive campaign execution.",
		gallery: [
			"/mashroob/img1.gif",
			"/mashroob/img2.jpg",
			"/mashroob/img3.png",
			"/mashroob/img4.gif",
			"/mashroob/img5.jpg",
			"/mashroob/img6.png",
			"/mashroob/img7.jpg",
			"/mashroob/img8.png",
			"/mashroob/img9.jpg",
			"/mashroob/img10.png",
			"/mashroob/img11.jpg",
			"/mashroob/img12.jpg",
			"/mashroob/img13.jpg",
			"/mashroob/img14.jpg",
			"/mashroob/img15.jpg",
		],
	},
	{
		case_slug: "eleven-kicks",
		num: "Project 2",
		emoji: "🌿",
		title: "Eleven11Kicks.com",
		subtitle: "Concept - Branding",
		desc: "Mood Board, Logo Design, Color Schemes, Brand guidelines, Packaging, Photography, Store branding, Website and social media Campaigns",
		gallery: [
			"/eleven-kicks/img1.jpg",
			"/eleven-kicks/img2.jpg",
			"/eleven-kicks/img3.jpg",
			"/eleven-kicks/img4.jpg",
			"/eleven-kicks/img5.jpg",
			"/eleven-kicks/img6.jpg",
			"/eleven-kicks/img7.jpg",
			"/eleven-kicks/img8.jpg",
			"/eleven-kicks/img9.jpg",
			"/eleven-kicks/img10.jpg",
			"/eleven-kicks/img11.jpg",
			"/eleven-kicks/img12.jpg",
			"/eleven-kicks/img13.jpg",
			"/eleven-kicks/img14.jpg",
			"/eleven-kicks/img15.jpg",
		],
	},
];
