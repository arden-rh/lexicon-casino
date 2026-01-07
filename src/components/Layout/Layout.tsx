import styles from "./Layout.module.scss";

import Header from "../Header/Header";
// import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.mainContent}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
