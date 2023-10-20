import { Session } from "lucia";

type NavbarProps = {
	session: Session | null;
};

export function Navbar({ session }: NavbarProps) {
	return (
		<nav class="flex text-xl justify-between px-8 py-5 bg-coolGray text-white">
			<h1 class="flex items-center">
				htm<span class="text-blue-6">x</span> &nbsp; and elysiajs
			</h1>

			{session !== null ? (
				<div class="flex items-center gap-5">
					<div class="flex items-center p-1 gap-2">
						<div>Logged as {session.user.name}</div>
						<img
							class="rounded-999 w-10 b-black b-1"
							src={session.user.picture}
						/>
					</div>
					<a href="api/auth/signout">Sign Out</a>
				</div>
			) : (
				<div class="flex gap-5">
					<a href="/signIn">Sign In</a>
					<a href="/signUp">Sign Up</a>
				</div>
			)}
		</nav>
	);
}
