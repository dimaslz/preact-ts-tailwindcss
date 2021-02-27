import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';

const Header: FunctionalComponent = () => (
	<header class={`Header fixed left-0 top-0 w-full h-16 p-0 bg-purple-800 shadow-sm z-50 flex text-white items-center`}>
		<h1 class="w-full pl-6">Preact App + TS + TailwindCSS</h1>
		<nav class="h-full flex items-center">
			<Link activeClassName="bg-purple-900" href="/" class="h-full py-0 px-2 hover:bg-purple-900 flex items-center w-16 justify-center">
                    Home
			</Link>
			<Link activeClassName="bg-purple-900" href="/profile" class="h-full py-0 px-2 hover:bg-purple-900 flex items-center w-16 justify-center">
                    Me
			</Link>
			<Link activeClassName="bg-purple-900" href="/profile/john" class="h-full py-0 px-2 hover:bg-purple-900 flex items-center w-16 justify-center">
                    John
			</Link>
		</nav>
	</header>
);

export default Header;
