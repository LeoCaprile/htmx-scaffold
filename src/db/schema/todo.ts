import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title"),
	completed: integer("completed", { mode: "boolean" }).default(false),
	createdAt: integer("createdAt", { mode: "timestamp" }),
});
