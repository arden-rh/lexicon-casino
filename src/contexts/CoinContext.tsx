import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface CoinContextType {
	coins: number;
	addCoins: (amount: number) => void;
	subtractCoins: (amount: number) => boolean;
	setCoins: (amount: number) => void;
}

const CoinContext = createContext<CoinContextType | undefined>(undefined);

const COIN_STORAGE_KEY = "casino-coins";

// eslint-disable-next-line react-refresh/only-export-components
export const useCoin = () => {
	const context = useContext(CoinContext);
	if (!context) {
		throw new Error("useCoin must be used within a CoinProvider");
	}
	return context;
};

interface CoinProviderProps {
	children: ReactNode;
}

export const CoinProvider: React.FC<CoinProviderProps> = ({ children }) => {
	// Initialize coins from localStorage or default to 100
	const [coins, setCoins] = useState<number>(() => {
		const saved = localStorage.getItem(COIN_STORAGE_KEY);
		return saved ? parseInt(saved, 10) : 100;
	});

	// Save to localStorage whenever coins change
	useEffect(() => {
		localStorage.setItem(COIN_STORAGE_KEY, coins.toString());
	}, [coins]);

	const addCoins = (amount: number) => {
		setCoins((prev) => prev + amount);
	};

	const subtractCoins = (amount: number): boolean => {
		if (coins >= amount) {
			setCoins((prev) => prev - amount);
			return true; // Successfully subtracted
		}
		return false; // Not enough coins
	};

	return (
		<CoinContext.Provider value={{ coins, addCoins, subtractCoins, setCoins }}>
			{children}
		</CoinContext.Provider>
	);
};
