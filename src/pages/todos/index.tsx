import Elysia from "elysia";
import { ctx } from "../../context";
import { FormButton } from "../../components/FormButton";
import { Item } from "../../components/Item";
import { protectedRoute } from "../../auth/protectedRoute";

export const todoPage = new Elysia({ name: "@app/pages" }).use(ctx).get(
	"/todos",
	async ({ renderPage, db }) => {
		const todos = await db.query.todos.findMany();

		return renderPage(
			"Todos",
			<div class="grid place-content-center w-full h-full">
				<h1 class="text-center">Todos</h1>

				<ul
					class="flex flex-col items-center"
					hx-get="/api/getTodos"
					hx-trigger="get-todo from:body"
					id="todos"
				>
					{todos.map((todo) => (
						<Item id={todo.id} title={todo.title} />
					))}
				</ul>

				<form
					class="flex gap-5"
					method="POST"
					hx-target="#todos"
					hx-swap="beforeend"
				>
					<input
						placeholder="enter your todo"
						class="b-black b-2 b-solid w-40"
						type="text"
						name="title"
					/>
					<FormButton text="Add" />
				</form>
			</div>
		);
	},
	protectedRoute
);
