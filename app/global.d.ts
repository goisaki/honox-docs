import {} from 'hono'

type Head = {
	title?: string
}

declare module 'hono' {
	interface Env {
		// biome-ignore lint/complexity/noBannedTypes:
		Variables: {}
		// biome-ignore lint/complexity/noBannedTypes:
		Bindings: {}
	}
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType:
		(
			content: string | Promise<string>,
			head?: Head
		): Response | Promise<Response>
	}
}
