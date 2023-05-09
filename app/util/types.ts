export type AppType = {
	company: string
	position: string
	createdAt: string
	status: string
	searchId: string
	id: string
	location: string
}

export type SearchType = {
	title: string
	id: string
}

export type FilterType = string

export type SessionType = {
	user: {
		id: string
		email: string
		name: string
		image: string
	}
}
