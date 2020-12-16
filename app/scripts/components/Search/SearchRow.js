import React from 'react'

const SearchRow = ({item}) => {
    const rowStyle = {
        flex: "1 0 21%",
        margin: "5px",
        height: "auto"
      };
    return (
        <div className="item-row" style={rowStyle}>
            <img className="item-picture" src={item.picture} />
            <p className="item-name">{item.name}</p>
            <p className="item-about">{item.about}</p>
        </div>
    )
}
export default SearchRow