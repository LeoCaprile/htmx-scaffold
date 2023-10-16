import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	cli: {
		entry: {
			patterns: ["src/{pages,components,controllers}/**/*.(tsx)"],
			outFile: "public/dist/unocss.css",
		},
	},
	presets: [presetUno()],
});
