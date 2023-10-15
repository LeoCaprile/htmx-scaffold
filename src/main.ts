import { Elysia } from "elysia";
import "@kitajs/html/register";
import { staticPlugin } from "@elysiajs/static";
import { ctx } from "./context";
import { pages } from "./pages";
import { env } from "./config";

const app = new Elysia()
	.use(staticPlugin())
	.use(ctx)
	.use(pages)
	.listen(env.PORT);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
