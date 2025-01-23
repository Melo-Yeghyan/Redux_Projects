import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import axios from "axios";

import "../style/ProductDetail.css";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Error ", err);
            });

        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
    }, [productId]);

    if (!product || Object.keys(product).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ProductDetail">
            <div className="container1">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-price">$ {product.price}</p>
                    <p className="product-category">{product.category}</p>
                    <p className="product-description">{product.description}</p>
                    <button>BUY</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
