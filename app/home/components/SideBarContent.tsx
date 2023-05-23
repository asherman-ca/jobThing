'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BsCardList } from 'react-icons/bs'
import Link from 'next/link'
import NewSearchForm from './NewSearchForm'
import { SearchType } from '@/app/util/types'

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
			{searches.length === 0 && <span className='p-2'>No searches...</span>}
			{searches.length > 0 &&
				searches.map((search) => (
					<Link
						href={`/home/${search.id}`}
						key={search.id}
						className='flex gap-2 items-center hover:bg-offbg p-2 rounded-lg'
					>
						<BsCardList className='h-5 w-5' />
						<div className='relative'>
							<div className='absolute -top-3 -right-7 text-xs bg-gray-200/75 text-black rounded-full p-1 min-w-[25px] min-h-[25px] text-center'>
								{search.applications.length}
							</div>
							{search.title}
						</div>
					</Link>
				))}
		</motion.div>
	)
}

export default SideBarContent
