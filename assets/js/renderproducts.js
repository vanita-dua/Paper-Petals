/* ==========================================================
   Paper Petals
   renderProducts.js
========================================================== */

const productGrid = document.getElementById("product-grid");

/*
------------------------------------------
Create Product Card
------------------------------------------
*/

function createProductCard(product){

    return `

        <article class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}">

            <h3>${product.name}</h3>

            <p>

                Brand:
                ${product.brand}

            </p>

            <p>

                ⭐ ${product.rating}

            </p>

            <p>

                <strong>

                    ₹${product.price}

                </strong>

                <del>

                    ₹${Math.round(
                        product.price /
                        (1 - product.discount/100)
                    )}

                </del>

            </p>

            <button
                class="add-to-cart"
                data-id="${product.id}">

                Add to Cart

            </button>

        </article>

    `;

}
/*
------------------------------------------
Render Products
------------------------------------------
*/

function renderProducts(productList){

    productGrid.innerHTML = "";

    productList.forEach(product=>{

        productGrid.innerHTML +=
        createProductCard(product);

    });

}

/*
------------------------------------------
Initial Load
------------------------------------------
*/

renderProducts(products);