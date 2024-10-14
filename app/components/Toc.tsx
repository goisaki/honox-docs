import type { Heading } from '../../rehype/toc'

export function Toc({ headings }: { headings: Heading[] }) {
	return (
		<ul className='space-y-2'>
			{headings.map((h) => (
				<li key={h.id} className={`ml-${h.depth * 2} text-sm`}>
					{/* ml-0 ml-2 */}
					<a href={`#${h.id}`} className=' text-blue-600 hover:underline'>
						{h.title}
					</a>
				</li>
			))}
		</ul>
	)
}
