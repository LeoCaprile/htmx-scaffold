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
				<div class="flex flex-col gap-5 p-5 b-2 b-coolGray-2 rounded">
					<h1 class="text-2xl">Sign In</h1>

					<a href="api/auth/login/google">
						<button class="flex gap-2 items-center p-3 b-2 b-coolGray-3 rounded hover:bg-coolGray-1 shadow-md">
							<div class="i-logos-google-icon"></div>
							<div> Sign In with Google</div>
						</button>
					</a>
				</div>
			</div>
		);
	});
