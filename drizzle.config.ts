import type { Config } from "drizzle-kit";
import { env } from "./src/config";

export default {
	schema: "./src/db/schema/*",
	out: "./drizzle",
	driver: "turso",
	dbCredentials: {
		url: env.DB_URI,
		authToken: env.DB_AUTH_TOKEN,
	},
} satisfies Config;
