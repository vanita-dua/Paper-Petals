/* ==========================================================
   Paper Petals
   filter.js
========================================================== */

const categoryItems =
    document.querySelectorAll("#category-list li");

categoryItems.forEach(item => {

    item.addEventListener("click", function () {

        const category =
            this.dataset.category;

        if (category === "All") {

            shopState.category = this.dataset.category;
            updateProducts();

            return;

        }

        const filteredProducts =
            products.filter(function (product) {

                return product.category === category;

            });

        shopState.category = this.dataset.category;
        updateProducts();

    });

});