// Prize values and messages for different win types
export const smallWinPrize = 10;
export const bigWinPrize = 50;
export const royalFlushPrize = 1000;

export const smallWinMessage = "Congratulations! You won a small prize!";
export const bigWinMessage = "Amazing! You hit a big win!";
export const royalFlushMessage = "Jackpot! Royal Flush! You're a legend!";

// Conditions for different win types
export const isSmallWin = (results: number[]) =>
	results[0] === results[1] || results[1] === results[2] || results[0] === results[2];

export const isBigWin = (results: number[]) =>
	results[0] === results[1] && results[1] === results[2];

export const isRoyalFlush = (results: number[]) =>
	results.every((index) => index >= 1 && index <= 3);


