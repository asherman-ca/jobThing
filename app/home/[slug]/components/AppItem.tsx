'use client'
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import { updateApplication } from '../actions'
import { IoSkullOutline } from 'react-icons/io5'

const AppItem = ({ app }: any) => {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)

	const handleClick = async () => {
		try {
			const newStatus = app.status === 'rejected' ? 'active' : 'rejected'
			setLoading(true)
			const update = await updateApplication(newStatus, app.id)
			router.refresh()
			router.push(`/home/${app.searchId}`)
		} catch (err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
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
					className={`h-5 w-5 cursor-pointer hover:text-green-500 ${
						loading && 'animate-spin text-green-500'
					}`}
					onClick={handleClick}
				/>
			) : (
				<BsCardText
					className={`h-5 w-5 cursor-pointer hover:fill-red-500 ${
						loading && 'animate-spin fill-red-500'
					}}`}
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
