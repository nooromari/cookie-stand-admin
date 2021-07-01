import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Header(props){
    return(
        <header className='bg-green-400 w-full p-3'>
            <h1 className='text-2xl font-medium'>
                Cookie Stand Admin
            </h1>
            <Link href={props.path}>
                <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-xl" >{props.page}</a>
            </Link>
        </header>
    )
}

export default Header;