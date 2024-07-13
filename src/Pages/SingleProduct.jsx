import React, { useEffect } from 'react'

import ReactStars from "react-rating-stars-component";

import ReactImageZoom from 'react-image-zoom';


import { Link, useLocation, useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

import view from '../images/view.svg'


import {  getAProduct, getAllProducts } from '../features/products/productSlice';


import Meta from '../Components/Meta';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Slider from '../Components/Slider/Slider';
const SingleProduct = () => {

        const location = useLocation()
    const getProductId = location.pathname.split("/")[2]

    const navigate = useNavigate()
    console.log(getProductId)
    const dispatch = useDispatch()
    const productStates = useSelector(state => state.product.prod)
    console.log(productStates,"productStates")

    const productState = useSelector((state) => state?.product?.product);
  
    useEffect(() => {
        dispatch(getAProduct(getProductId))
      
        dispatch(getAllProducts())
    }, [getProductId])







    const props = {width: 200, height: 400, zoomWidth: 400,
         img: productStates?.images  ?  productStates?.images[0]?.url : "https://res.cloudinary.com/djkoevvlt/image/upload/v1699450418/r7avgu52truqk3dfcohv.png"}
   
   const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
 







  return (
   <>
       <Slider/>
   <Meta title={productStates?.title} />
    <BreadCrumb title={productStates?.title} />
    <Container class1="main-product-wrapper  py-5 home-wrapper-2">         
    <div className='row row-eq-height'>
                <div className='col-6  '>
                    <div className='main-product-image '>
                        <div><ReactImageZoom {...props} /></div>
                    </div>
               
                </div>
                <div className='col-6  '  >
<div className='main-product-details'>
<div className='border-bottom'>    <h3 className='title'>
{productStates?.title}</h3></div>
<div className='border-bottom py-3'>

    <div className='d-flex align-items-center gap-10'>
    <ReactStars
    count={5}
    value={5}
edit={false}
    size={24}
    activeColor="#ffd700"
  />
 

    </div>

</div>
<div className='py-3'>
   
    <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Category :</h3><p className='product-data'>{productStates?.category}</p></div>
  

  
   

   <div className='d-flex gap-10 flex-column my-3'>

   </div>

   <div className='d-flex gap-10 align-items-center my-3'>
    <h3 className='product-heading'>Lien produit</h3>
 <a href='javascript:void(0);' onClick={() => {copyToClipboard(window.location.href)}} >

 Copier le lien du produit
  
  </a>
   </div>
   <div className='d-flex gap-10 align-items-center my-2'><p className='product-data'>    <p  dangerouslySetInnerHTML={{__html:productStates?.descriptionCourte}} ></p></p></div>


    </div>
</div>

                </div>
            </div></Container>
<Container class1="description-wrapper py-5 home-wrapper-2">   <div className='row'>
<div className='col-12'>
<h4>Description</h4>
    <div  className='bg-white p-3'>

    <p  dangerouslySetInnerHTML={{__html:productStates?.description }} ></p>
    </div></div>

            </div></Container>

 <Container class1="popular-wrapper home-wrapper-2 py-5"> <div className='row'>
 <div className="col-12">
   <h3 className="section-heading">
Nos produits populaires</h3>
 </div>


</div>
<div className='row'>

{productState?.map((item, index) => {
   
if(index < 4){
  
  return (       <div key={index}
    className={ "col-3"}>
    <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
<div className="wishlist-icon position-absolute">

</div> 



<div className="product-image">
<img src={item?.images[0].url} className="  mx-auto" height={250} width={200} alt="product image" />


</div>
<div className="product-details">

<h5 className="product-title">{item?.title}</h5>
<ReactStars
count={5}
value={5}
edit={false}
size={24}
activeColor="#ffd700"
/>


</div>

<div className="action-bar position-absolute">
<div className="d-flex flex-column gap-15">

<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view"/></button>

</div>
</div>

    </div>
</div> )
}
})}



</div></Container>
    
    </>
  )
}

export default SingleProduct
