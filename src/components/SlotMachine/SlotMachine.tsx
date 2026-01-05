import { useState } from "react";
import Reel from "../Reel/Reel";
import styles from "./SlotMachine.module.scss";

const SlotMachine = () => {
	const [reelIndices, setReelIndices] = useState([0, 0, 0]);
	const [isSpinning, setIsSpinning] = useState(false);

	const checkForWin = (results: number[]) => {

		if (
			results[0] === results[1] &&
			results[1] === results[2]
		) {
			console.log("🎉 WINNER! All reels match!");
			// Add win logic here (update score, show animation, etc.)
			return true;
		}

		if (
			results[0] === results[1] ||
			results[0] === results[2] ||
			results[1] === results[2]
		) {
			console.log("😊 Small win! Two reels match!");
			// Add small win logic here (update score, show animation, etc.)
			return true;
		}

		console.log("No match. Try again!");
		return false;
	};

	const handleSpinAll = () => {
		if (isSpinning) return; // Prevent multiple spins at once

		setIsSpinning(true);

		// Decide final results for all reels
		const finalResults = [
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
		];

		// Animate spinning with rapid index changes
		let spinCount = 0;
		const spinInterval = setInterval(() => {
			// Randomly change all reel indices during spin animation
			setReelIndices([
				Math.floor(Math.random() * 12),
				Math.floor(Math.random() * 12),
				Math.floor(Math.random() * 12),
			]);
			spinCount++;

			if (spinCount >= 20) {
				clearInterval(spinInterval);
				// Set final results
				setReelIndices(finalResults);
				setIsSpinning(false);
				// Check for win after animation completes
				setTimeout(() => checkForWin(finalResults), 500);
			}
		}, 100);
	};

	return (
		<div className={styles.slotMachine}>
			<h2>Slot Machine</h2>
			<div className={styles.reelsContainer}>
				<Reel
					id={1}
					isSpinning={isSpinning}
					currentIndex={reelIndices[0]}
				/>
				<Reel
					id={2}
					isSpinning={isSpinning}
					currentIndex={reelIndices[1]}
				/>
				<Reel
					id={3}
					isSpinning={isSpinning}
					currentIndex={reelIndices[2]}
				/>
			</div>
			<button onClick={handleSpinAll} disabled={isSpinning}>
				{isSpinning ? "Spinning..." : "Spin All Reels"}
			</button>
		</div>
	);
};

export default SlotMachine;
