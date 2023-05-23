import SideBarContent from './SideBarContent'
import { prisma } from '@/prisma/Prisma'
import { SessionType, SearchType } from '@/app/util/types'

const fetchSearches = async (session: SessionType): Promise<SearchType[]> => {
	return prisma.search.findMany({
		where: {
			userId: session.user.id,
		},
		include: {
			applications: true,
		},
	})
}

async function SideBar({ session }: { session: SessionType }) {
	const searches: SearchType[] = await fetchSearches(session)

	return <SideBarContent searches={searches} userId={session.user.id} />
}

export default SideBar
