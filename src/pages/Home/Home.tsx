import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "./Home.module.scss";
import royalSpinCard from "@/assets/images/royal-spin-card.png";
import jungleRumbleCard from "@/assets/images/jungle-rumble-card.png";
import pirateIslandCard from "@/assets/images/pirate-island-card.png";

const Home = () => {
	return (
		<div className={styles.home}>
			<h2>Welcome to Casino Nova</h2>
			<p className="pageIntro">
				Your ultimate destination for thrilling slot games and big wins!
			</p>
			<h3>Check out our latest games</h3>
			<div className={styles.linkContainer}>
				<div className={styles.imageLinks}>
					<a
						href="/game"
						className={styles.imageLink}
						title="Link to Royal Spin game"
						aria-label="Link to Royal Spin"
					>
						<img
							src={royalSpinCard}
							alt="Royal Spin"
						/>
					</a>
					<a
						href="/game"
						className={styles.imageLink}
						title="Link to Jungle Rumble game"
						aria-label="Link to Jungle Rumble"
					>
						<img
							src={jungleRumbleCard}
							alt="Jungle Rumble"
						/>
					</a>
					<a
						href="/game"
						className={styles.imageLink}
						title="Link to Pirate Island game"
						aria-label="Link to Pirate Island"
					>
						<img
							src={pirateIslandCard}
							alt="Pirate Island"
						/>
					</a>
				</div>
				<div className={styles.buttonGroup}>
					<ButtonLink link="/game">Play now</ButtonLink>
					<ButtonLink link="/balance">Check Balance</ButtonLink>
				</div>
			</div>
		</div>
	);
};

export default Home;
