import AppItem from './AppItem'
import { AppType } from '@/app/util/types'

const AppList = ({
	applications,
	filter,
}: {
	applications: AppType[]
	filter: string
}) => {
	const displayItems = applications.filter((app) => app.status === filter)

	return (
		<div className='flex flex-col gap-4'>
			{displayItems.map((app) => (
				<AppItem application={app} key={app.id} />
			))}
		</div>
	)
}

export default AppList
