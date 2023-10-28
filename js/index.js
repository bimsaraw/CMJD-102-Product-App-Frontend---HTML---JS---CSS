document.addEventListener("DOMContentLoaded", function() {
    getProducts();
});

const getProducts = () => {
    fetch("http://localhost:8081/products").then((response) => { // if response is successful
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

