import React from 'react'
import SearchRow from './SearchRow'

const mapProducts = (item, index) => {
    if( index < 4 ){
        return(<SearchRow item={item}/>)
    }
}

const ProductList = ({products}) =>{
    const productListStyle = {
        display: "flex",
        flexWwrap: "wrap",
        backgroundColor: "white",
        height: "max-content"
      };

    return(
    <div id="ProductList" style={productListStyle}>
        {products.map(mapProducts)}
    </div>)
}

export default ProductList