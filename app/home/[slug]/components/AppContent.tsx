'use client'
import { useState } from 'react'
import AppForm from './AppForm'
import AppList from './AppList'

const AppContent = ({ searchId, applications, session }: any) => {
	const [filter, setFilter] = useState<string>('active')

	return (
		<>
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
		</>
	)
}

export default AppContent
