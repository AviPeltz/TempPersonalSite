'use client';

import styles from './nav-link.module.css';
import Link from 'next/link';
import Image from 'next/image';
import navBrand from '../../../public/NavBrand.png';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

// // Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links =[
{ id: 0, name: 'About', href: '/', isSelected: true},
{ id: 1, name: 'Projects', href: '/projects', isSelected: false},
{ id: 2, name: 'Blog', href: '/blog', isSelected: false},
{ id: 3, name: 'Contact', href: '/contact', isSelected: false},
];

export default function NavBar() {
    const pathname = usePathname()

    return(
        <div className={styles.navbar}>
            <div className={styles.navBrand}>
                <Link href='/'>
                    <Image src={navBrand} alt="navBrand" className={styles.navBrand} quality={100}/>
                </Link>
            </div>
            <div className={styles.nav}>
                <div className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
                    <Link className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`} href="/">
                        About
                    </Link>
                </div>
                <div className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`}>
                    <Link className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`} href="/projects">
                        Projects
                    </Link>
                </div>
                <div className={`${styles.navLink} ${pathname === '/blog' ? styles.active : ''}`}>
                    <Link className={`${styles.navLink} ${pathname === '/blog' ? styles.active : ''}`} href="/blog">
                        Blog
                    </Link>
                </div>
                <div className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
                    <Link className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`} href="/contact">
                        Contact
                    </Link>
                </div>
                {/*
                {links.map(link => (
                    link.isSelected ?
                    <div className={styles.navlinkSelected} key={link.id}>
                        <Link key={link.id} href={link.href} className={styles.navlinkSelected}>{link.name}</Link> 
                     </div>
                     : 
                     <div key={link.id} className={styles.navlinkUnselected} >
                        <Link onClick={handleClick} key={link.id} href={link.href} className={styles.navlinkUnselected}>{link.name}</Link> 
                     </div>
                ))}
                */}
            </div>
        </div>
    );
}