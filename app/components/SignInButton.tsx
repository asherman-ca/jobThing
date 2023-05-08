'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

const SignInButton = () => {
	const [effect, setEffect] = useState(false)

	return (
		<button
			className={`rounded-sm bg-white px-4 py-1 text-mainbg font-bold transition-all duration-200 hover:text-white hover:bg-green-500 hover:scale-105 ${
				effect && 'animate-wiggle'
			}`}
			onClick={() => {
				setEffect(true)
				signIn('google')
			}}
			onAnimationEnd={() => setEffect(false)}
		>
			Login
		</button>
	)
}

export default SignInButton
