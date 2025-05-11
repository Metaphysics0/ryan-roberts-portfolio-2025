# Skeleton Labs > Templates > Portfolio

This templates used SvelteKit, Tailwind, and Skeleton preconfigured along with a curated template created and implemented by the the creators of Skeleton.

## How To Install

Find installation instructions within the FAQ here: https://skeleton.dev/docs/sponsorship#premium-templates

## Themes

This template comes pre-configured with the "Wintry" theme. [Learn more about customizing themes here](https://www.skeleton.dev/docs/themes).

## Static Data

We've included multiple static data files in `/src/lib/data` to populate content on your site. This includes:

- `navigation.ts` - control the visible navigation routes.
- `projects.ts` - the data for each project category and project details.
- `images.ts` - retrieves responsive images from a CDN (Unsplash)
- `social.ts` - the list of social icons and urls.

## Routes

All rountes can be found in the `/src/routes` directory. This template includes:

- `/` - the homepage of the website.
- `/about` - a page to talk about yourself.
- `/projects` - the grid list of projects.
- `/projects/[category]/[slug]` - each project's detail page.
- `/sandbox` - a hidden sandbox page for testing theme styles.

## Testing Sandbox

A hidden sandbox page has been provided at `/sandbox`. This allows you to quickly preview and test various Skeleton elements and components, including: typography, buttons, the color palette, and more. This route can be deleted at your own discretion.

## Optional Settings

- Sticky Header: if you wish to make the app header sticky, open `/src/routes/+layout.svelte` and set `stickyHeader` to `true`.

## Additional Assets

- Font Awesome (https://fontawesome.com/) - a library of SVG icons.
- Unsplash (https://unsplash.com/) - all images are provided by Unsplash.

## License

This template is served under the terms of the [Personal License](https://www.skeleton.dev/docs/sponsorship/licensing).