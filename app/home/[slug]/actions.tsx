'use server'
import { prisma } from '@/prisma/Prisma'

export async function createApplication(
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

export async function updateApplication(status: string, appId: string) {
	const application = await prisma.application.update({
		where: {
			id: appId,
		},
		data: {
			status,
		},
	})
	return application
}

export async function deleteApplication(appId: string) {
	const application = await prisma.application.delete({
		where: {
			id: appId,
		},
	})
	return application
}
