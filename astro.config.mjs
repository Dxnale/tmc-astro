// @ts-check
import {
  defineConfig,
  fontProviders,
} from "astro/config";


// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'where',
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Poetsen One",
        cssVariable: "--font-poetsen-one",
        weights: ["100 900"],
      },
      {
        provider: fontProviders.google(),
        name: "Fira Sans",
        cssVariable: "--font-fira-sans",
        weights: ["500"],
      },
    ],
  },
});
