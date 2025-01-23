import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../style/ProductComponent.css";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="container" key={id}>
                <div className="cardCont">
                <div className="ProductComponent" >
                <Link to={`/product/${id}`}>
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="title">{title}</div>
                            <div className="price">$ {price}</div>
                            <div className="category">{category}</div>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        );
    });

    return <>{renderList}</>;
};

export default ProductComponent;
