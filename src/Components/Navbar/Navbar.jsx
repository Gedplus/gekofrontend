import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/aaaa.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slider from '../Slider/Slider';
import AboutCard from '../About/AboutCard';
import ServicesCard from '../services/servicesCard';
import { Link } from "react-router-dom"
import {  useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [menu , setMenu] = useState("Acceuil") 
    const navigate = useNavigate()
    const [sidebar, setSidebar]= useState(false)
    window.addEventListener("scroll", function (){
        const header = document.querySelector(".navbar")
        header.classList.toggle("active",window.scrollY > 200)
    })
    return(<>
        <div className='topBar'>
<div className='contacts'>
<div className='cont' ><CallIcon/> (+216) 74 453 229</div>
<div   className='cont'><EmailIcon/>  contact@geko.tn</div>
<div   className='cont' ><PlaceIcon/>Sfax, Tunisia</div>
</div>
<div className='contacts'>
<FacebookIcon />
<InstagramIcon/>
<WhatsAppIcon/>
<LinkedInIcon/>
</div>


        </div>
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />

            </div>
<ul className={sidebar ? "nav-links-sidebar":"nav-menu"}  >
    <li onClick={()=>{setMenu("Acceuil")}}  className={menu==="Acceuil"?"liHover":""}><Link to='/'  className={menu==="Acceuil"?"liHover":""}>Accueil </Link></li>

    <li onClick={()=>{setMenu("Acceuil2")}} className={menu==="Acceuil2"?"liHover":""}><Link to='/Apropos'  className={menu==="Acceuil2"?"liHover":""}>À propos de nous </Link></li>
    <li onClick={()=>{setMenu("Acceuil1")}}  className={menu==="Acceuil1"?"liHover":""}><Link to='/Produits'  className={menu==="Acceuil1"?"liHover":""}>Produits</Link></li>
   
    <li  onClick={()=>{setMenu("Acceuil4")}} className={menu==="Acceuil4"?"liHover":""}><Link to='/blogs'  className={menu==="Acceuil4"?"liHover":""}>Actualité</Link></li>
    <div className='nav-contact1'>
<button class="button-57" onClick={()=>{navigate(`/contact`)}} role="button"><span class="text">Contactez-nous</span></button>

</div>
</ul>
<div className='nav-contact'>
<button class="button-57" onClick={()=>{navigate(`/contact`)}} role="button"><span class="text">Contactez-nous</span></button>

</div>
<button className="navbar-item-icon" onClick={() => setSidebar(!sidebar)}>
                        {sidebar ? <CloseIcon /> : <MenuIcon/>}

                    </button>
        </div>

        </>
    )
}
export default Navbar