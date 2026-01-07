import styles from "./Balance.module.scss";

const Balance = () => {
	return (
		<div className={styles.balance}>
			<h2>Balance Page</h2>
			<p className="pageIntro">Check your current coin balance here.</p>
		</div>
	);
};

export default Balance;
