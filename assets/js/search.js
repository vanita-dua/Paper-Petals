/* ==========================================================
   Paper Petals
   search.js
========================================================== */

const searchInput = document.getElementById("search-input");

/*
------------------------------------------------
Search Products
------------------------------------------------
*/

function searchProducts() {

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    const filteredProducts = products.filter(product => {

        return (

            product.name
                .toLowerCase()
                .includes(keyword)

            ||

            product.category
                .toLowerCase()
                .includes(keyword)

            ||

            product.brand
                .toLowerCase()
                .includes(keyword)

        );

    });

    shopState.search = searchInput.value .trim() .toLowerCase();
    updateProducts();

}

/*
------------------------------------------------
Search While Typing
------------------------------------------------
*/

searchInput.addEventListener(

    "input",

    searchProducts

);