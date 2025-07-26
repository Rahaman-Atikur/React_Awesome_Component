import { useState } from "react";
import Nav from "./nav";
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
const navData = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "About",
        path: "/about"
    },
    {
        id: 3,
        label: "Address",
        path: "/address"
    }
];
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const links = navData.map((route) => <Nav route={route}></Nav>);
    return (
        <div className="flex justify-between mx-10 my-10">
            <span onClick={() => setOpen(!open)}>
                {
                    open ? <AlignJustify /> : <X />
                }
               <ul className={`lg:hidden absolute bg-amber-600 duration-1000 ${!open ? 'top-30' : '-top-40'}`}>
                    
                    {links}
                </ul>
            </span>

            <ul className="hidden sm:flex">
                {
                    links
                }
            </ul>
            <button className="btn">Login</button>
        </div>
    )
}