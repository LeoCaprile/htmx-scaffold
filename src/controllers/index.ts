import Elysia from "elysia";
import { todoController } from "./todo.controller";
import { authController } from "./auth.controller";

export const controllers = new Elysia({
	name: "@app/controllers",
	prefix: "/api",
})
	.use(todoController)
	.use(authController);
