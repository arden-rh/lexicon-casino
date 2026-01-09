import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { useCoin } from "../../contexts/CoinContext";

const Header = () => {
	const { coins } = useCoin();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Only apply on mobile (screen width < 768px)
			if (window.innerWidth < 768) {
				// Hide h1 when scrolled down more than 50px
				// Show h1 when scrolled back to top (less than 40px)
				if (currentScrollY > 50) {
					setIsScrolled(true);
				} else if (currentScrollY < 40) {
					setIsScrolled(false);
				}
			} else {
				// Always show h1 on desktop
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<h1>
				<a href="/">
					Casino Slots
				</a>
			</h1>
			<nav className={styles.nav}>
				<span className={styles.links}>
					<a href="/">Home</a>
					<a href="/game">Game</a>
				</span>
				<a href="/balance" className={styles.coinBalance}>
					<span>{coins} 💎</span>
				</a>
			</nav>
		</header>
	);
};

export default Header;
