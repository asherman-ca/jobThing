'use client'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'

const AppItem = ({ app }: any) => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			key={app.id}
			className='w-full flex gap-4'
		>
			<BsCardText className='h-5 w-5' />
			<div className='w-36'>{app.company}</div>
			<div className='w-36'>{app.position}</div>
			<TimeAgo date={app.createdAt} className='w-36' />
		</motion.div>
	)
}

export default AppItem
