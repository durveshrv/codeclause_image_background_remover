
var request = require('request');
var fs = require('fs');
request.post({
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
        image_url: 'https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        size: 'auto',
    },
    headers: {
        'X-Api-Key': 'ur1rESNWpsdChFh3Y2mMWMMh'
    },
    encoding: null
}, function (error, response, body) {
    if (error) return console.error('Request Failed Because Invalid URL or file:', error);
    if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    fs.writeFileSync("./transparent-image/removed.png", body);
}
);