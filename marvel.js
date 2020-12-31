// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=
var publicKey = "a22a5b7c92ce2f1333db54048e00d7d8";
var privateKey = "722a6c146259d59d1cdf339a493a478bc9f6cc85";
var ts = time();
var hash = md5(ts . privateKey . publicKey);
console.log(hash) 

function getMarvel() {
    let queryURL = "http://gateway.marvel.com/v1/public/characters?" + ts1 + "&apikey=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

    })
}