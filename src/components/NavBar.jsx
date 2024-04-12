import Link from 'next/link'

function NavBar() {
    return (
        <nav className='bg-slate-800'>
            <div className='container mx-auto flex justify-between items-center py-1 mb-1'>
                <Link href='/'>
                <h3 className='text-2xl'>NextToDoMySQL</h3>
                </Link>
                <ul>
                    <li>
                        <Link href='/new'
                            className='text-sky-500 hover:text-sky-300'
                        >
                            New
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar