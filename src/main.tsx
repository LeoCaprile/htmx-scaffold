import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(<h1>hola</h1>))
  .listen(3200);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
