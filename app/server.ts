import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp({
	ROUTES: import.meta.glob(
		[
			// default
			'/app/routes/**/!(_*|$*|*.test|*.spec).(ts|tsx|md|mdx)',
			'/app/routes/.well-known/**/!(_*|$*|*.test|*.spec).(ts|tsx|md|mdx)',
			// custom
			'/docs/**/!(_*|$*|*.test|*.spec).(md|mdx)',
		],
		{ eager: true }
	),
	RENDERER: import.meta.glob(
		[
			// default
			'/app/routes/**/_renderer.tsx',
			// custom
			'/docs/**/_renderer.tsx',
		],
		{
			eager: true,
		}
	),
})

showRoutes(app)

export default app
