let goBackButton = document.getElementById('jsGoBack');
if(goBackButton){
goBackButton.addEventListener('click', goBack);
}

function goBack(event) {
    window.history.back();
}

//--------go to products------//

let productImg = document.getElementsByClassName('jsProductImg');
for (let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('click', productDetails);
    
}

function productDetails(event) {
    let product = event.target;
    window.location = 'product.html?productName=' + product.alt;
}