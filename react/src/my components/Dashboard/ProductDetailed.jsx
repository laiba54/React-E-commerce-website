import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import useCartStore from './useCartStore'; 
const ProductDetailed = ({setCount}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { addToCart } = useCartStore();

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    const Loading = () => <div>Loading...</div>;

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price
        });
        setCount(Count => Count + 1)
    };

    const ShowProduct = () => (
        <div className="row">
            <div className="col-md-12 col-12 col-lg-6 mb-4">
                <img src={product.image} className="productdetail-img" alt={product.title} height={400} width={400} />
            </div>
            <div className="col-md-12 col-12 col-lg-6 mb-4 d-flex flex-column justify-content-center">
                <h4 className="text-uppercase fs-6 text-black-50">{product.category}</h4>
                <h1 className="display-5 fs-3 fw-semibold">{product.title}</h1>
                <p className="lead me-1">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star ms-2"></i>
                </p>
                <h3 className="display-6 fs-4 fw-bold">${product.price}</h3>
                <p className="lead fs-6 lh-3" style={{textAlign : 'justify'}}>{product.description}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary px-4 py-2" style={{width : '170px'}}>Add to Cart</button>
            </div>
        </div>
    );

    return (
        <div className="container py-5">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    );
}

export default ProductDetailed;
