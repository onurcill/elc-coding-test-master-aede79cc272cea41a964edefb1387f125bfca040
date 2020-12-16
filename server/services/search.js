const data = require('../models/data')
const url = require('url');

module.exports.autoSearch = function (req) {
    const queryData = url.parse(req.url, true).query;

    let searchResult = [];

    data.forEach(product => {
        if(product != null){
            if(product.isActive === "true" &&
            (String(product.tags).match(queryData.filter.toLowerCase()))  ) {
                searchResult.push(product);
              
            }else {
                if(product.isActive === "true" && product.name.toLowerCase().includes(queryData.filter.toLowerCase()) ||
                product.about.toLowerCase().includes(queryData.filter.toLowerCase())  ) {
                    searchResult.push(product);
                }
            }
        }
    }
  )
  console.log(searchResult);

  return JSON.stringify(searchResult);
};