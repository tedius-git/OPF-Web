// @ts-check
import { defineConfig , fontProviders, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "NewCM",
    cssVariable: "--font-new-cm",
    options: {
      variants: [{
        src: ['./src/assets/fonts/NewCM10-Regular.otf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
