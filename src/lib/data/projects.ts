// Project Data

import { CDN_URL_PREFIX } from '$lib/constants';

export interface Category {
	/** Provide a category title. */
	name: string;
	/** (optional) Provide a category description. */
	description?: string;
	/** Provide the desired routing path value, ex: `/[path]/[slug]` */
	path: string;
	/** Provide a list of projects. */
	projects: Project[];
}

export interface Project {
	/** Provide the project slug, for the route path. */
	slug: string;
	/** Provide the name of the project. */
	name: string;
	/** Provide a project description. Supports HTML. */
	description?: string;
	/** Provide the url of the project. */
	url?: string;
	/** Provide the thumbnail image of the project. */
	thumbnail: string;
	/** Provide the banner image of the project. */
	banner?: string;
	/** Provide background color classes. */
	background: string;

	additionalStyles?: string;

	videos?: { src: string; caption: string }[];

	/** Provide additional thumbnail styles. */
	additionalThumbnailStyles?: string;

	/** If true, render a white background behind the thumbnail (for transparent PNGs). */
	needsWhiteBg?: boolean;

	sourceCodeUrl?: string;
}

export const projectCategories: Category[] = [
	{
		path: 'development',
		name: 'Recent Web Projects',
		projects: [
			{
				slug: 'songsterr-downloader',
				name: 'Songsterr Downloader',
				description: `
        <div class="space-y-4">
          <p>A high-performance web application that transforms guitar tablature from songsterr.com into professional Guitar Pro (.gpx) files, currently serving <strong>50,000+ daily active users</strong>. The project gained significant traction on both Hacker News and Reddit, showcasing its market relevance and utility.</p>
          <p>Architected with SvelteKit for optimal performance and engineered a sophisticated web scraping system using Node.js and TypeScript to interface with Songsterr's undocumented API endpoints. This required creative problem-solving and reverse engineering of their data structure.</p>
          <p>Successfully implemented and optimized a premium feature set with PayPal integration, generating consistent revenue stream with an impressive conversion rate from free to paid users.</p>
          <p><a href="https://songsterr-downloader.com" target="_blank">Songsterr Downloader</a> has become an essential tool in the musician community, processing over 100 downloads daily. The project has garnered a dedicated following with an active GitHub repository, demonstrating both technical excellence and product-market fit with substantial growth potential.</p>
        </div>
        `,
				url: 'https://songsterr-downloader.com',
				sourceCodeUrl: 'https://github.com/Metaphysics0/songsterr-downloader',
				thumbnail: `${CDN_URL_PREFIX}/2023/songsterr-downloader/logo.png`,
				banner: `${CDN_URL_PREFIX}/2023/songsterr-downloader/demo.gif`,
				additionalStyles: 'object-contain',
				background: 'variant-filled-primary'
			},
			{
				slug: 'open-tunings',
				name: 'Open Tunings',
				description: `<div class="space-y-4">
          <p><strong>Open Tunings</strong> is an innovative platform designed specifically for guitarists and musicians exploring alternative guitar tuning methods, addressing a significant gap in the music education space.</p>
          
          <p>Developed a <strong>community-driven ecosystem</strong> where musicians can discover, contribute, and experiment with guitar tunings. The platform features a <strong>custom-built web-based instrument</strong> utilizing Tone.js for real-time audio synthesis, allowing users to preview tunings before applying them to their instruments.</p>
          
          <p>Engineered using a modern tech stack including <strong>SvelteKit</strong> for the frontend, <strong>MongoDB</strong> for flexible data storage, <strong>Tailwind CSS</strong> for responsive design, and deployed via <strong>Vercel's CI/CD pipeline</strong>. The architecture focuses on performance and scalability, handling dynamic user-generated content while maintaining sub-second load times.</p>
          
          <p>The platform has organically grown to include <strong>hundreds of unique tunings</strong>, creating a valuable resource for the guitarist community while demonstrating expertise in full-stack development and audio programming.</p>
        </div>`,
				url: 'https://open-tunings.vercel.app/',
				sourceCodeUrl: 'https://github.com/Metaphysics0/open-tunings',
				thumbnail: `${CDN_URL_PREFIX}/2023/open-tunings/logo-lg.png`,
				banner: `${CDN_URL_PREFIX}/2023/open-tunings/create_demo.gif`,
				additionalStyles: 'object-contain',
				background: 'variant-filled-primary'
			},
			{
				slug: 'stronger-together',
				name: 'Stronger Together',
				description: `<div class="space-y-4">
          <p><strong>Stronger Together</strong> is a cross-platform fitness application built to revolutionize workout motivation through real-time social connectivity. The app addresses the challenge of workout consistency by leveraging <strong>social psychology</strong> and <strong>gamification</strong>.</p>
          
          <p>Implemented a <strong>sophisticated real-time notification system</strong> that broadcasts workout completions across the user community, creating a positive reinforcement loop. Each time a user completes an exercise set (pull-ups, push-ups, etc.), all connected users receive an instant notification, fostering healthy competition and community support.</p>
          
          <p>Architected using <strong>React Native</strong> for seamless cross-platform performance, integrated <strong>Firebase Cloud Messaging</strong> for reliable real-time notifications with minimal latency, and built a robust backend with <strong>MongoDB</strong> for scalable user data management. The app's architecture was designed with <strong>offline-first capabilities</strong>, allowing workout logging even without connectivity.</p>
          
          <p>The application demonstrates expertise in <strong>mobile development</strong>, <strong>real-time systems architecture</strong>, and <strong>behavioral design principles</strong> to drive user engagement and retention.</p>
        </div>`,
				sourceCodeUrl: 'https://github.com/Metaphysics0/stronger-together',
				thumbnail: `${CDN_URL_PREFIX}/assets/stronger-two.png`,
				banner: `${CDN_URL_PREFIX}/assets/stronger-together-app-screens.png`,
				background: 'variant-filled-primary',
				additionalStyles: 'object-contain'
			}
		]
	},
	{
		path: 'employment',
		name: 'Employment',
		projects: [
			{
				slug: 'cymbio',
				name: 'Cymbio',
				description: `
        <div class="space-y-4">
          <p>Cymbio is an enterprise-grade ecommerce and dropship automation platform that streamlines omnichannel retail operations for major brands across global markets. The platform solves complex integration challenges between disparate retail systems.</p>
          <p>Joining as a full stack engineer in 2023, I spearheaded critical initiatives that significantly enhanced the platform's capabilities. Led the architectural redesign of core components resulting in a 40% improvement in processing speed for high-volume retail data workflows.</p>
          <p>Engineered scalable solutions for inventory synchronization, order management, and retail compliance across multiple channels, significantly reducing integration complexity for enterprise clients. Implemented advanced data visualization dashboards that provided actionable insights, directly contributing to improved client retention rates.</p>
        </div>
        `,
				url: 'https://cym.bio/',
				thumbnail:
					'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_de31d952a320338b38742588d1471207/cymbio.png',
				videos: [
					{
						src: 'https://cdn.cym.bio/site/wp-content/uploads/2023/02/14085146/fixed.mp4',
						caption: 'Platform Showcase'
					},
					{
						src: 'https://cdn.cym.bio/site/wp-content/uploads/2023/05/21084913/lower-animation-homepage_v8.mp4',
						caption: ''
					}
				],
				additionalThumbnailStyles: 'object-contain',
				background: 'white-100',
				needsWhiteBg: true
			},
			{
				slug: 'cityhive',
				name: 'CityHive',
				description: `<div>
          <p>In May 2021, I joined CityHive's core product team as a full stack engineer, focusing on their specialized e-commerce platform serving the complex wine, beer, and spirits industry across three-tier distribution networks.</p>
          <p>Led the architectural overhaul of critical platform components, designing and implementing features that increased platform adoption by 35% among specialty retailers. Engineered scalable solutions for complex inventory management, regulatory compliance, and multi-warehouse fulfillment challenges unique to the alcoholic beverage industry.</p>
          <p>Successfully implemented a microservices approach for the order processing system, reducing order processing time by 60% while maintaining data integrity across distributed systems. My contributions directly supported the platform's ability to handle peak transaction volumes during seasonal sales periods without performance degradation.</p>
        </div>`,
				url: 'https://www.cityhive.net/',
				thumbnail: `${CDN_URL_PREFIX}/assets/ch-logo-white.png`,
				banner: `${CDN_URL_PREFIX}/2021/cityhive/img_2.png`,
				background: 'variant-filled-tertiary'
			},
			{
				slug: 'deltika',
				name: 'Deltika',
				description: `
        <div>
          <p>As an early engineering hire at Deltika Ltd. in 2021, I took ownership of designing and developing a sophisticated analytics dashboard serving the freelancer market on Fiverr. The platform provided critical business intelligence to thousands of freelancers, enabling data-driven decision making to optimize their service offerings.</p>
          <p>Architected a comprehensive analytics system that processed massive datasets from Fiverr's marketplace, implementing advanced data visualization techniques and predictive algorithms to identify market trends and optimization opportunities. The system provided actionable insights that resulted in measurable revenue increases for freelancers.</p>
          <p>Engineered a scalable backend infrastructure using cloud-native technologies to handle unpredictable traffic patterns while maintaining sub-second response times. Implemented robust ETL pipelines for data integrity across multiple third-party data sources.</p>
          <p>See the highlights in <a href="#" target="_blank">My Resume</a> to read more about my notable achievements and contributions here.</p>
        </div>`,
				url: 'https://www.linkedin.com/company/deltika-ltd/',
				thumbnail: `${CDN_URL_PREFIX}/assets/deltika-white.png`,
				banner: `${CDN_URL_PREFIX}/2021/deltika/img_2.png`,
				background: 'variant-filled-tertiary'
			}
		]
	}
];
