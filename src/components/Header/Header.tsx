import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div>Casino Slots</div>
			<nav className={styles.nav}>
				<a href="/">Home</a> | <a href="/game">Game</a>
			</nav>
		</header>
	);
};

export default Header;
