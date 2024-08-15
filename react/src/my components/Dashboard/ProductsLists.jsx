import { useState } from 'react';
import { useProducts } from './useProducts';
import { Link } from 'react-router-dom';
import './Cards.css';
import useCartStore from './useCartStore';
import CreateProduct from '../../crud operations/CreateProduct';
import axios from 'axios';

const ProductsLists = ({ setCount, pageSize }) => {
    const { data: products, mutate } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const { addToCart } = useCartStore();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowAll(false); 
    };

    const handleShowAll = () => {
        setShowAll(true);
    };

    const filteredProducts = selectedCategory === 'All'
        ? showAll ? products : products?.slice(0, 8)
        : products?.filter(product => product.category === selectedCategory);

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price
        });
        setCount(count => count + 1);
    };

    const handleNewProduct = (newProduct) => {
        mutate((prevProducts) => {
            if (prevProducts.some(p => p.id === newProduct.id)) {
                return prevProducts.map(p => p.id === newProduct.id ? newProduct : p);
            } else {
                return [...prevProducts, newProduct];
            }
        }, false);
        setShowCreateProduct(false);
        setProductToEdit(null);
    };

    const handleEditCart = (product) => {
        setProductToEdit(product); 
        setShowCreateProduct(true); 
    };

    const handleDeleteCart = async (product) => {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
            mutate((prevProducts) => prevProducts.filter(p => p.id !== product.id), false);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <section style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div className="container mt-3 py-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                    <h3 className="fs-2 mb-3 mb-md-0">Latest Products</h3>
                    <div className="d-flex flex-wrap mt-2 gap-2 mt-md-0">
                        <span className="span-text" onClick={() => handleCategoryClick('All')}>All</span>
                        <span className="span-text" onClick={() => handleCategoryClick("women's clothing")}>Women</span>
                        <span className="span-text" onClick={() => handleCategoryClick("men's clothing")}>Men</span>
                        <span className="span-text" onClick={() => handleCategoryClick('jewelery')}>Accessories</span>
                        <span className="span-text" onClick={() => handleCategoryClick('electronics')}>Electronics</span>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-outline-primary mb-3 py-2"
                style={{ display: 'block', margin: '0 auto' }}
                onClick={() => setShowCreateProduct(!showCreateProduct)}
            >
                {showCreateProduct ? 'Close Form' : 'Create Product'}
            </button>
            {showCreateProduct && 
                <CreateProduct 
                    onSubmit={handleNewProduct} 
                    productToEdit={productToEdit} 
                    onClose={() => { 
                        setShowCreateProduct(false); 
                        setProductToEdit(null); 
                    }} 
                />
            }
            <div className="container-fluid mb-5">
                <div className="row">
                    {filteredProducts?.map((product) => (
                        <div className="col-md-4 col-12 col-lg-3 mb-4" key={product.id}>
                            <div className="card">
                                <div className="image">
                                    <Link to={`/productsLists/${product.id}`}>
                                        <img src={product.image} alt={product.title} height={200} width={200} />
                                    </Link>
                                    <button
                                        className="btn btn-warning edit-cart"
                                        onClick={() => handleEditCart(product)}><i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        className="btn btn-danger delete-cart"
                                        onClick={() => handleDeleteCart(product)}><i className="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button
                                        className="btn btn-primary add-to-cart"
                                        onClick={() => handleAddToCart(product)}><i className="fa-solid fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="ratings d-flex gap-1 mt-3">
                                    <span><i className="fa-regular fa-star text-warning"></i></span>
                                    <span><i className="fa-regular fa-star text-warning"></i></span>
                                    <span><i className="fa-regular fa-star text-warning"></i></span>
                                    <span><i className="fa-regular fa-star text-warning"></i></span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                </div>
                                <h5 className="title">{product.title.slice(0, 25)}</h5>
                                <p className="price">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCategory === 'All' && !showAll && (
                    <div className="wrapper">
                        <button onClick={handleShowAll}><span>See All</span></button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsLists;
