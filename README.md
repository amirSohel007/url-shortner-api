Its open source API Developed in Node Js

You can use this API to convert your long url into short one 


API URL 
http://api-shortner-api.herokuapp.com/url-shortner

This url will take a long url in body like 

fetch('http://api-shortner-api.herokuapp.com/url-shortner', {url:'longUrl'})

axios.post('http://api-shortner-api.herokuapp.com/url-shortner', {url:'longUrl'})
