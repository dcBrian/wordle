import { _array } from '$lib/utils';
import { derived, writable } from 'svelte/store';
import { GAME_STATUS, type Box, type Position } from './lib/types';

function createPosition() {
	const { subscribe, update, set } = writable<Position>({ turn: 0, word: 0 });

	return {
		subscribe,
		incrementTurn: () => update((prev: Position) => Object.assign({}, prev, { ['turn']: prev.turn + 1 })),
		updateWord: (i: number) => update((prev: Position) => Object.assign({}, prev, { ['word']: prev.word + i })),
		next: () => update((prev: Position) => ({ turn: prev.turn + 1, word: 0 })),
		reset: () => set({ turn: 0, word: 0 })
	};
}

const createGuesses = () => {
	const initial = () => _array(6, (i: number) => _array(5, (j: number) => ({ id: `${i}.${j}` } as Box)));
	const { subscribe, set, update } = writable<Box[][]>(initial());

	return {
		subscribe,
		updateWord: (i: number, value: Box[]) => update((prev) => Object.assign([], prev, { [i]: value })),
		updateLetter: (i: number, deletion: boolean, value?: Box) =>
			update((prev: Box[][]) => {
				let index = prev[i].findIndex((e) => !e.key);
				if (-1 === index) {
					index = prev[i].length - 1;
				} else if (deletion) {
					index--;
				}
				let oldValue = prev[i][index];
				prev[i][index] = deletion ? { ...oldValue, key: null, color: null } : { ...oldValue, ...value };

				return prev;
			}),
		reset: () => set(initial())
	};
};
function createGameStatus() {
	const { subscribe, set } = writable<GAME_STATUS>(GAME_STATUS.INITIALIZED);
	return { subscribe, set };
}
function createJiggle() {
	const { subscribe, set } = writable<boolean>(false);
	return { subscribe, set };
}
function createUsed() {
	const { subscribe, update } = writable<any>({});
	return { subscribe, update };
}

export const status = createGameStatus();
export const jiggle = createJiggle();
export const used = createUsed();
export const guesses = createGuesses();
export const position = createPosition();
export const turn = derived(position, (d) => d.turn);
export const word = derived(position, (d) => d.word);
export const current = derived([guesses, turn], (d) => d[0][d[1]]);
