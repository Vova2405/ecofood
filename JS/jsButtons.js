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
    window.location = 'product.html?productName=' + product.alt + '&Price=' + product;
}

let buttonTop = document.getElementById('buttonTop');

// When the user scrolls down 800px from the top of the document,we will show the button
window.onscroll = function() {
    if (document.documentElement.scrollTop > 800) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
};

buttonTop.addEventListener("click", scrollToTop);

function scrollToTop(event) {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

