import './App.scss';

function App() {
	return (
		<div className="hero font-primary">
			<div className="container logo flex items-center justify-center text-[5.5rem] font-extrabold uppercase">
				Ye
			</div>
			<div className="photo">
				<img src="public/main.png"></img>
			</div>
			<div className="container sidebar ">
				<ul
					className="flex flex-col h-full items-center
        justify-center uppercase font-bold text-4xl gap-12">
					<li>
						<a href="#">
							<img src="public/Spotify.svg" alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="public/Apple.svg" alt="" />
						</a>
					</li>
					<li>
						<a href="#">help</a>
					</li>
					<li>
						<a href="#">terms</a>
					</li>
					<li>
						<a href="#">privacy</a>
					</li>
				</ul>
			</div>
			<div className="container info text-3xl">
				<p className="px-2 font-bold py-4">
					<a href="#" className="block">
						DONDA 2
					</a>
					<a href="#" className="block">
						DONDA
					</a>
					<a href="#" className="block">
						JESUS IS KING
					</a>
					<a href="#" className="block">
						KIDS SEE GHOSTS
					</a>
					<a href="#" className="block">
						YE
					</a>
					<a href="#" className="block">
						THE LIFE OF PABLO
					</a>
					<a href="#" className="block">
						YEEZUS
					</a>
					<a href="#" className="block">
						WATCH THE THRONE
					</a>
					&gt;
				</p>
			</div>
			<div className="container promo flex flex-col justify-center items-center py-2">
				<img className="w-auto max-h-[220px]" src="public/stem-player-kanye-west 1.png"></img>
				<h2 className="text-6xl font-bold stroke-text text-white py-4">STEMPLAYER</h2>
				<p className="text-xl font-primary tracking-wider">comes with donda</p>
			</div>
		</div>
	);
}

export default App;
