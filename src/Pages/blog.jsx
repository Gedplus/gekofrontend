import React, { useState } from "react"



import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import  moment from "moment";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import BlogCard from "../Components/BlogCard";
import MiniSlider from "../Components/Slider/MiniSlide";
const Blog = ( ) => {
    const [categories, setCategorie] = useState([])
    const [category, setCategory] = useState(null)
    const blogState = useSelector((state) => state.blog.blog);
    const dispatch = useDispatch();
   
useEffect(() => {
    getBlogs();
},[]);

const getBlogs = () =>{
    dispatch(getAllBlogs());
}
console.log(blogState)
useEffect(()=> {

    let newcategory= [];


    for(let index = 0 ; index <blogState.length ; index++){
        const element= blogState[index];
      
        newcategory.push(element.category)
       
    
    }

    setCategorie(newcategory)
  

},[blogState])
    
    return(
        <>  <section className='back2'>
        <div className="boxB">
    </div> 
      </section>
        <Meta title={"Blogs"} />
        <BreadCrumb title="Blogs" />
        <Container class1="blog-wrapper home-wrapper-2 py-5"> <div className="row">
                    <div className="col-3">        <div className="filter-card mb-3 border-start border-0 border-5 border-info">
                        <h3 className="filter-title">Catégories</h3>
                        <div >
                            <ul className="ps-0">
{categories && [...new Set(categories)].map((item, index) =>{
    return        <li className="py-2" key={index} onClick={() => setCategory(item)}>{item}</li>
})}

                           
                            </ul>
                        </div>
                    </div></div>
                    <div className="col-9">
<div className="row">

    {blogState?.map((item,index)=>{
        return(
            <div className="col-6 mb-3"key={item?._id}>
<BlogCard id={item?._id} title={item?.title} description={item?.description} date={moment().format(item?.created_at)} image={item?.images[0]?.url} />
</div>
     
        )
    })}



</div>

                    </div>
                </div></Container>
 
        </>
    )
}
export default Blog;