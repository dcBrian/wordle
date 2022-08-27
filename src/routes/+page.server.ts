import type { PageServerLoad } from '.svelte-kit/types/src/routes/todos/$types';
import { api } from './../api';

type Letter = { key: string };
type Solution = { id: number; word: string };
export const load: PageServerLoad = async () => {
	return {
		solutions: (await api('GET', import.meta.env.VITE_PUBLIC_BASE_PATH + 'solutions')) as Solution[],
		letters: (await api('GET', import.meta.env.VITE_PUBLIC_BASE_PATH + 'letters')) as Letter[]
	};
};
