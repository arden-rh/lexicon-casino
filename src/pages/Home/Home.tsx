import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<h2>Welcome to Casino Nova</h2>
			<p className="pageIntro">Your ultimate destination for thrilling slot games and big wins!</p>
			<div className={styles.linkContainer}>
				<ButtonLink link="/game">Play Now</ButtonLink>
				<ButtonLink link="/balance">Check Balance</ButtonLink>
			</div>

		</div>
	);
};

export default Home;

