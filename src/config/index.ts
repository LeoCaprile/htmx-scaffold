import z from "zod";

const configSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	PORT: z.string(),
	DB_URI: z.string(),
	DB_AUTH_TOKEN: z.string(),
});

const envObj = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	DB_URI: process.env.DB_URI,
	DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
};

export const env = configSchema.parse(envObj);
