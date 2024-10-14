import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
	content: ['./app/**/*.tsx', './docs/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
			},
		},
	},
	plugins: [typography],
} satisfies Config
