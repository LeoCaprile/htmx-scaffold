type FormButtonProps = {
	text: string;
};

export function FormButton({ text }: FormButtonProps) {
	return (
		<button
			class="flex items-center justify-center bg-blue p-2 rounded-6 text-white"
			hx-post="/api/addTodo"
			hx-indicator="#spinner"
			type="submit"
		>
			{text}
			<div
				id="spinner"
				class="htmx-indicator animate-spin w-2 h-2 b-black b-6 b-solid rounded-9999 b-t-transparent"
			></div>
		</button>
	);
}
