'use client'
import { useState } from 'react'
import Image from 'next/image'
import resume from '@/public/resume.png'

const Nav = () => {
	const [effect, setEffect] = useState(false)
	return (
		<div className='bg-mainbg flex justify-between p-4'>
			<div className='text-2xl font-bold flex gap-4 items-center'>
				<Image src={resume} alt='resume' className='h-10 w-10' />
				jobThing
			</div>
			<button
				className={`rounded-sm bg-white px-4 py-2 text-mainbg font-bold transition-all duration-200 hover:text-white hover:bg-green-500 hover:scale-105 ${
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
