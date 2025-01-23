import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Error", err)
        });
        dispatch(setProducts(response.data));
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    console.log("Products: ", products);
    
    
    return(
        <div className="ProductListing">
            <div className="container">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing