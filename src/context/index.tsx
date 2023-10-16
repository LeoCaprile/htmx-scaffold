import { BaseHTML } from "../components/baseHTML";
import { html as htmlPlugin } from "@elysiajs/html";
import Elysia from "elysia";
import { db } from "../db";

export const ctx = new Elysia({
	name: "@app/ctx",
})
	.use(htmlPlugin())
	.decorate("db", db)
	.derive((ctx) => {
		const renderPage = (title: string, children: JSX.Element) =>
			ctx.html(<BaseHTML title={title}>{children}</BaseHTML>);
		return { renderPage };
	});
