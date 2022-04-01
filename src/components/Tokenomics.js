import Lips from '../assets/Lips.png'
import Dildo from '../assets/Dildo.png'
import Cash from '../assets/Cash.png'
import Drop from '../assets/Drop.png'

const Tokenomics = () => {
	return (
		<div className="tokenomics">
			<h1>$SUCK Tokenomics.</h1>

			<div className="row">
				<div className="col">
					<div className="img_container">
						<img src={Lips} alt="" />
					</div>

					<div className="heading">
						<h2>$SUCK SUPPLY</h2>
						<h3>Max supply: 1,000,000,000</h3>
					</div>

					<p>We wanted to make $SUCK common, yet scarce, for our future models and usecases.</p>
				</div>

				<div className="col">
					<div className="img_container">
						<img src={Drop} alt="" />
					</div>

					<div className="heading">
						<h2>2.5% Automatic Liquidity</h2>
					</div>
					<p>
						This is the ultimate $SUCK feature. We're ever increasing the liquidity, so you can forever trade $SUCK... Completely
						Decentralized. Automatically locked.
					</p>
				</div>

				<div className="col">
					<div className="img_container">
						<img src={Cash} alt="" />
					</div>

					<div className="heading">
						<h2>7.5% Teledildonics and Dildao Fund</h2>
					</div>
					<p>These funds build up towards our DILDAO, which will be a major component in the $SUCKiverse.</p>
					<p>This will give you rights to NFTs and $SUCKs alike.</p>
				</div>

				<div className="col">
					<div className="img_container">
						<img src={Dildo} alt="" />
					</div>

					<div className="heading">
						<h2>DILDAO Tokenomics</h2>
					</div>

					<p>6969 Generative animated NFTs utilizing never before seen Suckonomic technology Governance over the DilDAO fund.</p>
					<p>This will be a community run fund. Where you, the community, decide where we go with $SUCK as a whole.</p>
				</div>
			</div>
		</div>
	)
}

export default Tokenomics
