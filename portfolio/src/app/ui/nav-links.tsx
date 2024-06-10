'use client';

import styles from './nav-link.module.css';
import Link from 'next/link';
import Image from 'next/image';
import navBrand from '../../../public/NavBrand.png';
import { useState } from 'react';

// // Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links =[
{ id: 0, name: 'About', href: '/', isSelected: true},
{ id: 1, name: 'Projects', href: '/projects', isSelected: false},
{ id: 2, name: 'Blog', href: '/blog', isSelected: false},
{ id: 3, name: 'Contact', href: '/contact', isSelected: false},
];

export default function NavBar() {
    const [selected, setSelected] = useState(links);

    function handleClick(e : any) {
        const key = e.target.key;
        const newLinks = selected.map(link => {
            if (link.id === key) {
                return {...link, isSelected: true};
            } else {
                return {...link, isSelected: false};
            }
        });
        setSelected(newLinks);
    }
    return(
        <div className={styles.navbar}>
            <div className={styles.navBrand}>
                <Link href='/'>
                        <Image src={navBrand} alt="navBrand" className={styles.navBrand}/>
                </Link>
            </div>
            <div className={styles.navlinks}>
                {links.map(link => (
                    link.isSelected ?
                    <div className={styles.navlinkSelected} key={link.id}>
                        <Link key={link.id} href={link.href} className={styles.navlinkSelected}>{link.name}</Link> 
                     </div>
                     : 
                     <div key={link.id} className={styles.navlinkUnselected}>
                        <Link onClick={handleClick} key={link.id} href={link.href} className={styles.navlinkUnselected}>{link.name}</Link> 
                     </div>
                ))}

            </div>
        </div>
    );
}