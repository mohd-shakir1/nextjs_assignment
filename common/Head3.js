import Link from 'next/link';
import React from 'react';
import Styles from '../styles/Courses.module.css'

const Head3 = () => {
    return ( 
        <div className='col-2'>
       <div className='mt-2'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
            <Link href='/' className='nav-link'><img className={Styles.w_10} src='/facebook-f.svg' alt='..'></img></Link>
            </li>
        </ul>
       </div>
        </div>
     )
}
 
export default Head3;