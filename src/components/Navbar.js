import Logo from '../assets/Logo.png'
import DextoolImg from '../assets/DextoolImg.png'
import { useState } from 'react'

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<div className="navbar">
			<div className="lg_screen">
				<div className="left"></div>

				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<ul>
					<li>
						<a className="link" href="https://twitter.com/" target="_blank" rel="noreferrer">
							Twitter
						</a>
					</li>
					<li>
						<a className="link" href="https://web.telegram.org/" target="_blank" rel="noreferrer">
							Telegram
						</a>
					</li>

					<li>
						<a className="link" href="https://www.dextools.io/" target="_blank" rel="noreferrer">
							Dextools
						</a>

						<div className="img_below">
							<img src={DextoolImg} alt="DextoolImg" />
						</div>
					</li>

					<li>
						<a className="link" href="#suck" target="_blank" rel="noreferrer">
							$SUCK
						</a>
					</li>
				</ul>
			</div>

			<div className="sm_screen">
				{showSidebar ? (
					<div className="hamburger" onClick={() => setShowSidebar(false)}>
						<div className="cross">X</div>
					</div>
				) : (
					<div className="hamburger" onClick={() => setShowSidebar(true)}>
						<div className="hamburger_menu">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
				)}

				<div className="connect">
					<button>Connect</button>
				</div>
			</div>

			{showSidebar && (
				<div className="sm_sidebar">
					<ul>
						<li>
							<a className="link" href="https://twitter.com/" target="_blank" rel="noreferrer" onClick={() => setShowSidebar(false)}>
								Twitter
							</a>
						</li>
						<li>
							<a className="link" href="https://web.telegram.org/" target="_blank" rel="noreferrer" onClick={() => setShowSidebar(false)}>
								Telegram
							</a>
						</li>

						<li>
							<a className="link" href="https://www.dextools.io/" target="_blank" rel="noreferrer" onClick={() => setShowSidebar(false)}>
								Dextools
							</a>
						</li>

						<li>
							<a className="link" href="#suck" target="_blank" rel="noreferrer" onClick={() => setShowSidebar(false)}>
								$SUCK
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
