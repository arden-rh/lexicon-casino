import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps {
	link: string;
	children?: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ link, children }) => {
	return <a href={link} className={styles.buttonLink}>{children}</a>;
};

export default ButtonLink;
