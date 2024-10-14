import {} from 'hono'
import type { Heading } from '../rehype/toc'

type Head = {
	title?: string,
	headings?: Heading[]
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
