import styles from "./Reel.module.scss";
import slotSymbols from "@/constants/slotSymbols";

interface ReelProps {
	id: number;
	isSpinning: boolean;
	currentIndex: number;
}



const Reel: React.FC<ReelProps> = ({ id, isSpinning, currentIndex }) => {
	// Calculate the translateY position based on current image
	const translateY = -currentIndex * 125; // Each image is 250px tall

	// Debug: Log what image should be showing
	const currentImage = slotSymbols[currentIndex];
	console.log(`Reel ${id}: index=${currentIndex}, showing=${currentImage?.alt || 'undefined'}`);

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
