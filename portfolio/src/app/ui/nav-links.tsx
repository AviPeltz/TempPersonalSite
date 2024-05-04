'use client';

import Link from 'next/link';

// // Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links =[
{ name: 'About', href: '/about'},
{ name: 'Projects', href: '/projects'},
{ name: 'Blog', href: '/blog'},
{ name: 'Contact', href: '/contact'},
];
export default function NavLinks() {
    return(<section><h1>navlinks</h1></section>);
}