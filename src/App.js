import Navbar from './components/Navbar'
import Mission from './components/Mission'
import Minting from './components/Minting'
import Tokenomics from './components/Tokenomics'
import Suckmap from './components/Suckmap'

import BackgroundImg from './assets/BackgroundImg.png'

function App() {
	return (
		<div className="App">
			<div className="background_img">
				<img src={BackgroundImg} alt="BackgroundImg" />
			</div>

			<Navbar />
			<Mission />
			<Minting />
			<Tokenomics />
			<Suckmap />
		</div>
	)
}

export default App
