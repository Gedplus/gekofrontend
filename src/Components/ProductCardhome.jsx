import React from "react"
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";


import view from '../images/view.svg'

const ProductCardHome =(props)=> {
    const {grid, data} = props
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let location = useLocation();


    return (<>
    {
        data?.map((item, index) => {
            return(
                <div key={index}
                className={`${location.pathname == "/" ? `gr-${grid}`: "col-3"}`}>
                <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
    <div className="wishlist-icon position-absolute">
        
 </div> 
    
    
    
    <div className="product-image">
        <img src={item?.images[0].url} className="  mx-auto" width={200}  height={250} alt="product image" />
        
    
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
      <p className={`description ${grid === 12 ? "d-block": "d-none"}`} dangerouslySetInnerHTML={{__html:item?.descriptionCourte}}></p>
    
    </div>
    
    <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
      
            <button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)}  src={view} alt="view"/></button>
    
        </div>
    </div>
    
                </div>
            </div>
            )
        })
    }
      
          </>
    )
}
export default ProductCardHome;