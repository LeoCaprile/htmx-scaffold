import { Elysia } from "elysia";
import { ctx } from "../context";

export const protectedRoute = new Elysia()
	.use(ctx)
	.onBeforeHandle(({ session, set }) => {
		if (session === null) {
			set.status = 401;
			set.redirect = "/";
			return "Unauthorized";
		}
	});
