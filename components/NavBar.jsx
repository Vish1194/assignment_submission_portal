import Link from 'next/link'
import { signOut , auth } from '@/auth';

const NavBar = async () => {
    //Checks whether user/admin is logged in and displays appropriate options.
    const session = await auth();
  return (
    <nav className="bg-grad1 py-2 px-4 flex items-center">
        <div className="w-full">
            <h1 className="group text-white text-3xl font-bold relative">
                <span className='tracking-widest'>AST</span>
                <span className='hidden text-lg group-hover:block absolute top-14 bg-lime-950 px-2 py-1 rounded-md'>Assignment Submission Portal</span>
            </h1>
        </div>
        {
            //if there is a session, 'logout' button is displayed.
            session && session.user ?
            <div className="flex items-center justify-end w-full">
                {/* This for is used to Signout */}
                <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                    >
                    <button type="submit" className="text-lg font-bold text-white bg-gray-900 rounded-lg px-3 py-1 shadow-md hover:shadow-lg">Sign Out</button>
                </form>
            </div>
            :
            <ul className="flex items-center justify-end w-full">
                <li className="mx-4"><Link href="/" className="text-white text-xl font-semibold hover:underline underline-offset-4">Users</Link></li>
                <li className="mx-4"><Link href="/admin" className="text-white text-xl font-semibold hover:underline underline-offset-4">Admin</Link></li>
            </ul> 
        }
    </nav>
  )
}

export default NavBar