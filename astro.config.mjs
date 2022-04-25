import { defineConfig } from "astro/config";
import critters from "astro-critters";

export default defineConfig({
	site: "https://souq.dev",
	integrations: [
		critters({
			preload: "body",
			inlineFonts: true,
		}),
	],
});
