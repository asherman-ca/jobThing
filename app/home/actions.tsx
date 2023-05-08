'use server'
import { prisma } from '@/prisma/Prisma'

export default async function createSearch(formData: FormData, userId: string) {
	const search = await prisma.search.create({
		data: {
			title: formData.get('name') as string,
			userId,
		},
	})
	return search
}
