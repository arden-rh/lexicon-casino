import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps {
	link: string;
	text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ link, text }) => {
	return <a href={link} className={styles.buttonLink}>{text}</a>;
};

export default ButtonLink;
