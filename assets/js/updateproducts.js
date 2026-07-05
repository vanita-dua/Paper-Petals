/* ==========================================================
   Paper Petals
   updateProducts.js
========================================================== */

function updateProducts(){

    let filteredProducts = [...products];

    /*
    ----------------------------
    Search
    ----------------------------
    */

    if(shopState.search !== ""){

        filteredProducts = filteredProducts.filter(function(product){

            return (

                product.name
                .toLowerCase()
                .includes(shopState.search)

                ||

                product.brand
                .toLowerCase()
                .includes(shopState.search)

                ||

                product.category
                .toLowerCase()
                .includes(shopState.search)

            );

        });

    }

    /*
    ----------------------------
    Category
    ----------------------------
    */

    if(shopState.category !== "All"){

        filteredProducts = filteredProducts.filter(function(product){

            return product.category === shopState.category;

        });

    }
    /*
----------------------------
Sorting
----------------------------
*/

switch(shopState.sort){

    case "low-high":

        filteredProducts.sort(function(a,b){

            return a.price-b.price;

        });

        break;

    case "high-low":

        filteredProducts.sort(function(a,b){

            return b.price-a.price;

        });

        break;

    case "rating":

        filteredProducts.sort(function(a,b){

            return b.rating-a.rating;

        });

        break;

    case "newest":

        filteredProducts.sort(function(a,b){

            return b.id-a.id;

        });

        break;

}

/*
----------------------------
Display Products
----------------------------
*/

renderProducts(filteredProducts);

}