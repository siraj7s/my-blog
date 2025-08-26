import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://siraj7s.github.io',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
});
