type ItemProps = {
	title: string | null;
	id: number;
};

export function Item({ id, title }: ItemProps) {
	return (
		<li class="flex gap-5" key={id}>
			{/* every thing that is get it from the user needs the safe attr to avoid xss*/}
			<span safe>{title}</span>
			<button
				hx-post={`/api/removeTodo/${id}`}
				hx-target="closest li"
				hx-swap="outerHTML"
			>
				X
			</button>
		</li>
	);
}
