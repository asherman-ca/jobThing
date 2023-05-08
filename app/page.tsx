import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import SignInButton from './components/SignInButton'

export default async function Home() {
	const session = await getServerSession(authOptions)

	if (!session) {
		return (
			<main className='bg-mainbg flex-1 p-8 flex justify-center items-center flex-col gap-4'>
				Sign in to start your search!
				<SignInButton />
			</main>
		)
	} else {
		redirect('/home')
	}
}
