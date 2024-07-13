import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi"
import video from "../Components/Assets/video.mp4"
import { useDispatch, useSelector } from "react-redux";
import { getABlogs } from "../features/blogs/blogSlice";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import MiniSlider from "../Components/Slider/MiniSlide";
const SingleBlog = () =>{
    const blogState = useSelector((state) => state.blog.singleBlog);
    const dispatch = useDispatch();
   const location = useLocation();
   const getBlogId = location.pathname.split("/")[2]
useEffect(() => {
    getABlog();
},[getBlogId]);

const getABlog = () =>{
    dispatch(getABlogs(getBlogId));
}

    return(<> <section className='back2'>
    <div className="boxB">
</div> 
  </section><Meta title={blogState?.title} />
    <BreadCrumb title={blogState?.title}  />
    <Container class1="blog-wrapper home-wrapper-2 py-5">  <div className="row">
                 <div className="col-12">
                    <div className="Single-blog-card">
                        <Link to="/blogs" className="d-flex align-items-center text-white gap-10"><HiOutlineArrowLeft className="fs-4"/>
Retourner aux logs</Link>
                        <h3 className="title text-white">{blogState?.title} </h3>
                        
                {blogState?._id == "65eae30b9abdc1483e1d7586" ? (<div className="card-image ">
          <video preload="auto" width="700" height="500" style={{marginTop:"30px", marginLeft:"300px"}} controls>
        <source src={`${video}` } />
    
        </video>
</div>) :(  <img src={blogState?.images ? blogState?.images[0]?.url : "images/blog-1.jpg"} style={{margin:"auto"}} className=" my-4"  alt="blog"/>)}
                      
                        <p  className="text-white-desc" dangerouslySetInnerHTML={{__html:blogState?.description}}></p>
                    </div>
                 </div>
                </div></Container>
</>)
}
export default SingleBlog;