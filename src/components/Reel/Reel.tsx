import styles from "./Reel.module.scss";

interface ReelProps {
	id: number;
	isSpinning: boolean;
	currentIndex: number;
}

const imageContent = [
	{
		id: 0,
		src: "src/assets/images/slotImages/cherry.png",
		alt: "Cherry",
	},
	{
		id: 1,
		src: "src/assets/images/slotImages/lemon.png",
		alt: "Lemon",
	},
	{
		id: 2,
		src: "src/assets/images/slotImages/orange.png",
		alt: "Orange",
	},
	{ id: 3, src: "src/assets/images/slotImages/plum.png", alt: "Plum" },
	{ id: 4, src: "src/assets/images/slotImages/bell.png", alt: "Bell" },
	{ id: 5, src: "src/assets/images/slotImages/star.png", alt: "Star" },
	{
		id: 6,
		src: "src/assets/images/slotImages/seven.png",
		alt: "Seven",
	},
	{ id: 7, src: "src/assets/images/slotImages/wild.png", alt: "Wild" },
	{ id: 8, src: "src/assets/images/slotImages/bar.png", alt: "Bar" },
	{
		id: 9,
		src: "src/assets/images/slotImages/dollar.png",
		alt: "Dollar",
	},
	{
		id: 10,
		src: "src/assets/images/slotImages/diamond.png",
		alt: "Diamond",
	},
	{
		id: 11,
		src: "src/assets/images/slotImages/crown.png",
		alt: "Crown",
	},
];

const Reel: React.FC<ReelProps> = ({ id, isSpinning, currentIndex }) => {
	// Calculate the translateY position based on current image
	const translateY = -currentIndex * 250; // Each image is 250px tall

	// Debug: Log what image should be showing
	const currentImage = imageContent[currentIndex];
	console.log(`Reel ${id}: index=${currentIndex}, showing=${currentImage?.alt || 'undefined'}`);

	return (
		<div className={styles.reel} id={`reel-${id}`}>
			<div className={styles.imageContainer}>
				<div
					className={`${styles.reelStrip} ${isSpinning ? styles.spinning : ''}`}
					style={{ transform: `translateY(${translateY}px)` }}
				>
					{imageContent.map((image) => (
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
