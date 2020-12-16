import React from 'react'
import SearchHeader from './SearchHeader'
import ProductList from './ProductList'

const SearchResults = ({items}) => {
    return items.length ? (
        <div>
            <SearchHeader itemsAmount={items.length}/>
            <ProductList products={items}/>
        </div>
    ): <div>Not Found</div>
}

export default SearchResults