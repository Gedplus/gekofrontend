import React from "react";

import cert1 from "../Assets/iso.png"
import cert2 from "../Assets/iso1.png"

import cert3 from "../Assets/iso3.png"
import pdf from "../Assets/iso9001.pdf"
import pdf1 from "../Assets/iso14001.pdf"
import pdf2 from "../Assets/iso45001.pdf"

const Certification =()=>{
    const Certdata = [
        {
          id: 1,
    
          title: "ISO 9001: Système de management de la qualité",
          cover: cert1,
  link: pdf,
          category: "La certification ISO 9001 démontre notre engagement envers des normes élevées de qualité dans tous les aspects de notre entreprise. Cela signifie que nous nous efforçons constamment d'améliorer nos processus pour répondre aux attentes élevées de nos clients.",
        },
        {
          id: 2,

          title: "ISO 14001: Système de management environnemental",
          cover: cert2,
          link: pdf1,
          category: "Notre engagement envers la durabilité est reflété par notre certification ISO 14001. Nous mettons en œuvre des pratiques respectueuses de l'environnement, minimisons notre impact écologique et cherchons continuellement des moyens d'améliorer notre performance environnementale.",
        },
        {
          id: 3,

          title: "ISO 45001: Système de management de la santé et de la sécurité au travail",
          cover: cert3,
          link: pdf2,
          category: "La santé et la sécurité de nos employés sont au cœur de nos préoccupations. La certification ISO 45001 confirme notre engagement envers des normes rigoureuses en matière de santé et de sécurité au travail, assurant un environnement de travail sûr et sain pour tous.",
        },
     
      ]
    return(
        <div className="contain">
              <h4>Geko</h4>
<h1>Nos Certifications</h1>
<hr className="dividerCer"/>
<p className="  bottom ">Notre engagement envers l'excellence, la durabilité et la sécurité est reconnu par les normes internationales suivantes :</p>
<div className="contain grid1 ">
        {Certdata.map((val)=>{
            return( 
                <div className="box" >
                    <div className="img" >
                        <img src ={val.cover}  alt=""/>
                        </div>
                        <div className="text" >

<h2>   {val.title}</h2>        
<p>{val.category} </p>   
<p><a className="lienstyle" href={val.link}>Certification détail</a></p>
                             </div>
                        </div>
            )})}
                </div><p className=" margintop  ">Ces certificats reflètent notre engagement envers l’amélioration continue, la qualité exceptionnelle, la durabilité environnementale et la sécurité au travail. Nous nous efforçons constamment de dépasser les attentes, fournissant ainsi à nos clients des produits de qualité, respectueux de l’environnement et sécuritaires.</p>
</div>

    )
}
    export default Certification;