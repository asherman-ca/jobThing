'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BsCardList } from 'react-icons/bs'
import Link from 'next/link'

import NewSearchForm from './NewSearchForm'

const SideBarContent = ({
	searches,
	userId,
}: {
	searches: any[]
	userId: string
}) => {
	return (
		<motion.div className='px-6 flex flex-col text-left'>
			<NewSearchForm userId={userId} />
			{searches.length === 0 && <span>No searches...</span>}
			{searches.length > 0 &&
				searches.map((search) => (
					<Link
						href={`/home/${search.id}`}
						key={search.id}
						className='flex gap-2 items-center hover:bg-offbg p-2 rounded-lg'
					>
						<BsCardList className='h-5 w-5' />
						{search.title}
					</Link>
				))}
		</motion.div>
	)
}

export default SideBarContent
