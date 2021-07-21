let queryString = new Array();

window.onload = function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
        var params = window.location.search.split('?')[1].split('&');
        for (var i = 0; i < params.length; i++) {
            var key = params[i].split('=')[0];
            var value = decodeURIComponent(params[i].split('=')[1]);
            queryString[key] = value;

        }
    }
    }   
console.log(queryString)


if (queryString["productName"]) {
    document.getElementById('product-name').innerHTML = queryString["productName"];
    document.getElementById('product-img').src = `./img/${queryString["productName"].toLowerCase()}.jpg`;
    document.getElementById('product-img').alt = queryString["productName"];
    document.getElementById('product-price1').innerHTML =`<p >Base price $${queryString["Price"]}</p>`;
    console.log(queryString["Price"])
}
}