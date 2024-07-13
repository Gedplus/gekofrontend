import React from "react"
import { Link } from "react-router-dom";
import video from "./Assets/video.mp4"
const BlogCardHome =(props) =>{
    const {id , title , description , date , image} = props;
    return(
        
            <div className="blog-card">
       {id == "65eae30b9abdc1483e1d7586" ? (<div className="card-image ">
          <video preload="auto" width="500" height="600" style={{borderTopLeftRadius:"10px" , borderTopRightRadius:"10px"}} controls>
        <source src={`${video}` } />
    
        </video>
</div>) :(<div className="card-image ">
    <img src={image ? image : "images/blog-1.jpg"} className=" w-100"  style={{height:"175px"}} alt="blog" />
</div>)}
<div className="blog-content">

<h5 className="title">
{title}
</h5>
<p className="desc"  dangerouslySetInnerHTML={{__html:description?.substr(0,70) + "..."}}></p>
<Link to={`/blog/${id}` }className="button">savoir plus</Link>





            </div>
        </div>
    )
}
export default BlogCardHome;