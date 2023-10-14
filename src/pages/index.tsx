// www.domain.com/
import Elysia from "elysia";
import { ctx } from "../context";

export const pages = new Elysia({
  name: "@app/pages",
})
  .use(ctx)
  .get("/", ({ renderPage }) => renderPage(<h1>title</h1>));
