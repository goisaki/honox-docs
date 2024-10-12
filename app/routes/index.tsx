import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
	const name = c.req.query('name') ?? 'Hono'
	return c.render(
		<div class={className}>
			<h1 class='font-bold text-3xl text-red-500'>Hello, {name}!</h1>
			<Counter />
		</div>,
		{ title: name }
	)
})
