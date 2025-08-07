import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'K4Tech.net - Innovative solutions, quickly',
    favicon: './src/favicon.svg',
    meta: {
      // Basic meta tags
      description: 'K4Tech.net - Innovative solutions, quickly. Access our services including GitHub, Discord, Webmail, Cloud storage, and Password Manager.',
      keywords: 'K4Tech, technology, solutions, GitHub, Discord, cloud, webmail, password manager',
      author: 'K4Tech.net',
      
      // Open Graph meta tags for social media embeds
      'og:title': 'K4Tech.net - Innovative solutions, quickly',
      'og:description': 'K4Tech.net - Innovative solutions, quickly. Access our services including GitHub, Discord, Webmail, Cloud storage, and Password Manager.',
      'og:type': 'website',
      'og:url': 'https://k4tech.net',
      'og:site_name': 'K4Tech.net',
      'og:image': 'https://k4tech.net/og-image.png',
      'og:image:type': 'image/png',
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': 'K4Tech.net - Innovative solutions, quickly',
      'og:image:secure_url': 'https://k4tech.net/og-image.png',
      
      // Twitter Card meta tags
      'twitter:card': 'summary_large_image',
      'twitter:title': 'K4Tech.net - Innovative solutions, quickly',
      'twitter:description': 'K4Tech.net - Innovative solutions, quickly. Access our services including GitHub, Discord, Webmail, Cloud storage, and Password Manager.',
      'twitter:image': 'https://k4tech.net/og-image.png',
      'twitter:image:alt': 'K4Tech.net - Innovative solutions, quickly',
      
      // Additional meta tags
      'theme-color': '#000000',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  output: {
    copy: [
      { from: './src/og-image.png', to: 'og-image.png' },
    ],
  },
});
