'use client'
import React from 'react'
import { motion } from 'framer-motion'
import NewSearchForm from './NewSearchForm'

const SideBarContent = ({
	searches,
	userId,
}: {
	searches: any[]
	userId: string
}) => {
	return (
		<motion.div className='px-8 flex flex-col gap-4 min-w-[15%] text-left'>
			<NewSearchForm userId={userId} />
			{searches.length === 0 && <span>No searches...</span>}
			{searches.length > 0 &&
				searches.map((search) => <div key={search.id}>{search.title}</div>)}
		</motion.div>
	)
}

export default SideBarContent
