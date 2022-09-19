import type { PageServerLoad } from '.svelte-kit/types/src/routes/todos/$types';
import { api } from './../api';

type Solution = { id: number; word: string };
export const load: PageServerLoad = async () => {
	const raw = (await api('GET', import.meta.env.VITE_PUBLIC_API_PATH)) as Solution[];

	const solutions = raw.map((e) =>
		e.word.split('').map((e: string, i: number) => ({ id: `${i}`, key: e, color: 'bg-green-400 border-green-400' }))
	);
	return { solutions: solutions };
};
