import Image from 'next/image'
import resume from '@/public/resume.png'
import SignInButton from '../SignInButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserButton from './UserButton'

const Nav = async () => {
	const session = await getServerSession(authOptions)
	console.log('SESSION', session)

	return (
		<div className='bg-mainbg flex justify-between items-center p-8'>
			<div className='text-2xl font-bold flex gap-4 items-center'>
				<Image src={resume} alt='resume' className='h-12 w-12' />
				JobThing
			</div>
			{!session?.user ? (
				<SignInButton />
			) : (
				<UserButton image={session.user.image!} name={session.user.name!} />
			)}
		</div>
	)
}

export default Nav
