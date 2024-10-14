import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { Toc } from '../app/components/Toc'

export default jsxRenderer(({ children, title, headings }) => {
	if (!title || !headings) {
		throw new Error()
	}
	return (
		<html lang='en'>
			<head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<Link rel='stylesheet' href='/app/styles/tailwind.css' />
				<Script src='/app/client.ts' async />
			</head>
			<body>
				<div class='mx-auto max-w-[90rem] items-center px-4 sm:px-6 md:px-8'>
					<nav class='fixed top-0 mx-4 my-8 hidden h-svh w-80 lg:block'>
						<span class='font-bold text-xl'>HonoX Docs</span>
					</nav>
					<div class='lg:ml-[21rem] xl:mr-[21rem]'>
						<div class='prose mx-auto max-w-3xl px-4 py-8 xl:max-w-none'>
							{children}
						</div>
					</div>
					{/* 43rem = 45rem (90rem / 2) - 2rem (`md:px-8`) */}
					<nav class='fixed top-0 right-[max(2rem,_calc(50%_-_43rem))] mx-4 my-4 hidden h-[calc(100vh_-_3rem)] w-80 overflow-y-auto rounded-r-2xl border p-4 xl:block'>
						<span class='block pb-4 font-semibold text-gray-400 text-sm uppercase'>
							On this page
						</span>
						<Toc headings={headings} />
					</nav>
				</div>
			</body>
		</html>
	)
})
