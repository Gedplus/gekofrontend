import React, { useEffect,useState } from "react";
import Container from "../Container";
import BlogCard from "../BlogCard";
import { useDispatch, useSelector } from "react-redux";
import  moment from "moment";
import { getAllBlogs } from "../../features/blogs/blogSlice";
import BlogCardHome from "../BlogCardHome";
const BlogHome =()=>{
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs from the API
        fetch("http://localhost:5000/api/blog")
            .then(response => response.json())
            .then(data => {
                setBlogs(data);

            })
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);
  
    return(
        <Container class1="blog-wrapper home-wrapper-2 py-5 ">
    
            <div className='row'>
            {blogs?.map((item,index)=>{
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