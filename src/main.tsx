import { Elysia } from "elysia";
import "@kitajs/html/register";
import { staticPlugin } from "@elysiajs/static";
import { ctx } from "./context";
import { pages } from "./pages";

const app = new Elysia().use(staticPlugin()).use(ctx).use(pages).listen(3200);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
