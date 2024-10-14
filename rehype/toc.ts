import type { Root } from 'hast'
import { toString as mdastToString } from 'mdast-util-to-string'
import { valueToEstree } from 'estree-util-value-to-estree'
import type { MdxjsEsm } from 'mdast-util-mdxjs-esm'

export type Heading = {
	depth: number
	title: string
	id: string
}

export function toc() {
	return (root: Root) => {
		const title = mdastToString(
			root.children.find(
				(content) => content.type === 'element' && content.tagName === 'h1'
			)
		)
		const headings: Heading[] = root.children
			.filter((content) => content.type === 'element')
			.filter((h) => ['h2', 'h3'].includes(h.tagName))
			.map((h) => ({
				depth: { h2: 0, h3: 1 }[h.tagName as 'h2' | 'h3'],
				title: mdastToString(h),
				id: h.properties.id?.toString() || '',
			}))
		root.children.push(valueToExportNode('title', title))
		root.children.push(valueToExportNode('headings', headings))
	}
}

function valueToExportNode(name: string, value: unknown): MdxjsEsm {
	return {
		type: 'mdxjsEsm',
		value: '',
		data: {
			estree: {
				type: 'Program',
				sourceType: 'module',
				body: [
					{
						type: 'ExportNamedDeclaration',
						declaration: {
							type: 'VariableDeclaration',
							kind: 'const',
							declarations: [
								{
									type: 'VariableDeclarator',
									id: {
										type: 'Identifier',
										name,
									},
									init: valueToEstree(value),
								},
							],
						},
						specifiers: [],
					},
				],
			},
		},
	}
}
