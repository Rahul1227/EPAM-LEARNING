// getting fetch button in js
const fetchbttn = document.querySelector("#fetchbttn");
fetchbttn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("The button is clicked");
    
    // 1-> initiated xhr object   xhr=XML HTTP Request
    const xhr = new XMLHttpRequest();

    // 2-> opening the xhr object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // 3-> tracking progress (optional)
    xhr.onprogress = function() {
        console.log("progressing");
    };

    // 4-> on loading
    xhr.onload = function() {
        // handling the error
        if (this.status == 200) {
            console.log(this.responseText);
        } else {
            console.error("Some error has occurred");
        }
    };

    // 5-> sending the xml request
    xhr.send();
}

// getting pop button in js
const popbttn = document.querySelector("#popbttn");
popbttn.addEventListener('click', popClickHandler);

function popClickHandler() {
    console.log("The pop button is clicked");
    
    // 1-> initiated xhr object
    const xhr = new XMLHttpRequest();

    // 2-> opening the xhr object
    xhr.open('GET', 'https://fakestoreapi.com/carts?userId=1', true);

    // 3-> tracking progress (optional)
    xhr.onprogress = function() {
        console.log("progressing");
    };

    // 4-> on loading
    xhr.onload = function() {
        // handling the error
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            const list = document.querySelector("#list");
            let str = "";

            obj.forEach(cart => {
                str += `<li>Cart Date: ${cart.date}<ul>`;
                
                // Parsing and displaying each product in the 'products' array
                cart.products.forEach(product => {
                    str += `<li>Product ID: ${product.productId}, Quantity: ${product.quantity}</li>`;
                });
                
                str += `</ul></li>`;
            });

            list.innerHTML = str;
        } else {
            console.error("Some error has occurred");
        }
    };

    // 5-> sending the xml request
    xhr.send();
}
