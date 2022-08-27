/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'10%, 90%': {
						transform: 'translate(-1px, 0)'
					},
					'20%, 80%': {
						transform: 'translate(3px, 0)'
					},
					'30%, 50%, 70%': {
						transform: 'translate(-6px, 0)'
					},
					'40%, 60%': {
						transform: 'translate(6px, 0)'
					}
				}
			},
			animation: {
				shake: 'shake 300ms ease'
			}
		}
	},
	plugins: []
};
