import { Elysia } from "elysia";
import "@kitajs/html/register";
import { staticPlugin } from "@elysiajs/static";
import { ctx } from "./context";

const app = new Elysia()
  .use(staticPlugin())
  .use(ctx)
  .get("/", ({ renderPage }) => renderPage(<h1>title</h1>))
  .listen(3200);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
