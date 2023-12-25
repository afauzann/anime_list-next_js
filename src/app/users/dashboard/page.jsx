import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'

export default async function Page() {
    const user = await authUserSession()

    return (
        <div className="text-color-primary">
            <h3>Dashboard</h3>
            <h5>Welcome... {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
        </div>
    )
}