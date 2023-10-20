type NavbarProps = {
	isLoggedIn: boolean;
};

export function Navbar({ isLoggedIn }: NavbarProps) {
	return (
		<nav class="flex text-xl justify-between px-8 py-5 bg-coolGray text-white">
			<h1>
				htm<span class="text-blue-6">x</span> and elysiajs
			</h1>

			{isLoggedIn ? (
				<a href="api/auth/signout">Sign Out</a>
			) : (
				<div class="flex gap-5">
					<a href="/signIn">Sign In</a>
				</div>
			)}
		</nav>
	);
}
