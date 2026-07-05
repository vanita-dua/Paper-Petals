/* ==========================================================
   Paper Petals
   sort.js
========================================================== */

const sortSelect =
    document.getElementById("sort-select");

sortSelect.addEventListener("change", sortProducts);

/*
-----------------------------------------
Sort Products
-----------------------------------------
*/

function sortProducts(){

    // Create a copy of the array
    let sortedProducts = [...products];

    switch(sortSelect.value){

        case "low-high":

            sortedProducts.sort(function(a,b){

                return a.price - b.price;

            });

            break;

        case "high-low":

            sortedProducts.sort(function(a,b){

                return b.price - a.price;

            });

            break;

        case "rating":

            sortedProducts.sort(function(a,b){

                return b.rating - a.rating;

            });

            break;

        case "newest":

            sortedProducts.sort(function(a,b){

                return b.id - a.id;

            });

            break;

        default:

            sortedProducts = [...products];

    }

    renderProducts(sortedProducts);

}