'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

import createSearch from '../actions'

const NewSearchForm = ({ userId }: { userId: string }) => {
	const router = useRouter()
	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		const search = await createSearch(data, userId)
		router.refresh()
		router.push(`/home/${search.id}`)
		formRef.current?.reset()
	}

	return (
		<form onSubmit={handleSubmit} ref={formRef}>
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
