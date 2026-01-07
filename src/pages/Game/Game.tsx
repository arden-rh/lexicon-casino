import SlotMachine from "@/components/SlotMachine/SlotMachine";
import styles from "./Game.module.scss";

const Game = () => {
	return (
		<div className={styles.game}>
			<h2>Game Page</h2>
			<p className="pageIntro">Try your luck in the Casino Nova slot machine!</p>
			<SlotMachine  />
		</div>
	);
};

export default Game;
