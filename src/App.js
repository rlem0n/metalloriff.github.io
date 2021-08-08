import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.scss";
import { Modals } from "./Components/Modals";
import HomePage from "./Pages/Home";
import Toasts from "./Components/Toasts";
import { joinClassNames } from "./Classes/Constants";
import ContextMenu from "./Components/ContextMenuHandler";
import ProjectsPage from "./Pages/Projects";
import KekW from "./Pages/EasterEggKek";

let lastHash = window.location.hash;
window.onpopstate = () => {
	if (window.location.hash !== lastHash) {
		App.forceUpdate();
		
		lastHash = window.location.hash;
	}
};

export default function App() {
	const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	App.isMobile = isMobile;
	
	const [, forceUpdate] = React.useReducer(x => x + 1, 0);
	App.forceUpdate = forceUpdate;
	
	let PageElement;
	
	switch (window.location.hash.split(/#\/?/)[1]) {
		default:
			PageElement = HomePage;
			break;
			
		case "projects":
			PageElement = ProjectsPage;
			break;
			
		case "kek":
			PageElement = KekW;
			break;
	}
	
	const preserveAspectRatio = isMobile ? "none" : "xMidYMid slice";

	return (
		<div className={joinClassNames("App", isMobile ? "Mobile" : "Desktop")}>
			<svg viewBox="0 0 1920 1080" className="WaveVector" fill="var(--primary-bg)"
				 preserveAspectRatio={preserveAspectRatio}>
				<path d=" M 0 526 Q 239.722 472.498 480 526 Q 730.682 581.818 960 526 L 960 1290 L 0 1290 L 0 526 Z "/>
				<path d=" M 960 526 Q 1199.722 472.498 1440 526 Q 1690.682 581.818 1920 526 L 1920 1290 L 960 1290 L 960 526 Z "/>
			</svg>

			<svg viewBox="0 0 1920 1080" className="WaveVector Reverse" fill="var(--secondary-bg)"
				 preserveAspectRatio={preserveAspectRatio}>
				<path d=" M 0 526 Q 239.722 472.498 480 526 Q 730.682 581.818 960 526 L 960 1290 L 0 1290 L 0 526 Z "/>
				<path d=" M 960 526 Q 1199.722 472.498 1440 526 Q 1690.682 581.818 1920 526 L 1920 1290 L 960 1290 L 960 526 Z "/>
			</svg>
			
			<div className="Main">
				<PageElement/>
			</div>

			<footer className="Footer">
				<div><a href="https://fontawesome.com/license">Icon License</a></div>

				<div className="Divider"/>
				
				<div><a href="https://www.nordtheme.com/">Color Palette</a></div>
				
				<div className="Divider"/>
				
				<div>Copyright © 2021-{new Date().getFullYear()} Metalloriff</div>
			</footer>

			<Modals/>
			<Toasts/>
			<ContextMenu.Handler/>
		</div>
	);
}