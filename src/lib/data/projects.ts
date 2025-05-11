// Project Data

import { IMAGE_CDN_URL_PREFIX } from '$lib/constants';

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
	url: string;
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
          <p>A web app that converts guitar tabs from songsterr.com into Guitar Pro (.gpx) ﬁles. Used by 3000+ users daily. Trended on hackernews and reddit</p>
          <p>Used SvelteKit and web scraping with Node.js + TypeScript to grab links from an exposed API from songsterr.</p>
          <p>Implemented a paid feature with PayPal, actively being purchased by many customers.</p>
          <p><a href="https://songsterr-downloader.com" target="_blank">Songsterr Downloader</a> is hugely popular, with over 100 downloads per day, a dedicated reddit thread, and many github stars, the potential for growth within this application is huge.</p>
        </div>
        `,
				url: 'https://sonsgsterr-downloader.com',
				thumbnail: `${IMAGE_CDN_URL_PREFIX}/2023/songsterr-downloader/logo.png`,
				banner: `${IMAGE_CDN_URL_PREFIX}/2023/songsterr-downloader/demo.gif`,
				additionalStyles: 'object-contain',
				background: 'variant-filled-primary'
			},
			{
				slug: 'open-tunings',
				name: 'Open Tunings',
				description: `<div><p>Open tunings is a website tailored for guitarists and musicians who aspire to find new and alternate ways to tune their guitar.</p><p>It's a crowd-sourced listing website, where anybody can add a tuning for other guitarists to try. Created a web based instrument with Tone.js, to preview and listen to the way the tuning sounds.</p><p>Used SvelteKit, MongoDB, Tailwind, Vercel, and more to create this.</p></div>`,
				url: 'https://open-tunings.vercel.app/',
				thumbnail: `${IMAGE_CDN_URL_PREFIX}/2023/open-tunings/logo-lg.png`,
				banner: `${IMAGE_CDN_URL_PREFIX}/2023/open-tunings/create_demo.gif`,
				additionalStyles: 'object-contain',
				background: 'variant-filled-primary'
			},
			{
				slug: 'stronger-together',
				name: 'Stronger Together',
				description: `<div><p>Stronger Together is a collaborative fitness mobile application to motivate and inspire others to workout and get stronger.</p><p>It's a simple app where you log everytime you complete a set of pull-ups, push-ups, and other exercises, and everyone else with the app will receive a notification.</p><p>Used React Native, Firebase Notifications, and MongoDB.</p></div>`,
				url: 'https://example.com/',
				thumbnail: `${IMAGE_CDN_URL_PREFIX}/assets/stronger-two.png`,
				banner: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3',
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
        <div style="text-align: center;">
          <p>Cymbio is an ecommerce and dropship automation platform to help brands integrate with many retail channels</p>
          <p>I joined the company in 2023 as a full stack engineer and led the design and development for many features</p>
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
          In May of 2021, I joined the core product team at CityHive as a full stack engineer.
          <br>
          CityHive is an e-commerce platform for the wine, beer, and spirits industry, serving three entity tiers.
          <br>
          During my time at the company, I have led the design and development of many integral features that the company is using today 
        </div>`,
				url: 'https://www.cityhive.net/',
				// thumbnail: `${IMAGE_CDN_URL_PREFIX}/2021/cityhive/thumb.png`,
				thumbnail:
					'https://assets.lightspeedhq.com/img/2016/07/500db4e8-city-hive-logo-ben-field.png',
				banner: `${IMAGE_CDN_URL_PREFIX}/2021/cityhive/img_2.png`,
				background: 'variant-filled-tertiary'
			},
			{
				slug: 'deltika',
				name: 'Deltika',
				description: `
        <div>
          In 2021, I joined a startup, Deltika Ltd. and led the design and development of an analytics dashboard for fiverr freelancers.
          See the highlights in <a href="#" target="_blank">My Resume</a> to read more about my notable achievements and contributions here.
        </div>`,
				url: 'https://www.linkedin.com/company/deltika-ltd/',
				thumbnail: `${IMAGE_CDN_URL_PREFIX}/2021/deltika/thumb.jpeg`,
				banner: `${IMAGE_CDN_URL_PREFIX}/2021/deltika/img_2.png`,
				background: 'variant-filled-tertiary'
			}
		]
	}
];
