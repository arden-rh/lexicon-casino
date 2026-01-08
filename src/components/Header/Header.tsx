import styles from "./Header.module.scss";
import { useCoin } from "../../contexts/CoinContext";

const Header = () => {
	const { coins } = useCoin();

	return (
		<header className={styles.header}>
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
