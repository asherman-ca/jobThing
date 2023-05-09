'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { BsCardText } from 'react-icons/bs'
import { updateApplication, deleteApplication } from '../actions'
import { IoSkullOutline } from 'react-icons/io5'
import { BsTrash } from 'react-icons/bs'
import { AppType } from '@/app/util/types'

const AppItem = ({ application }: { application: AppType }) => {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	const [deleteLoading, setDeleteLoading] = useState<boolean>(false)

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

	const handleDelete = async () => {
		let confirmed = confirm('Are you sure you want to delete this application?')
		if (!confirmed) return
		try {
			setDeleteLoading(true)
			const deleted = await deleteApplication(application.id)
			router.refresh()
			router.push(`/home/${application.searchId}`)
		} catch (err) {
			console.log(err)
			alert(err)
		} finally {
			setDeleteLoading(false)
		}
	}

	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			key={application.id}
			className='flex items-center gap-8 w-full justify-between'
		>
			<div className='flex gap-8'>
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
				<div className='w-36 truncate'>{application.company}</div>
				<div className='w-36 truncate'>{application.position}</div>
				<div className='w-36 truncate'>{application.location}</div>

				<div className='w-36 truncate'>{application.status}</div>
				<TimeAgo date={application.createdAt} />
			</div>
			<div>
				<BsTrash
					className={`h-5 w-5 hover:fill-red-500 cursor-pointer ${
						deleteLoading && 'animate-spin fill-red-500'
					}`}
					onClick={handleDelete}
				>
					x
				</BsTrash>
			</div>
		</motion.div>
	)
}

export default AppItem
