/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/

const http = require('http')
const url = require('url')
const search = require('../services/search');
const hostname = 'localhost'
const port = 3035

http
  .createServer(function (request, response) {

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET",
      "Access-Control-Request-Method": '*',
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };

    const reqUrl = url.parse(request.url, true);
    console.log(`[Request came from ${reqUrl}]`);
    
    if (["GET", "POST"].indexOf(request.method) > -1) {
        console.log('Request Type:' + request.method + ' Endpoint: ' + reqUrl.pathname);
        response.writeHead(200, headers);
        response.end(search.autoSearch(request, response));   
    }
  })
  .listen(port)

console.log(`[Server running on ${hostname}:${port}]`)
