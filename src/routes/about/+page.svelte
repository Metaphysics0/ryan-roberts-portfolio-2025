<script>
	import { CONCERT_PHOTO_1_URL, RESUME_URL } from '$lib/constants';

	export let data;

	console.log('DATA', data);
</script>

<div class="page-container page-spacing">
	<header class="text-center">
		<h1 class="h1">About Me</h1>
	</header>

	<hr class="divider" />

	<img
		class="bg-black w-full aspect-[21:9] rounded-container-token overflow-hidden shadow-xl"
		src={CONCERT_PHOTO_1_URL}
		alt="banner"
	/>

	<hr class="divider" />

	<section class="space-y-8">
		<p class="text-xl md:text-3xl">
			I'm a senior full-stack software engineer with over 6 years of industry experience,
			specializing in creating scalable, high-impact digital solutions. My journey began with a
			passion for technology, leading me to pursue an intensive Full Stack Bootcamp at Israel Tech
			Challenge after studying Computer Science at Long Beach City College.
		</p>
		<p class="md:text-xl opacity-75">
			Throughout my career, I've demonstrated a remarkable ability to transform complex business
			challenges into robust technological solutions. At Cymbio, I've been instrumental in
			modernizing our tech infrastructure by developing a high-performance external communication
			audit service capable of processing over 50,000 records per hour. I've also enhanced our
			DevOps capabilities by implementing GitHub Actions and AWS integrations, and improved team
			efficiency through innovative monitoring solutions like NewRelic-Slack anomaly detection
			alerts.
		</p>
		<p class="md:text-xl opacity-75">
			My skill set includes a wide range of skills in full stack web development, including fluency
			in end-to-end JavaScript, front-end architecture, deploying microservices, queuing systems,
			AWS, database design. I've worked with many frontend frameworks, but have a passion for Svelte
			and SvelteKit. My expertise in frontend development also extends to building responsive and
			mobile-friendly websites.
		</p>
		<p class="md:text-xl opacity-75">
			One of my most significant achievements was at CityHive, where I led the development of an
			in-house CMS product built with TypeScript, Grapes.js, and Angular. This platform now serves
			over 3,200 active businesses and demonstrates my ability to create scalable, market-ready
			solutions. I successfully unified two backend infrastructures into a single Cloudflare Worker,
			now handling more than 10 million customers and 25 million requests daily. Additionally, I
			created an add-ons marketplace that increased the company's Annual Recurring Revenue (ARR) by
			$100,000.
		</p>
		<p class="md:text-xl opacity-75">
			My personal projects further showcase my technical creativity and entrepreneurial spirit. The
			Songsterr Downloader, a web application for converting guitar tabs, has gained significant
			traction with over 50,000 daily users worldwide and has been indexed #1 on Google. I've
			implemented advanced features like PayPal integration and Cloudflare security measures,
			generating approximately $400 in monthly revenue.
		</p>
		<p class="md:text-xl opacity-75">
			Beyond my professional work, I've demonstrated innovation in various projects like Open
			Tunings, a web app for guitarists using Tone.js, and HumbleCompass, a cross-platform mobile
			app for finding vegan restaurants. My technical versatility is evident in my ability to work
			across multiple technologies, including TypeScript, Angular, React, Node.js, AWS, and various
			database systems.
		</p>
		<p class="md:text-xl opacity-75">
			I'm particularly proud of my achievement at the ITC Medical Innovation Hackathon, where I
			collaborated with data scientists to develop an AI-driven survey for detecting developmental
			delays in children, placing in the top 5 out of 30+ competing projects.
		</p>
		<p class="md:text-xl opacity-75">
			My technical skills span a wide range of technologies, including full-stack development with
			TypeScript, Angular, React, Node.js, and Nest.js, cloud services like AWS and Cloudflare, and
			database technologies such as MongoDB and MySQL. I'm passionate about creating efficient,
			scalable solutions that drive business value and improve user experiences.
		</p>
	</section>

	<!-- Resume -->
	<section class="text-center">
		<a href={RESUME_URL} target="_blank" rel="noreferrer" class="btn btn-lg variant-filled-primary">
			<span>
				<i class="fa-solid fa-download" />
				Download Resume
			</span>
		</a>
	</section>
</div>
