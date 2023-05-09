'use client'
import { useState } from 'react'
import AppForm from './AppForm'
import AppList from './AppList'
import { SessionType, AppType } from '@/app/util/types'

type PropType = {
	searchId: string
	applications: AppType[]
	session: SessionType
}

const AppContent = ({ searchId, applications, session }: PropType) => {
	const [filter, setFilter] = useState<string>('active')

	return (
		<div className='flex flex-col gap-8'>
			{/* @ts-ignore */}
			<AppForm
				searchId={searchId}
				userId={session.user.id}
				filter={filter}
				setFilter={setFilter}
			/>
			{applications.length == 0 && <div>Submit an application...</div>}
			{applications.length > 0 && (
				<AppList applications={applications} filter={filter} />
			)}
		</div>
	)
}

export default AppContent
