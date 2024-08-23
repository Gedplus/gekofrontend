import React, { useEffect, useState } from "react";
import axios from "axios"; // Assurez-vous que axios est installé
import { useNavigate } from 'react-router-dom';
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import ProductCard from "../Components/ProductCard";
import { Typeahead } from 'react-bootstrap-typeahead';
import gr2 from "../images/gr2.svg";
import gr from "../images/gr.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";

const Store = () => {
    const [grid, setGrid] = useState(4);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [productOpt, setProductOpt] = useState([]);
    const [paginate, setPaginate] = useState(true);
    const [sort, setSort] = useState(null);
    const navigate = useNavigate();

    // Fetch categories
    useEffect(() => {
        axios.get('http://localhost:5000/api/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des catégories :", error));
    }, []);

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/product', {
                    params: { sort, category }
                });
                setProducts(response.data);
                const productOptions = response.data.map((product, index) => ({
                    id: index,
                    prod: product._id,
                    name: product.title
                }));
                setProductOpt(productOptions);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits :", error);
            }
        };
        fetchProducts();
    }, [sort, category]);

    // Handle search selection
    const handleSearchSelect = (selected) => {
        if (selected.length > 0) {
            navigate(`/product/${selected[0]?.prod}`);
        }
    };

    // Handle category click
    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    return (
        <>
            <section className='back1'>
                <div className="boxB"></div>
            </section>
            <Meta title={"Produits"} />
            <BreadCrumb title="Produits" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3 border-start border-0 border-5 border-info">
                            <h3 className="filter-title">Recherche</h3>
                            <div>
                                <ul className="ps-0">
                                    <div className='input-group'>
                                        <Typeahead
                                            id="pagination-example"
                                            className="searchWidth"
                                            onPaginate={() => console.log('Results paginated')}
                                            onChange={handleSearchSelect}
                                            options={productOpt}
                                            paginate={paginate}
                                            minLength={2}
                                            labelKey={"name"}
                                            placeholder="Search for Products here..."
                                        />
                                        <button className='button-59'>
                                            <> Recherche <span>Recherche</span> </>
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3 border-start border-0 border-5 border-info">
                            <h3 className="filter-title">Catégories</h3>
                            <div>
                                <ul className="ps-0">
                                    {categories && categories.map((item) => (
                                        <li
                                            className="py-2"
                                            key={item._id}
                                            onClick={() => handleCategoryClick(item._id)}
                                        >
                                            {item.title} {/* Utilisez la propriété appropriée */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4 border-info">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: "100px" }}>Trier par:</p>
                                    <select
                                        name=""
                                        className="form-control form-select"
                                        onChange={(e) => setSort(e.target.value)}
                                        id=""
                                    >
                                        <option value="title">Alphabétiquement, A-Z</option>
                                        <option value="-title">Alphabétiquement, Z-A</option>
                                        <option value="price">Prix croissant</option>
                                        <option value="-price">Prix décroissant</option>
                                        <option value="createdAt">Date, de l'ancien au nouveau</option>
                                        <option value="-createdAt">Date, du nouveau à l'ancien</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">Produits</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img src={gr4} className="d-block img-fluid" alt="grid" onClick={() => setGrid(3)} />
                                        <img src={gr3} className="d-block img-fluid" alt="grid" onClick={() => setGrid(4)} />
                                        <img src={gr2} className="d-block img-fluid" alt="grid" onClick={() => setGrid(6)} />
                                        <img src={gr} className="d-block img-fluid" alt="grid" onClick={() => setGrid(12)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} data={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Store;
