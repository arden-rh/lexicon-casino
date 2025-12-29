import { useState } from "react";
import Reel from "../Reel/Reel";
import styles from "./SlotMachine.module.scss";

const SlotMachine = () => {
	const [reelIndices, setReelIndices] = useState([0, 0, 0]);
	const [isSpinning, setIsSpinning] = useState(false);
	const [results, setResults] = useState([0, 0, 0]);

	const checkForWin = () => {
		console.log("Checking matching results:", results);
		console.log("reel 1", reelIndices[0]);
		console.log("reel 2", reelIndices[1]);
		console.log("reel 3", reelIndices[2]);

		if (
			reelIndices[0] === reelIndices[1] &&
			reelIndices[1] === reelIndices[2]
		) {
			console.log("🎉 WINNER! All reels match!");
			// Add win logic here (update score, show animation, etc.)
			return true;
		}

		if (
			reelIndices[0] === reelIndices[1] ||
			reelIndices[0] === reelIndices[2] ||
			reelIndices[1] === reelIndices[2]
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

		// Decide final results for all reels upfront
		setResults([
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
		]);
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
				setReelIndices(results);
				setIsSpinning(false);
				// Check for win after animation completes
				setTimeout(() => checkForWin(), 500);
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
