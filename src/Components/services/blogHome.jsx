import React, { useEffect } from "react";
import Container from "../Container";
import BlogCard from "../BlogCard";
import { useDispatch, useSelector } from "react-redux";
import  moment from "moment";
import { getAllBlogs } from "../../features/blogs/blogSlice";
import BlogCardHome from "../BlogCardHome";
const BlogHome =()=>{
    const blogState = useSelector((state) => state?.blog?.blog);
    const dispatch = useDispatch();
    const getProducts = () =>{
      dispatch( getAllBlogs());
  }
  useEffect(() => {
    getProducts();
},[ ]);
  
    return(
        <Container class1="blog-wrapper home-wrapper-2 py-5 ">
    
            <div className='row'>
            {blogState?.map((item,index)=>{
         if(index < 3) {
          return(
            <div className="col-3 "key={item?._id}>
        <BlogCardHome id={item?._id} title={item?.title} description={item?.description} date={moment().format(item?.created_at)} image={item?.images[0]?.url} />
        </div>
        
        )
         }
            })}
        
        
        
            </div>
        </Container>


    )
}
    export default BlogHome;