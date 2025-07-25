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
    return (
        <div className="flex justify-between mx-10 my-10">
            <span onClick={() => setOpen(!open)}>
                {
                    open ? <AlignJustify /> : <X />
                }
            </span>
            <ul className="flex">
                {
                    navData.map((route) => <Nav route={route}></Nav>)
                }
            </ul>
            <button className="btn">Login</button>
        </div>
    )
}