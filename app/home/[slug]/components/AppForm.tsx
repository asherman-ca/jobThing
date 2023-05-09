'use client'
import { FormEvent, useState, useRef, useTransition } from 'react'
import { BsFillSendCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { createApplication } from '../actions'

const AppForm = ({
	userId,
	searchId,
	filter,
	setFilter,
}: {
	searchId: string
	userId: string
	filter: string
	setFilter: (arg: string) => void
}) => {
	const router = useRouter()
	const formRef = useRef<HTMLFormElement>(null)
	const [loading, setLoading] = useState(false)
	const [isPending, startTransition] = useTransition()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		if (data.get('company') === '' || data.get('position') === '') return
		setLoading(true)
		const app = await createApplication(data, userId, searchId)
		router.refresh()
		router.push(`/home/${searchId}`)
		formRef.current?.reset()
		setLoading(false)
	}

	const handleFilter = () => {
		const newFilter = filter === 'active' ? 'rejected' : 'active'
		setFilter(newFilter)
	}

	return (
		<div className='flex justify-between'>
			<form onSubmit={handleSubmit} className='flex gap-4' ref={formRef}>
				<button type='submit'>
					<BsFillSendCheckFill
						className={`hover:fill-green-500 cursor-pointer h-5 w-5 rounded-md ${
							loading && 'animate-spin fill-green-500'
						}`}
					/>
				</button>
				<input
					type='text'
					name='company'
					id='company'
					className='bg-mainbg text-mainfont outline-none w-36'
					placeholder='Company'
				/>
				<input
					type='text'
					name='position'
					id='position'
					className='bg-mainbg text-mainfont outline-none w-36'
					placeholder='Position'
				/>
			</form>
			<button onClick={handleFilter}>Status</button>
		</div>
	)
}

export default AppForm
