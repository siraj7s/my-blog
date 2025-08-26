import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'www.sirajpanigrahi.in',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
});
