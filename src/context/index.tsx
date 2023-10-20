import { BaseHTML } from "../components/baseHTML";
import { html as htmlPlugin } from "@elysiajs/html";
import Elysia from "elysia";
import { db } from "../db";
import { authed } from "../auth/middleware";

export const ctx = new Elysia({
	name: "@app/ctx",
})
	.use(htmlPlugin())
	.use(authed)
	.decorate("db", db)
	.derive((ctx) => {
		const renderPage = (title: string, children: JSX.Element) =>
			ctx.html(
				<BaseHTML isLoggedIn={ctx.session !== null} title={title}>
					{children}
				</BaseHTML>
			);
		return { renderPage };
	});
