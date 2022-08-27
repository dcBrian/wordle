export type Box = {
	id: string;
	key: string | null;
	color: string | null;
};

export type Position = {
	turn: number;
	word: number;
};

export enum GAME_STATUS {
	INITIALIZED,
	RELOADING,
	WIN,
	LOOSE
}
