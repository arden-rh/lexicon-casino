import { useState, useRef } from "react";
import Confetti from "react-confetti";
import Reel from "../Reel/Reel";
import styles from "./SlotMachine.module.scss";
import {
	SPIN_COST,
	ROYAL_FLUSH_PAYOUT,
	BIG_WIN_PAYOUT,
	SMALL_WIN_PAYOUT,
	isRoyalFlush,
	isBigWin,
	isSmallWin,
	isJokerJackpot,
	bigWinMessage,
	smallWinMessage,
	royalFlushMessage,
} from "./gameLogic";
import { useCoin } from "../../contexts/CoinContext";
import ButtonLink from "../ButtonLink/ButtonLink";
import Button from "../Button/Button";

const SlotMachine = () => {
	const { coins, subtractCoins, addCoins } = useCoin();
	const slotMachineRef = useRef<HTMLDivElement>(null);
	const [reelIndices, setReelIndices] = useState([0, 0, 0]);
	const [isSpinning, setIsSpinning] = useState(false);
	const [showTest, setShowTest] = useState(false);
	const [gameMessage, setGameMessage] = useState<string>("");
	const [showConfetti, setShowConfetti] = useState(false);

	// Track spins to make sure every tenth spin is a small win
	const [spinLosses, setSpinLosses] = useState<boolean[]>([]);

	const checkForWin = (results: number[]) => {
		if (isRoyalFlush(results)) {
			console.log(royalFlushMessage);
			setGameMessage(royalFlushMessage);
			addCoins(ROYAL_FLUSH_PAYOUT);
			setSpinLosses([]); // Reset spin losses after jackpot
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
			return true;
		}

		if (isJokerJackpot(results)) {
			const jokerMultiplier = Math.floor(Math.random() * 10) + 2;
			const jokerWinPayout = BIG_WIN_PAYOUT * jokerMultiplier;
			const jokerJackpotMessage = `Joker Jackpot! Win multiplied by ${jokerMultiplier}! You win ${jokerWinPayout}!`;
			console.log(jokerJackpotMessage);
			setGameMessage(jokerJackpotMessage);
			addCoins(jokerWinPayout);
			setSpinLosses([]); // Reset spin losses after joker jackpot
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
			return true;
		}

		if (isBigWin(results)) {
			console.log(bigWinMessage);
			setGameMessage(bigWinMessage);
			addCoins(BIG_WIN_PAYOUT);
			setSpinLosses([]); // Reset spin losses after big win
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
			return true;
		}

		if (isSmallWin(results)) {
			console.log(smallWinMessage);
			setGameMessage(smallWinMessage);
			addCoins(SMALL_WIN_PAYOUT);
			setSpinLosses([]); // Reset spin losses after small win
			return true;
		}

		console.log("No match. Try again!");
		setGameMessage("No win this time. Good luck on the next spin!");
		setSpinLosses([...spinLosses, true]);
		console.log("spin losses array:", spinLosses);
		return false;
	};

	const handleSpinAll = (
		isRoyalFlushTest = false,
		isJokerJackpotTest = false
	) => {
		if (isSpinning) return; // Prevent multiple spins at once

		// Check if player has enough coins
		if (!subtractCoins(SPIN_COST)) {
			alert(`Not enough coins! You need ${SPIN_COST} coins to spin.`);
			return;
		}

		setIsSpinning(true);
		setGameMessage(""); // Clear previous messages

		// Decide final results for all reels
		const finalResults = [
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 12),
		];

		if (isRoyalFlushTest) {
			// Force a royal flush for testing
			finalResults[0] = 1;
			finalResults[1] = finalResults[0] + 1;
			finalResults[2] = finalResults[0] + 2;
			console.log("Forcing Royal Flush for testing:", finalResults);
		}

		if (isJokerJackpotTest) {
			// Force a joker jackpot for testing
			finalResults[0] = 0;
			finalResults[1] = 0;
			finalResults[2] = 0;
			console.log("Forcing Joker Jackpot for testing:", finalResults);
		}

		if (spinLosses.length === 9) {
			// Force a small win on the 10th consecutive loss
			finalResults[1] = finalResults[0];
			console.log("Forcing Small Win after 9 losses:", finalResults);
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
		<div className={styles.slotMachine} id="royal-spin" ref={slotMachineRef}>
			{showConfetti && slotMachineRef.current && (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					recycle={false}
					numberOfPieces={300}
					confettiSource={{
						x: slotMachineRef.current.offsetLeft + slotMachineRef.current.offsetWidth / 2 - 50,
						y: slotMachineRef.current.offsetTop,
						w: 100,
						h: 0
					}}
				/>
			)}
			<h3>
				<img
					src="src/assets/images/royal-spin-wide.png"
					alt="Royal Spin"
					className={styles.royalSpinImage}
				/>
			</h3>
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
			<div className={styles.gameMessageContainer}>
				{gameMessage ? gameMessage : `${SPIN_COST} 💎 / spin`}
			</div>
			<div className={styles.controlsContainer}>
				<div className={styles.coinDisplay}>
					<span>{coins} 💎</span>
					<Button
						className={styles.addButton}
						onClick={() => addCoins(50)}
					>
						+50
					</Button>
					<ButtonLink link="/balance">Balance</ButtonLink>
				</div>
				<div className={styles.buttonsContainer}>
					<Button
						className={styles.spinButton}
						onClick={() => handleSpinAll()}
						disabled={isSpinning || coins < SPIN_COST}
					>
						SPIN
					</Button>
					<Button
						onClick={() => setShowTest(!showTest)}
						className={styles.testToggle}
					>
						Show Test
					</Button>
					{showTest && (
						<div className={styles.testButtons}>
							<Button
								onClick={() => handleSpinAll(true, false)}
								disabled={isSpinning}
							>
								RF
							</Button>
							<Button
								onClick={() => handleSpinAll(false, true)}
								disabled={isSpinning}
							>
								JJ
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SlotMachine;
