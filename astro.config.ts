import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

export default /** @type {import('astro').AstroUserConfig} */ {
	site: "https://souq.dev",

	integrations: [sitemap(), critters(), compress()],
};
