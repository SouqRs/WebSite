import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
	site: "https://souq.dev",
	integrations: [turbolinks()],
	trailingSlash: "always",
});
