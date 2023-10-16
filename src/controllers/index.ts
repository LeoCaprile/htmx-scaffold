import Elysia from "elysia";
import { todoController } from "./todo.controller";

export const controllers = new Elysia({
	name: "@app/controllers",
	prefix: "/api",
}).use(todoController);
