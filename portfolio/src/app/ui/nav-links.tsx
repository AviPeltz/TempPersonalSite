'use client';

import styles from './nav-link.module.css';
import Link from 'next/link';
import Image from 'next/image';
import navBrand from '../../../public/NavBrand.png';

// // Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links =[
{ id: 0, name: 'About', href: '/', isSelected: true},
{ id: 1, name: 'Projects', href: '/projects', isSelected: false},
{ id: 2, name: 'Blog', href: '/blog', isSelected: false},
{ id: 3, name: 'Contact', href: '/contact', isSelected: false},
];

export default function NavBar() {


    return(
        <div className={styles.navbar}>
            <Link href='/'>
                <Image src={navBrand} alt="NavBrand" className={styles.navbrand}/>
            </Link>
            <div className={styles.navlinks}>
                {links.map(link => (
                    link.isSelected ?
                     <Link key={link.id} href={link.href} className={styles.navlinkSelected}>{link.name}</Link> 
                     : 
                     <Link key={link.id} href={link.href} className={styles.navlinkUnselected}>{link.name}</Link> 
                ))}

            </div>
        </div>
    );
}