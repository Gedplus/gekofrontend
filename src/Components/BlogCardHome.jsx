import React from "react"
import { Link } from "react-router-dom";
const BlogCardHome =(props) =>{
    const {id , title , description , date , image} = props;
    return(
        
            <div className="blog-card">
       {id == "65eae30b9abdc1483e1d7586" ? (<div className="card-image ">
         

        <iframe
    width="307"
    height="175"
    src="https://www.youtube.com/embed/1knQCJwqSfM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
></iframe>
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