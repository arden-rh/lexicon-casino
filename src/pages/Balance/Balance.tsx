import styles from "./Balance.module.scss";
import { useCoin } from "../../contexts/CoinContext";
import { useState } from "react";

const Balance = () => {
	const { coins, addCoins, setCoins } = useCoin();

	const [warning, setWarning] = useState("");

	return (
		<div className={styles.balance}>
			<h2>Balance Page</h2>
			<p className="pageIntro">
				Check your current coin balance and add coins here.
			</p>
			<div className={styles.balanceContainer}>
				<p>Your current balance is</p>
				<span>{coins} 💎</span>
				<div className={styles.addCoinButtons}>
					<p>Add more coins to your balance</p>
					<button onClick={() => addCoins(100)}>Add 100 Coins</button>
					<button onClick={() => addCoins(200)}>Add 200 Coins</button>
					<button onClick={() => addCoins(500)}>Add 500 Coins</button>
					<form className={styles.customAmountForm}>
						<label htmlFor="customAmount">Custom Amount</label>
						<input
							type="number"
							id="customAmount"
							name="customAmount"
							min="1"
							max="10000"
							placeholder="Enter amount"
						/>
						{warning && <span>{warning}</span>}
						<button
							type="button"
							onClick={() => {
								const input = document.getElementById(
									"customAmount"
								) as HTMLInputElement;
								const amount = parseInt(input.value, 10);
								if (!isNaN(amount) && amount > 0 && amount <= 10000) {
									addCoins(amount);
									input.value = "";
									setWarning("");
								} else {
									setWarning("Please enter a valid amount between 1 and 10000.");
								}
							}}
						>
							Add Coins
						</button>
					</form>
					<button onClick={() => setCoins(100)} className={styles.resetBtn}>Reset Coins to 100</button>
				</div>
			</div>
		</div>
	);
};

export default Balance;
