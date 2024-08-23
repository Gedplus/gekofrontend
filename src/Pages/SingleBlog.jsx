import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/api/blog/${getBlogId}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setBlog(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [getBlogId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>No blog found</div>;
    }

    return (
        <>
            <section className='back2'>
                <div className="boxB"></div>
            </section>
            <Meta title={blog?.title} />
            <BreadCrumb title={blog?.title} />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="Single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center text-white gap-10">
                                <HiOutlineArrowLeft className="fs-4" />
                                Retourner aux blogs
                            </Link>
                            <h3 className="title text-white">{blog?.title}</h3>
                            
                            {blog?._id === "65eae30b9abdc1483e1d7586" ? (
                                <div className="card-image">
                                    <iframe
                                        width="500"
                                        height="268"
                                        src="https://www.youtube.com/embed/1knQCJwqSfM"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                            marginTop: "30px",
                                            marginLeft: "370px"
                                        }}
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={blog?.images ? blog.images[0]?.url : "images/blog-1.jpg"}
                                    style={{ margin: "auto" }}
                                    className="my-4"
                                    alt="blog"
                                />
                            )}
                            
                            <p className="text-white-desc" dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleBlog;
