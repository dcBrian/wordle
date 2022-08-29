import ModalSvelte from '$lib/Modal.svelte';
import type { Box } from '$lib/types';
import { openModal } from 'svelte-modals';
import { cubicInOut } from 'svelte/easing';
import type { Updater } from 'svelte/store';

export const COLOR_GREEN = 'bg-green-400 border-green-400';
export const COLOR_YELLOW = 'bg-yellow-400 border-yellow-400';
export const COLOR_GRAY = 'bg-gray-500 border-gray-500';

export const _array = <U>(length: number, callbackfn: <T>(index: number) => U): U[] => {
	let res = new Array(length);
	for (let i = 0; i < res.length; i++) {
		res[i] = callbackfn(i);
	}
	return res;
};

export const _delay = (fn: () => void, delay?: number) => {
	return setTimeout(fn, delay || 800);
};

export const openDelayedModal = (correct: boolean, solution: Box[], delay?: number) => {
	_delay(() => openModal(ModalSvelte, { title: correct, answer: solution }), delay || 0);
};

export const pickRandomSolution = (list: any[]): any => {
	const random = Math.floor(Math.random() * list.length);

	return list[random];
};

export const formatGuess = (
	solution: Box[],
	input: Box[],
	update: (this: void, updater: Updater<{}>) => void,
	callback: () => void
) => {
	let counter = 0;
	let sol = solution.map((value) => ({ ...value }));

	let formatted: Box[] = input.map((e, i) => {
		if (sol[i].key === e.key) {
			sol[i].key = null;
			counter++;
			return { ...e, color: COLOR_GREEN };
		} else {
			return { ...e, color: COLOR_GRAY };
		}
	});
	if (counter === 5) {
		openDelayedModal(true, solution, 580);
		callback();
	} else {
		formatted.forEach((e) => {
			const index = sol.findIndex((s, i) => s.key === e.key);
			if (index > -1 && e.color === COLOR_GRAY) {
				e.color = COLOR_YELLOW;
				sol[index].key = null;
			}
		});
	}
	update((prev: {}) => {
		let newKeys = { ...prev } as any;
		formatted.forEach((e) => {
			if (!e?.key) return;

			const color = newKeys[e.key];
			if (!color) {
				newKeys[e.key] = e.color;
			} else if (e.color === COLOR_GREEN) {
				newKeys[e.key] = COLOR_GREEN;
			} else if (e.color === COLOR_YELLOW && color !== COLOR_GREEN) {
				newKeys[e.key] = COLOR_YELLOW;
			} else if (color !== COLOR_GREEN && color !== COLOR_YELLOW) {
				newKeys[e.key] = COLOR_GRAY;
			}
		});
		return newKeys;
	});

	return formatted as Box[];
};

export const fly = (_: HTMLElement, { duration, delay }: { duration: number; delay: number }) => {
	return {
		delay,
		duration,
		easing: cubicInOut,
		css: (t: number, u: number) => {
			return ` 
                    transform:  translateY(${u * 100}%); 
                    opacity: ${t}; 
                   `;
		}
	};
};
