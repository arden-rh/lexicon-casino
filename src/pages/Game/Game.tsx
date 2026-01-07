import SlotMachine from "@/components/SlotMachine/SlotMachine";
import styles from "./Game.module.scss";

const Game = () => {
	return (
		<div className={styles.game}>
			<h2>Game Page</h2>
			<p className="pageIntro">Get ready to spin the reels and win big!</p>
			<SlotMachine />
		</div>
	);
};

export default Game;
