'use client'
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import { updateApplication } from '../actions'
import { IoSkullOutline } from 'react-icons/io5'
import { AppType } from '@/app/util/types'

const AppItem = ({ application }: { application: AppType }) => {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)

	const handleClick = async () => {
		try {
			const newStatus =
				application.status === 'rejected' ? 'active' : 'rejected'
			setLoading(true)
			const update = await updateApplication(newStatus, application.id)
			router.refresh()
			router.push(`/home/${application.searchId}`)
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
			key={application.id}
			className='w-full flex gap-4'
		>
			{application.status === 'rejected' ? (
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
			<div className='w-36'>{application.company}</div>
			<div className='w-36'>{application.position}</div>
			<TimeAgo date={application.createdAt} className='w-36' />
		</motion.div>
	)
}

export default AppItem
