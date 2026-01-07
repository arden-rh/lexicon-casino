import styles from "./Reel.module.scss";
import slotSymbols from "@/constants/slotSymbols";

interface ReelProps {
	id: number;
	isSpinning: boolean;
	currentIndex: number;
}



const Reel: React.FC<ReelProps> = ({ id, isSpinning, currentIndex }) => {
	// Calculate the translateY position based on current image
	const translateY = -currentIndex * 125;

	return (
		<div className={styles.reel} id={`reel-${id}`}>
			<div className={styles.imageContainer}>
				<div
					className={`${styles.reelStrip} ${isSpinning ? styles.spinning : ''}`}
					style={{ transform: `translateY(${translateY}px)` }}
				>
					{slotSymbols.map((image) => (
						<div
							key={image.id}
							id={`slot-${image.id}`}
							className={styles.slotItem}
						>
							<img src={image.src} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Reel;
