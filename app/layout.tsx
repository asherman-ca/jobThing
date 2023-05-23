import './globals.css'
import { Inter, Poppins } from 'next/font/google'

import Nav from './components/nav/Nav'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
	weight: ['500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
})

export const metadata = {
	title: 'JobThing',
	description: 'A job application tracker thing',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='h-screen flex'>
			<body
				className={`flex-1 flex flex-col ${poppins.className} text-mainfont bg-mainbg w-full overflow-auto scrollbar-hide`}
			>
				{/* @ts-ignore */}
				<Nav />
				{children}
			</body>
		</html>
	)
}
