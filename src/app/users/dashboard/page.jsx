import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
    const user = await authUserSession()

    return (
        <div className="text-color-primary flex flex-col mt-8 justify-center items-center">
            <h5 className='text-2xl font-bold'>Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width={250} height={250}/>
            <div className='flex flex-wrap py-8 gap-4'>
                <Link 
                    className='bg-color-accent text-color-dark font-bold py-3 px-4 rounded text-xl'
                    href="/users/dashboard/collection"
                >
                    My Collection
                </Link>
                <Link 
                    className='bg-color-accent text-color-dark font-bold py-3 px-4 rounded text-xl'
                    href="/users/dashboard/comment"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )
}