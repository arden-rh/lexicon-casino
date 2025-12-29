import Reel from "../Reel/Reel";
import styles from "./SlotMachine.module.scss";

const SlotMachine = () => {
	return <div className={styles.slotMachine}>
		<h2>Slot Machine Component</h2>
		<p>This is where the slot machine UI will go.</p>
		{/* Future implementation of slot machine logic and UI */}
		<div>
			{/* Placeholder for reels */}
			<Reel id={1} />
			{/* <Reel id={2} /> */}
			{/* <Reel id={3} /> */}
		</div>

	</div>;
};

export default SlotMachine;
