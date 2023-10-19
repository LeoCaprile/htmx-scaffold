import Elysia from "elysia";
import { ctx } from "../../context";

export const SignInPage = new Elysia()
	.use(ctx)
	.get("/signIn", ({ session, renderPage, set }) => {
		if (session) {
			set.redirect = "/";
			return;
		}

		return renderPage(
			"Sign In",
			<div class="grid place-content-center h-100vh">
				<h1>Sign In</h1>
				<form class="flex flex-col gap-5" method="POST" action="/api/signIn">
					<input type="text" name="username" placeholder="username" />
					<input type="password" name="password" placeholder="password" />
					<button>Sign In</button>
				</form>
				<a href="api/auth/login/google">
					<button>Google auth</button>
				</a>
			</div>
		);
	});
