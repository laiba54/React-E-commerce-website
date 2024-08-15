import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateProduct = ({ onSubmit, productToEdit, onClose }) => {
    const [productDetails, setProductDetails] = useState({
        category: '',
        title: '',
        price: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        if (productToEdit) {
            setProductDetails(productToEdit);
        } else {
            setProductDetails({
                category: '',
                title: '',
                price: '',
                description: '',
                image: ''
            });
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (productToEdit) {
                // Update existing product
                const response = await axios.put(`https://fakestoreapi.com/products/${productToEdit.id}`, productDetails);
                console.log('Product updated:', response.data);
                onSubmit(response.data);
            } else {
                // Create new product
                const response = await axios.post('https://fakestoreapi.com/products', productDetails);
                console.log('Product created:', response.data);
                onSubmit(response.data);
            }
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="order-msg-container">
                    <div className="alert alert-primary">
                        <h3 className="py-3 text-center">{productToEdit ? 'Edit Product' : 'Create Product'}</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="category" className="form-label">Category</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="form-control"
                                placeholder="Enter Category"
                                value={productDetails.category}
                                onChange={handleChange}
                            />
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                placeholder="Enter Title"
                                value={productDetails.title}
                                onChange={handleChange}
                            />
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="form-control"
                                placeholder="Enter Price"
                                value={productDetails.price}
                                onChange={handleChange}
                            />
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="form-control"
                                placeholder="Enter Description"
                                value={productDetails.description}
                                onChange={handleChange}
                            />
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                className="form-control"
                                placeholder="Enter Image URL"
                                value={productDetails.image}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-primary mt-3" style={{display : 'block', margin: '0 auto'}}>
                                {productToEdit ? 'Update Product' : 'Create Product'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
