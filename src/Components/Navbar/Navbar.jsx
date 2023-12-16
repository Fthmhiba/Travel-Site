import React,{useState} from "react";
import './Navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = () =>{
    // const [active,setActive] = useState('navBar')
    const [toggle,setToggle] = useState(false)
    // fun to toggle nav
    const showNav = ()=>{
        // setActive('navBar active')
    }

    // fun to close nav
    const closeNav = ()=>{
        // setActive('navBar')
        setToggle(true)
    }


    return(
        <>
        <section className="navBarsection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdTravelExplore className='icon' /> Travel.</h1>
                    </a>
                </div>
                <div className="navBar"  style={ toggle ? {display:"none"} : {} }>
                    <ul className="navLists flex" >
                        <li className="navItems">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
            
                    </ul>
                    <div onClick={closeNav} className="closeNavbar">
                    <IoIosCloseCircle className="icon"/>


                    </div>
                </div>
                <div onClick={showNav} className="toggleBar">
                <TbGridDots className="icon" onClick={()=>   setToggle(false) } />

                </div>
            </header>
        </section>
        </>
    )
}

export default Navbar