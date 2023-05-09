import { prisma } from '@/prisma/Prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import AppForm from './components/AppForm'
import AppList from './components/AppList'
import AppContent from './components/AppContent'

const fetchApplications = async (session: any, searchId: string) => {
	return prisma.application.findMany({
		where: {
			userId: session.user?.id,
			searchId: searchId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})
}

const page = async ({ params }: { params: { slug: string } }) => {
	const searchId = params.slug
	const session = await getServerSession(authOptions)
	const applications = await fetchApplications(session, searchId)

	return (
		<div className='flex flex-col gap-4 flex-1 pr-8'>
			<AppContent
				applications={applications}
				session={session}
				searchId={searchId}
			/>
		</div>
	)
}

export default page
