'use client'
import { useRouter } from 'next/navigation'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import { updateApplication } from '../actions'
import { IoSkullOutline } from 'react-icons/io5'

const AppItem = ({ app }: any) => {
	const router = useRouter()

	const handleClick = async () => {
		const newStatus = app.status === 'rejected' ? 'active' : 'rejected'
		const update = await updateApplication(newStatus, app.id)
		router.refresh()
		router.push(`/home/${app.searchId}`)
	}

	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			key={app.id}
			className='w-full flex gap-4'
		>
			{app.status === 'rejected' ? (
				<IoSkullOutline
					className='h-5 w-5 cursor-pointer'
					onClick={handleClick}
				/>
			) : (
				<BsCardText
					className='h-5 w-5 cursor-pointer hover:fill-red-500'
					onClick={handleClick}
				/>
			)}
			<div className='w-36'>{app.company}</div>
			<div className='w-36'>{app.position}</div>
			<TimeAgo date={app.createdAt} className='w-36' />
		</motion.div>
	)
}

export default AppItem
