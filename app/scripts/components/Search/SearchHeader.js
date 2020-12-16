import React from 'react'

const headerText = (amount) => {
    return amount < 4 
    ? `DISPLAYING ${amount} OF ${amount} RESULTS` 
    : `DISPLAYING 4 OF ${amount} RESULTS`

}
const SearchHeader = ({ itemsAmount }) =>{
    return(
        <div className="header-result">
            <span>
                {headerText(itemsAmount)}
            </span>
        </div>
    )
}

export default SearchHeader