import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = ({ onProductUpdated }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            const data = await res.json();
            onProductUpdated(data);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container">
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
