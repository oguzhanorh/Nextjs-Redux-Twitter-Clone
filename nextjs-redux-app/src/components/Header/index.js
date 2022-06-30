import Link from 'next/link'
import style from './Header.module.css'

import {Icon} from 'components'

export default function Header(){

    return <header className={style.header}>
        
        <Link href={'/'}>
            <a className={style.logo} ><Icon name={'logo'} /></a>
        </Link>
        

        <ul>
            <li><Link href={'/'}><a>Ana Akış</a></Link></li>
            <li><Link href={'/explore'}><a>Keşfet</a></Link></li>
        </ul>
    </header>
}