document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================== */

    const products = document.querySelectorAll(".product-card");
    const priceRange = document.getElementById("priceRange");
    const priceOutput = document.getElementById("priceOutput");
    const availableOnly = document.getElementById("availableOnly");
    const discountOnly = document.getElementById("discountOnly");
    const categoryFilters = document.querySelectorAll('[data-filter="category"] input');
    const toggles = document.querySelectorAll(".filters__toggle");

    /* =========================
       ACCORDION
    ========================== */

    if (toggles.length) {
        toggles.forEach(toggle => {
            toggle.addEventListener("click", function () {
                const parent = this.closest(".filters__item");
                parent.classList.toggle("active");
            });
        });
    }

    /* =========================
       FILTER SYSTEM
    ========================== */

    if (!products.length) return;

    const formatPrice = (num) => {
        return Number(num).toLocaleString("fa-IR");
    };

    function filterProducts() {

        const maxPrice = priceRange ? parseInt(priceRange.value) : Infinity;
        const isAvailable = availableOnly ? availableOnly.checked : false;
        const isDiscount = discountOnly ? discountOnly.checked : false;

        const selectedCategories = categoryFilters.length
            ? Array.from(categoryFilters)
                  .filter(c => c.checked)
                  .map(c => c.value)
            : [];

        products.forEach(product => {

            const price = parseInt(product.dataset.price || 0);
            const category = product.dataset.category;
            const available = product.dataset.available === "true";
            const discount = product.dataset.discount === "true";

            let show = true;

            if (price > maxPrice) show = false;
            if (isAvailable && !available) show = false;
            if (isDiscount && !discount) show = false;
            if (selectedCategories.length && !selectedCategories.includes(category)) show = false;

            product.style.display = show ? "" : "none";
        });
    }

    /* =========================
       EVENTS
    ========================== */

    if (priceRange) {
        priceRange.addEventListener("input", function () {
            if (priceOutput) {
                priceOutput.textContent = formatPrice(this.value);
            }
            filterProducts();
        });
    }

    if (availableOnly) availableOnly.addEventListener("change", filterProducts);
    if (discountOnly) discountOnly.addEventListener("change", filterProducts);

    if (categoryFilters.length) {
        categoryFilters.forEach(el => el.addEventListener("change", filterProducts));
    }

});