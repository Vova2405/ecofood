let basket = [];

let addToCartBtns = document.getElementsByClassName('js-Add-To-Cart');

for (let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', addToCart);
}

    function addToCart(event)
    {
        let count = document.getElementById('count');
        ++count.innerText
    
        let id = event.target.parentNode.id;
        let name = event.target.parentNode.getElementsByTagName('h3')[0].innerText;
        let price = event.target.parentNode.getElementsByTagName('p')[0].innerText;
        price = price.split('$')[1];
        console.log(price);

        let existProduct = basket.find(item => item.id===Number(id));
        if(existProduct){
            ++existProduct.amount;
        } else{
            let product = {
                id: Number(id),
                name: name,
                price: price,
                amount: 1
            };
            basket.push(product);
        }
        console.log(basket);
    }


//--------------------Clear cart--------------------
let clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearCart);

function clearCart(event)
{
    let count = document.getElementById('count');
    count.innerText = 0;

    basket = []
}