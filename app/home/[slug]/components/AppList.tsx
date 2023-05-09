'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import AppItem from './AppItem'

const AppList = ({
	applications,
	filter,
}: {
	applications: any[]
	filter: string
}) => {
	const displayItems = applications.filter((app) => app.status === filter)

	return (
		<div className='flex flex-col gap-4'>
			{displayItems.map((app) => (
				<AppItem app={app} key={app.id} />
			))}
		</div>
	)
}

export default AppList
