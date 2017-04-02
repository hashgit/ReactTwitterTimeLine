var axios = require('axios');
var querystring = require('querystring');

var key="9g0IveNNGeMW2vSNbHxYGgh89";
var secret="gJZqwTDwu57TILoBnmxEgP5ewuBaMVnSKpNkMLaxm2UPYaUIG6";

var auth = Buffer.from(key+':'+secret).toString("base64");
console.log(auth);

axios({
        url: "https://api.twitter.com/oauth2/token",
        method: "post",
        headers: {'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': Buffer.from(key+':'+secret).toString("base64") },
        data: { grant_type: 'client_credentials' }
    }).then(function (response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error.response.status);
        console.log(error.config);
    });
