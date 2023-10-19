import { Elysia } from "elysia";
import "@kitajs/html/register";
import { staticPlugin } from "@elysiajs/static";
import { ctx } from "./context";
import { pages } from "./pages";
import { env } from "./config";
import { controllers } from "./controllers";
import chokidar from "chokidar";

const watcher = chokidar.watch("./src");

const app = new Elysia()
	.use(staticPlugin())
	.use(ctx)
	.use(controllers)
	.use(pages)
	.ws("/ws", {
		open: (ws) => {
			watcher.on("change", () => {
				setTimeout(() => {
					ws.send("reload");
				}, 1500);
			});
		},
	})
	.listen(env.PORT);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
