import { useState } from "react";
import Reel from "../Reel/Reel";
import styles from "./SlotMachine.module.scss";
import { isBigWin, isRoyalFlush, isSmallWin } from "./gameLogic";

const SlotMachine = () => {
	const [reelIndices, setReelIndices] = useState([0, 0, 0]);
	const [isSpinning, setIsSpinning] = useState(false);

	// Track spins to make sure every tenth spin is a small win
	const [spinLosses, setSpinLosses] = useState<boolean[]>([]);

	const checkForWin = (results: number[]) => {
		if (isRoyalFlush(results)) {
			console.log("👑 ROYAL FLUSH! Jackpot!");
			// Add royal flush logic here (update score, show animation, etc.)
			setSpinLosses([]); // Reset spin losses after jackpot
			return true;
		}

		if (isBigWin(results)) {
			console.log("🎉 WINNER! All reels match!");
			// Add win logic here (update score, show animation, etc.)
			setSpinLosses([]); // Reset spin losses after big win
			return true;
		}

		if (isSmallWin(results)) {
			console.log("😊 Small win! Two reels match!");
			// Add small win logic here (update score, show animation, etc.)
			setSpinLosses([]); // Reset spin losses after small win
			return true;
		}

		console.log("No match. Try again!");
		setSpinLosses([...spinLosses, true]);
		console.log("spin losses array:", spinLosses);
		return false;
	};

	const handleSpinAll = (isRoyalFlushTest = false) => {
		if (isSpinning) return; // Prevent multiple spins at once

		setIsSpinning(true);

		// Decide final results for all reels
		const finalResults = [
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
		];

		if (isRoyalFlushTest) {
			// Force a royal flush for testing
			finalResults[0] = 1; // Assuming indices 1, 2, 3 represent a royal flush
			finalResults[1] = finalResults[0] + 1;
			finalResults[2] = finalResults[0] + 2;
			console.log("Forcing Royal Flush for testing:", finalResults);
		}

		if (spinLosses.length > 0 && (spinLosses.length + 1) % 10 === 0) {
			// Force a small win on every tenth spin
			finalResults[1] = finalResults[0];
			console.log("Forcing Small Win on 10th spin:", finalResults);
		}

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
			<h2>Royal Spin</h2>
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
			<div className={styles.buttonsContainer}>
				<button
					className={styles.spinButton}
					onClick={() => handleSpinAll(false)}
					disabled={isSpinning}
				>
					{isSpinning ? "SPINNING" : "SPIN"}
				</button>
				<button
					className={`${styles.spinButton} ${styles.testButton}`}
					onClick={() => handleSpinAll(true)}
					disabled={isSpinning}
				>
					RF (test)
				</button>
			</div>
		</div>
	);
};

export default SlotMachine;
