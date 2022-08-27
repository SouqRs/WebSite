import type { AstroUserConfig } from "astro";
import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

export default (): AstroUserConfig => {
	return {
		site: "https://souq.dev",
		integrations: [
			sitemap(),
			critters(),
			compress({
				logger: 1,
			}),
		],
	};
};
