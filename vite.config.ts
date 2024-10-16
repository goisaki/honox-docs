import build from '@hono/vite-build/cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import slug from 'rehype-slug'
import { toc } from './rehype/toc'

export default defineConfig(({ mode }) => ({
	build: {
		rollupOptions:
			mode === 'client'
				? {
						input: ['/app/styles/tailwind.css'],
					}
				: undefined,
	},
	plugins: [
		honox({ devServer: { adapter } }),
		mdx({
			jsxImportSource: 'hono/jsx',
			rehypePlugins: [slug, toc],
		}),
		build(),
	],
}))
