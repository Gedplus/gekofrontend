import React from "react";

import "./about.css"
import Certification from "./certification";
import CardCounter from "./cardcounter";
import img5 from '../Assets/a-prp.png'

const AboutCard =()=>{
    return(
        <section className="about">
        <div className="container ">
       
        <div className="content flex">
        <div className=" right  mtop" >
        <div className="content flex">
        <div class="p2">
        <img src ={img5}  alt=""/>
    </div>
    <div class="p3">
 
    </div>
        </div>
        </div>
        <div className="left topMargin "  >
       <h4>À PROPOS DE NOUS</h4>
<h1>Notre marque Geko</h1>
<hr className="divider"/>
<p>Le nom de la marque est inspiré de l’animal qui est reconnu pour ses capacités de collage et pour son grand pouvoir d’adhésion qui ont intrigué les chercheurs.<br/>Ces derniers essaient de s’y inspirer pour créer les produits du futur. En effet le Geko se colle sur tout type de surface rugueuse ou lisse, sèche ou mouillé. Sa Force de Collage est ultra forte.<br/>Geko peut supporter jusqu’à 100 fois son poids sans tomber ou se découler.<br/>Pour tous vis problème de collage, d’étanchéité, d’isolation, de fixation, de jointement et de traitement de surface, Geko a développé des produits intelligents et efficaces qui sont utilisés dans les nombreuses applications au quotidien en respectant les normes les plus strictes de qualité, de sécurité et de respect de l’environnement.<br/>Il y’a toujours un produit de la marque GEKO qui s’adapte à vos conditions d’utilisation et qui répond à vos attentes et à vos contraintes au quotidien.</p>

<div class="p2 mobile">
        <img src ={img5}  alt=""/>
    </div>

      
        </div>
    </div></div> <div className="containercer "><Certification/></div> <div className="containercount ">    <CardCounter/></div>    </section>
    )
}
export default AboutCard;