// Create file but the name should be index.js
// we are getting request from request and fs from fs
var request = require('request');
var fs = require('fs');
// now i hope there is no error so lets run this
// request post
request.post({
    // the url is the API ( this is the url :) i hope everything is easy till now)
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
        // this is the image url ( in this video i am showing you to remove the background of any image but only using the image if you want me to do it with file then i can do it :) )
        // so here i am getting a image file url so lets get animals image
        image_url: 'https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        // size auto means it will adjust the size of the image according to it
        size: 'auto',
    },
    headers: {
        // now you need to get the API key in order to make it work so to get it
        'X-Api-Key': 'ur1rESNWpsdChFh3Y2mMWMMh'
    },
    encoding: null
}, function (error, response, body) {
    // we are making a function so if there is an error
    if (error) return console.error('Request Failed Because Invalid URL or file:', error);
    // status code 200 is error code
    if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    // here ./transparent-image is the folder where the file will be saved with the name of removed.png extension name
    fs.writeFileSync("./transparent-image/removed.png", body);
}
// i think i have done some error :
);
// so now to run this file type node index.js to run
// guys i am so sorry i forgot the package name is require not request XD