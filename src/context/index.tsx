import { BaseHTML } from "../components/baseHTML";
import { html as htmlPlugin } from "@elysiajs/html";
import Elysia from "elysia";

export const ctx = new Elysia({
	name: "@app/ctx",
})
	.use(htmlPlugin())
	.derive((ctx) => {
		const renderPage = (children: JSX.Element) =>
			ctx.html(<BaseHTML>{children}</BaseHTML>);
		return { renderPage };
	});
