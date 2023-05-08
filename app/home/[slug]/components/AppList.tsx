'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import AppItem from './AppItem'

const AppList = ({ applications }: { applications: any[] }) => {
	const [order, setOrder] = useState('desc')

	return (
		<div className='flex flex-col gap-4'>
			{applications.map((app) => (
				<AppItem app={app} key={app.id} />
			))}
		</div>
	)
}

export default AppList
