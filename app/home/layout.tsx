import React from 'react'
import SideBar from './components/SideBar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { SessionType } from '@/app/util/types'

const layout = async ({ children }: { children: React.ReactNode }) => {
	const session: SessionType | null = await getServerSession(authOptions)

	if (session) {
		return (
			<div className='bg-mainbg flex-1 w-full flex'>
				{/* @ts-ignore */}
				<SideBar session={session} />
				{children}
			</div>
		)
	} else {
		redirect('/')
	}
}

export default layout
