'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef, useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'

import createSearch from '../actions'

const NewSearchForm = ({ userId }: { userId: string }) => {
	const router = useRouter()
	const formRef = useRef<HTMLFormElement>(null)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		if (data.get('name') === '') return
		setLoading(true)
		try {
			const search = await createSearch(data, userId)
			router.refresh()
			router.push(`/home/${search.id}`)
			formRef.current?.reset()
		} catch (error) {
			alert(error)
		}
		setLoading(false)
	}

	return (
		<form
			onSubmit={handleSubmit}
			ref={formRef}
			className='px-2 flex items-center gap-2'
		>
			<button type='submit' disabled={loading}>
				<BsFillCheckSquareFill
					className={`hover:fill-green-500 hover:bg-white cursor-pointer h-5 w-5 rounded-md ${
						loading && 'animate-spin fill-green-500 bg-white'
					}`}
				/>
			</button>
			<input
				type='text'
				name='name'
				id='name'
				placeholder='New Search'
				className='bg-mainbg text-mainfont outline-none'
			/>
		</form>
	)
}

export default NewSearchForm
