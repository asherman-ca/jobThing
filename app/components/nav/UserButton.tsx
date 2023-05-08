'use client'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import React from 'react'

const UserButton = ({ image, name }: { image: string; name: string }) => {
	return (
		<div className='flex justify-center flex-col group'>
			<Image
				src={image}
				height={800}
				width={800}
				alt='user image'
				className='h-12 w-12 rounded-full cursor-pointer'
				onClick={() => signOut()}
			/>
			<span className='bg-offbg px-2 rounded-md -mt-1 text-sm group-hover:bg-red-500 group-hover:animate-wiggleinfinite'>
				{name.split(' ')[0]}
			</span>
		</div>
	)
}

export default UserButton
