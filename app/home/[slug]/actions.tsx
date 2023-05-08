'use server'
import { prisma } from '@/prisma/Prisma'

export default async function createApplication(
	formData: FormData,
	userId: string,
	searchId: string
) {
	const application = await prisma.application.create({
		data: {
			company: formData.get('company') as string,
			position: formData.get('position') as string,
			searchId,
			userId,
		},
	})
	return application
}
