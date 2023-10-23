import Elysia, { t } from "elysia";
import { ctx } from "../context";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";

export const userController = new Elysia().use(ctx).put(
	"/user/profile",
	async (ctx) => {
		if (!ctx.session) return;

		const { name, profilePicture } = ctx.body;

		if (name && profilePicture) {
			const buffer = Buffer.from(await profilePicture.arrayBuffer());
			const b64Img =
				"data:" + profilePicture.type + ";base64," + buffer.toString("base64");
			await ctx.db
				.update(user)
				.set({ name, picture: b64Img })
				.where(eq(user.id, ctx.session?.user.id));
		} else if (name) {
			await ctx.db
				.update(user)
				.set({ name })
				.where(eq(user.id, ctx.session?.user.id));
		} else if (profilePicture) {
			const buffer = Buffer.from(await profilePicture.arrayBuffer());
			const b64Img =
				"data:" + profilePicture.type + ";base64," + buffer.toString("base64");
			await ctx.db
				.update(user)
				.set({ picture: b64Img })
				.where(eq(user.id, ctx.session?.user.id));
		}

		ctx.set.headers["HX-Trigger"] = "get-session";
	},
	{
		body: t.Object({
			name: t.Optional(t.String()),
			profilePicture: t.Optional(t.File()),
		}),
	}
);
