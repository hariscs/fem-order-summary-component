import './index.css';
import headerImg from './illustration-hero.svg';
import icon from './icon-music.svg';
function App() {
	return (
		<div className='container'>
			<header>
				<img src={headerImg} alt='header' />
			</header>
			<main className='main'>
				<h1 className='title'>Order Summary</h1>
				<p className='subtitle'>
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like!
				</p>
				<div className='plan-container'>
					<img src={icon} alt='music' className='icon' />
					<div className='plan'>
						<h2 className='time'>Annual Plan</h2>
						<span className='price'>$59.99/year</span>
					</div>
					<a href='index.html' className='change'>
						Change
					</a>
				</div>
				<div className='btn-group'>
					<a href='index.html' className='btn btn-primary'>
						Proceed to Payment
					</a>
					<a href='index.html' className='btn btn-secondary'>
						Cancel Order
					</a>
				</div>
			</main>
		</div>
	);
}

export default App;
