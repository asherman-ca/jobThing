import Image from 'next/image'
import resume from '@/public/resume.png'
import SignInButton from '../SignInButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Nav = async () => {
	const session = await getServerSession(authOptions)
	console.log('SESSION', session)

	return (
		<div className='bg-mainbg flex justify-between items-center p-4'>
			<div className='text-2xl font-bold flex gap-4 items-center'>
				<Image src={resume} alt='resume' className='h-12 w-12' />
				jobThing
			</div>
			<SignInButton />
		</div>
	)
}

export default Nav
