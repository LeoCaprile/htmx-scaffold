import Elysia from "elysia";
import { homePage } from "./home";
import { todoPage } from "./todos";
import { SignInPage } from "./auth/signIn";

export const pages = new Elysia({
	name: "@app/pages",
})
	.use(homePage)
	.use(SignInPage)
	.use(todoPage);
