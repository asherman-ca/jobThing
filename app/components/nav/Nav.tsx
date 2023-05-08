'use client'
import { useState } from 'react'

const Nav = () => {
	const [effect, setEffect] = useState(false)
	return (
		<div className='bg-mainbg flex justify-between p-8'>
			<div className='text-2xl font-bold'>jobThing</div>
			<button
				className={`rounded-sm bg-white px-4 py-2 text-mainbg font-bold text-lg transition-all duration-200 hover:text-white hover:bg-green-500 hover:scale-110 ${
					effect && 'animate-wiggle'
				}`}
				onClick={() => {
					setEffect(true)
				}}
				onAnimationEnd={() => setEffect(false)}
			>
				Login
			</button>
		</div>
	)
}

export default Nav
