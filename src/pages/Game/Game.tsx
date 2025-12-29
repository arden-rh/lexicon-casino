import SlotMachine from "@/components/SlotMachine/SlotMachine";
import styles from "./Game.module.scss";

const Game = () => {
	return (
		<div className={styles.game}>
			<h1>Game Page</h1>
			<p>Get ready to spin the reels and win big!</p>
			<SlotMachine />
		</div>
	);
};

export default Game;
