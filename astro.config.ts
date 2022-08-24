import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "astro-compress";

import type { AstroUserConfig } from "astro";

export default {
	site: "https://souq.dev",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
} as AstroUserConfig;
