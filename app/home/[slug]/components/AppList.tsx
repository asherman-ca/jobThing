'use client'
import { motion } from 'framer-motion'

import React from 'react'

const AppList = ({ applications }: { applications: any[] }) => {
	return (
		<div className='flex flex-col gap-4'>
			{applications.map((app) => (
				<motion.div
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					key={app.id}
				>
					{app.company}
				</motion.div>
			))}
		</div>
	)
}

export default AppList
