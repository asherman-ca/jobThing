import SideBarContent from './SideBarContent'
import { prisma } from '@/prisma/Prisma'

const fetchSearches = async (session: any) => {
	return prisma.search.findMany({
		where: {
			userId: session.user.id,
		},
	})
}

async function SideBar({ session }: any) {
	const searches = await fetchSearches(session)

	return <SideBarContent searches={searches} />
}

export default SideBar
