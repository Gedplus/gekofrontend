import React, { useState, useEffect } from "react";
import moment from "moment";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Fetch blogs from the API
        fetch("http://localhost:5000/api/blog")
            .then(response => response.json())
            .then(data => {
                setBlogs(data);

                // Extract categories from the fetched blogs
                const newCategories = data.map(blog => blog.category);
                setCategories([...new Set(newCategories)]);
            })
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <>
            <section className='back2'>
                <div className="boxB"></div>
            </section>
            <Meta title={"Blogs"} />
            <BreadCrumb title="Blogs" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3 border-start border-0 border-5 border-info">
                            <h3 className="filter-title">Catégories</h3>
                            <div>
                                <ul className="ps-0">
                                    {categories && categories.map((item, index) => (
                                        <li
                                            className="py-2"
                                            key={index}
                                            onClick={() => setCategory(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {blogs.filter(blog => !category || blog.category === category).map((item, index) => (
                                <div className="col-lg-6 col-sm-12 mb-3" key={item?._id}>
                                    <BlogCard
                                        id={item?._id}
                                        title={item?.title}
                                        description={item?.description}
                                        date={moment(item?.created_at).format('LL')}
                                        image={item?.images[0]?.url}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog;
