import { prisma } from '@/prisma/Prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AppContent from './components/AppContent'
import { SessionType, AppType } from '@/app/util/types'

const fetchApplications = async (
	session: SessionType,
	searchId: string
): Promise<AppType[]> => {
	return prisma.application.findMany({
		where: {
			userId: session.user?.id,
			searchId: searchId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	}) as any
}

const page = async ({ params }: { params: { slug: string } }) => {
	const searchId = params.slug
	const session: SessionType | null = await getServerSession(authOptions)
	const applications: AppType[] = await fetchApplications(session!, searchId)

	return (
		<div className='w-full pr-8 pb-8'>
			<AppContent
				applications={applications}
				session={session!}
				searchId={searchId}
			/>
		</div>
	)
}

export default page
