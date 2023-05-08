'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SideBarContent = ({ searches }: { searches: any[] }) => {
	return (
		<motion.div
			animate={{ translateX: 0 }}
			initial={{ translateX: '-100%' }}
			className='px-8 flex flex-col gap-4 min-w-[20%] text-left'
		>
			<button className='text-left text-mainfont'>+ New Search</button>
			{searches.length === 0 && <span>No searches...</span>}
		</motion.div>
	)
}

export default SideBarContent
