<script>
	import { CONCERT_PHOTO_1_URL, RESUME_URL } from '$lib/constants';
</script>

<div class="page-container page-spacing">
	<!-- Header -->
	<header class="text-center">
		<h1 class="h1">About Me</h1>
	</header>

	<hr class="divider" />

	<!-- Banner -->
	<img
		class="bg-black w-full aspect-[21:9] rounded-container-token overflow-hidden shadow-xl"
		src={CONCERT_PHOTO_1_URL}
		alt="banner"
	/>

	<hr class="divider" />

	<!-- Description -->
	<!-- prettier-ignore -->
	<section class="space-y-8">
		<!-- Intro -->
		<p class="text-xl md:text-3xl">
			I’m a seasoned software developer with over 6 years of experience in creating
			responsive and user-friendly web applications. With a strong passion for web development,
			working various projects, ranging from small-scale websites to complex web applications.
		</p>
		<!-- / -->
		<p class="md:text-xl opacity-75">
			I started attending my local community college pursuing a degree in
      <a
        class="anchor"
        href="https://en.wikipedia.org/wiki/Software_development"
        target="_blank"
        rel="noreferrer"
      >computer science</a>, however after learning more on my own and being dissatisfied with the learning curriculum,
      I decided to take the road less travelled and dropped out to go full time on learning on my own. 
      After roughly a year of self studying I began working as a full stack developer in a small startup where I was tasked with developing a SaaS product to provide analytics for Fiverr freelancers.
      Having quickly learned the ins and outs of web development I gained valuable experience working on various projects.
		</p>
		<p class="md:text-xl opacity-75">
			My skill set includes a wide range of skills in full stack web development, including
			fluency in end-to-end JavaScript, front-end architecture, deploying microservices, queuing systems, AWS, database design. 
      I’ve worked with many frontend frameworks, but have a passion for Svelte and SvelteKit.
      My expertise in frontend development also extends to
			building responsive and mobile-friendly websites.
		</p>
		<p class="md:text-xl opacity-75">
			Throughout my career I’ve achieved several notable accomplishments. One such accomplishment
			was developing a user-friendly and responsive mobile application for a major e-commerce
			company. The app received high praise from users and helped drive sales for the company. Alex
			has also been recognized for developing a complex web application for a healthcare company
			that helped streamline their patient management system.
		</p>
		<p class="md:text-xl opacity-75">
			In my personal life I enjoy spending time outdoors, hiking, and playing sports. I’m also an
			avid reader and enjoy exploring new technologies and programming languages.
		</p>
		<p class="md:text-xl opacity-75">
			In conclusion, I have a wealth of experience in frontend development and a passion for
			creating user-friendly and responsive web applications, and able to quickly become a valuable
			asset to any development team. My dedication to staying up-to-date with the latest web
			technologies and a commitment to delivering high-quality work makes me a sought-after
			developer in the industry.
		</p>
	</section>

	<!-- Resume -->
	<section class="text-center">
		<a href="/about" class="btn btn-lg variant-filled-primary">
			<i class="fa-solid fa-download" />
			<a href={RESUME_URL} target="_blank" rel="noreferrer">Download Resume</a>
		</a>
	</section>
</div>
