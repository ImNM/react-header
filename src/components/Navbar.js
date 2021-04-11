import React,{useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown' 
import { Mobile, PC } from "../mediaquery.js"
import { useMediaQuery } from 'react-responsive'
function Navbar() {
    const [click, setclick] = useState(false)
    const [dropdown, setdropdown] = useState(false)
    const [open, setopen] = useState(false)

    const handleClick = ()=>  {setclick(!click)
        setopen(false)
};;
    const closeMobileMenu = () => {setclick(false)
                                 setopen(false)
    };

    const onMouseEnter = () =>{
        if(window.innerWidth<960){
            setdropdown(false);
        }
        else{
            setdropdown(true);
           
        }
    }

    const onMouseLeave = () =>{
        if(window.innerWidth<960){
            setdropdown(false);
        }
        else{
            setdropdown(false);
           
        }
    }
    //const PCcheck =useMediaQuery({ minWidth: 960 })
    
    
    const openService = () => setopen(!open);

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    ImNM
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter = {onMouseEnter}
                        onMouseLeave = {onMouseLeave}
                    >
                        <PC>
                        <Link to ='/services' className='nav-links' onClick = {closeMobileMenu}>
                            services <i className = 'fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                        
                        </PC>
                         <Mobile>

                        <Link to ='/services' className='nav-links' onClick = {openService}>
                            service <i className = 'fas fa-caret-down'/>
                        </Link>
                       
                        </Mobile>
                       
                        
                    </li>
                    <Mobile>
                    {open && 
                    <div>
                                <li className = 'nav-item'>
                                <Link to ='/contact' className='nav-links-sub' onClick = {closeMobileMenu}>
                                  service1
                               </Link>
                               </li>
                               <li className = 'nav-item'>
                                 <Link to ='/contact' className='nav-links-sub' onClick = {closeMobileMenu}>
                                      service2
                                 </Link>
                             </li>
                    </div>
                            
                            
                        }
                    </Mobile>
                    <li className='nav-item'>
                        <Link to ='/contact' className='nav-links' onClick = {closeMobileMenu}>
                            contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/signup' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            sign up
                        </Link>
                    </li>

                </ul>

                <Button/>

            </nav>
        </>
    )
}

export default Navbar;