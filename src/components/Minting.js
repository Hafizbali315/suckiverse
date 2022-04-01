import { useState } from 'react'

import DildoImg from '../assets/DildoImg.png'

const Minting = () => {
	const [count, setCount] = useState(1)

	const DecreaseCount = () => {
		if (count > 0) {
			setCount((count) => count - 1)
		}
	}

	const IncreaseCount = () => {
		setCount((count) => count + 1)
	}

	return (
		<div className="minting">
			<h1>Minting</h1>

			<div className="lg_screen">
				<div className="row">
					<div className="left">
						<div className="heading">DILDAOS MINTED </div>

						<div className="quantity">0 of 6,969</div>
					</div>

					<div className="img_container">
						<img src={DildoImg} alt="" />
					</div>

					<div className="right">
						<div className="heading">MINTING PRICE</div>

						<div className="quantity">0.000 ETH</div>
					</div>
				</div>

				<div className="counter">
					<div className="minus" onClick={DecreaseCount}>
						-
					</div>
					<div className="input_box"> {count} </div>
					<div className="plus" onClick={IncreaseCount}>
						+
					</div>
				</div>
			</div>

			<div className="sm_screen">
				<div className="img_container">
					<img src={DildoImg} alt="DildoImg" />
				</div>

				<div className="minted">
					<div className="heading">DILDAOS MINTED</div>
					<div className="quantity">0 of 6,969</div>
				</div>

				<div className="counter">
					<div className="minus" onClick={DecreaseCount}>
						-
					</div>
					<div className="input_box"> {count} </div>
					<div className="plus" onClick={IncreaseCount}>
						+
					</div>
				</div>

				<div className="price">
					<div className="heading">MINTING PRICE</div>
					<div className="quantity">0.000 ETH</div>
				</div>
			</div>

			<div className="mint_btn">
				<button>Mint</button>
			</div>
		</div>
	)
}

export default Minting
