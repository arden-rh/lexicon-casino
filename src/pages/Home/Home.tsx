import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<h1>Welcome to Casino Slots</h1>
			<p>Your ultimate destination for thrilling slot games and big wins!</p>
			<div>
				<a href="/game">Play Now</a>
				<button>Add Coins</button>
			</div>

		</div>
	);
};

export default Home;

