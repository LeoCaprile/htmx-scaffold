// route: /
import Elysia from "elysia";
import { ctx } from "../../context";

export const homePage = new Elysia({ name: "@app/pages" })
	.use(ctx)
	.get("/", async ({ renderPage }) => {
		return renderPage(
			"Home",
			<div class="grid place-content-center w-full h-full">
				<h1 class="text-center">Home</h1>
				<button>Sign Up</button>
				<a href="/signIn">Sign In</a>
			</div>
		);
	});
