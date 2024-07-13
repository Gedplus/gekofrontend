import React from "react"
import { Link } from 'react-router-dom'
import { BsLinkedin , BsGithub , BsYoutube , BsInstagram } from 'react-icons/bs'
import "./Footer.css"
const Footer = () => {
    return(<>
   <div className="footer"></div>
    <footer className='py-4 '>
   
<div className='container-xxl mt-4'>
  <div className='row '>
  <div className='col-5'><h4 className='text-white mb-4'>À propos de nous</h4>
  <hr className="divider1"/>
    <div className='footer-links d-flex flex-column'>
    <p className='text-white fs-6 p'> Le nom de la marque est inspiré de l’animal <br/>qui est reconnu pour ses capacités de collage<br/> et pour son grand pouvoir d’adhésion qui ont <br/>intrigué les chercheurs.</p></div>
    
    
    
    </div>
    <div className='col-5 '><h4 className='text-white mb-4'>Contactez-nous</h4>
    <hr className="divider1"/>
    <div >
      <address className='text-white fs-6 p'>Rte de Gabes Km 3, B.P 406,  <br/> 3062 Sfax – Tunisia </address>
      <a href='tel: +91 8264954234' className='mt-3 d-block mb-1 text-white p'>(+216) 74 453 229</a>
      <a href='mailto: cherifsahar97@gmail.com' className='mt-2 d-block mb-0 text-white p'>contact@geko.tn</a>
<div  className='social-icons d-flex align-items-center gap-30 mt-4'>
<a className='text-white' href=''>
<BsLinkedin className=' fs-4'/>

</a>
<a className='text-white' href=''>
<BsInstagram className='fs-4' />
</a>
<a className='text-white' href=''>
<BsGithub  className='fs-4' />
</a>
<a className='text-white' href=''>
<BsYoutube className='fs-4' />
</a>
</div>





      </div></div>

    
    <div className='col-2 mobfooter'><h4 className='text-white mb-4'>Liens rapides</h4>
    <hr className="divider1"/>
    <div className='footer-links d-flex flex-column'>
      
<Link className="text-white py-2 mb-1 ">Acceuil</Link>
      <Link className="text-white py-2 mb-1 ">À propos de nous</Link>
      <Link className="text-white py-2 mb-1 ">Produits</Link>
      <Link className="text-white py-2 mb-1 ">Actualité</Link>
      <Link className="text-white py-2 mb-1 ">Contact</Link></div></div>
  </div>
</div>




      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'> © Copyright 2024 by GEDPLUS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
)
}
export default Footer