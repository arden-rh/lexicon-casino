import styles from "./Reel.module.scss";

interface ReelProps {
	id?: number;
}

const imageContent = [
	{
		id: 1,
		imgSrc: "src/assets/images/slotImages/cherry.png",
		imgAlt: "Cherry",
	},
	{
		id: 2,
		imgSrc: "src/assets/images/slotImages/lemon.png",
		imgAlt: "Lemon",
	},
	{
		id: 3,
		imgSrc: "src/assets/images/slotImages/orange.png",
		imgAlt: "Orange",
	},
	{ id: 4, imgSrc: "src/assets/images/slotImages/plum.png", imgAlt: "Plum" },
	{ id: 5, imgSrc: "src/assets/images/slotImages/bell.png", imgAlt: "Bell" },
	{ id: 6, imgSrc: "src/assets/images/slotImages/star.png", imgAlt: "Star" },
	{
		id: 7,
		imgSrc: "src/assets/images/slotImages/seven.png",
		imgAlt: "Seven",
	},
	{ id: 8, imgSrc: "src/assets/images/slotImages/wild.png", imgAlt: "Wild" },
	{ id: 9, imgSrc: "src/assets/images/slotImages/bar.png", imgAlt: "Bar" },
	{
		id: 10,
		imgSrc: "src/assets/images/slotImages/dollar.png",
		imgAlt: "Dollar",
	},
	{
		id: 11,
		imgSrc: "src/assets/images/slotImages/diamond.png",
		imgAlt: "Diamond",
	},
	{
		id: 12,
		imgSrc: "src/assets/images/slotImages/crown.png",
		imgAlt: "Crown",
	},
];

const Reel: React.FC<ReelProps> = ({ id }) => {

	const handleSpin = () => {
		// Logic to spin the reel and randomly select an image

	}


	return (
		<div className={styles.reel} id={`reel-${id}`}>
			<div className={styles.imageContainer}>
				{imageContent.map((image) => (
					<div
						className={styles.slot}
						key={image.id}
						id={`slot-${image.id}`}
					>
						<img src={image.imgSrc} alt={image.imgAlt} id={`img-${image.id}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Reel;
