import { createProductCard } from "./utils.js";

const shopProductsContainer = document.querySelector("#shop-products-container");
const stockProductCheckbox = document.querySelector("#stock-product");
const discountProductCheckbox = document.querySelector("#discount-product");
const todaySendCheckbox = document.querySelector("#today-send");
const priceRangeInput = document.querySelector("#price-range-input");
const priceRange = document.querySelector(".price-range");
const acc = document.querySelectorAll(".filters__toggle");
const catFilterContainer = document.querySelector("#cat-filter-container");
const filterBtn = document.querySelector("#filter-btn");
const removeFiltersBtn = document.querySelector("#remove-filters");
const paginationContainer = document.querySelector(".pagination-items");

const filters = {
    isStock: false,
    isDiscount: false,
    isTodaySend: false,
    maxPrice: 0,
    selectedCategories: []
};

let allProducts = [];
let currentFilteredProducts = [];
let page = 1;
let productPerPage = 8;

// دریافت همه محصولات
const getAllProduct = async () => {
    const response = await fetch("../data/data.json");
    const data = await response.json();

    allProducts = data;
    currentFilteredProducts = [...allProducts]; // مقداردهی اولیه
    
    updatePagination(); // ایجاد پجینیشن
    showPageCourses(); // نمایش محصولات صفحه اول
}

const getAllCat = async () => {
    const response = await fetch("../data/categories.json");
    const data = await response.json();

    data.forEach((item) => {
        catFilterContainer.insertAdjacentHTML("beforeend", `<label><input type="checkbox" class="cat-checkbox" value="${item.slug}">${item.name_fa}</label>`)
    });

    const catCheckboxes = document.querySelectorAll(".cat-checkbox");
    catCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedBoxes = document.querySelectorAll(".cat-checkbox:checked");
            filters.selectedCategories = Array.from(checkedBoxes).map(cb => cb.value);
        });
    });
}

const filterHandler = () => {
    let filteredProducts = [...allProducts];

    if (filters.isStock) {
        filteredProducts = filteredProducts.filter(product => product.stock > 0);
    }

    if (filters.isDiscount) {
        filteredProducts = filteredProducts.filter(product => product.discountPercent > 0);
    }

    if (filters.isTodaySend) {
        filteredProducts = filteredProducts.filter(product => product.shippingToday === true);
    }

    if (filters.maxPrice && filters.maxPrice > 0) {
        filteredProducts = filteredProducts.filter(product => product.price <= filters.maxPrice);
    }

    if (filters.selectedCategories && filters.selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            filters.selectedCategories.includes(product.category)
        );
    }

    currentFilteredProducts = filteredProducts;
    page = 1;
    updatePagination();
    showPageCourses();
};

const applyFilters = () => {
    filters.isStock = stockProductCheckbox.checked;
    filters.isDiscount = discountProductCheckbox.checked;
    filters.isTodaySend = todaySendCheckbox.checked;

    filterHandler();
}

const priceRangeFilter = (event) => {
    priceRange.innerHTML = (+event.target.value).toLocaleString() + " تومان";
    filters.maxPrice = +event.target.value;
}

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const displayProducts = (products) => {
    let shopHtml = "";

    if (products.length === 0) {
        shopHtml = '<div class="no-products" style="text-align: center; padding: 50px;">هیچ محصولی با این فیلترها یافت نشد</div>';
    } else {
        products.forEach((item) => {
            shopHtml += createProductCard(item);
        });
    }

    if (shopProductsContainer) {
        shopProductsContainer.innerHTML = shopHtml;
    }
}

const updatePagination = () => {
    if (paginationContainer) {
        paginationContainer.innerHTML = '';
    }
    
    const pagesCount = Math.ceil(currentFilteredProducts.length / productPerPage);
    
    if (pagesCount <= 1) {
        return;
    }

    for (let i = 0; i < pagesCount; i++) {
        paginationContainer.insertAdjacentHTML(
            "beforeend",
            `
            <li class="page ${i === 0 ? "active" : ""}" data-page="${i + 1}">${i + 1}</li>
            `
        );
    }
    
    const pagesNumbers = document.querySelectorAll(".page");
    pagesNumbers.forEach(pageNumber => {
        pageNumber.addEventListener("click", () => {
            const selectedPage = parseInt(pageNumber.dataset.page);
            changePageHandler(selectedPage);
        });
    });
}

const showPageCourses = () => {
    let startIndex = (page - 1) * productPerPage;
    let lastIndex = startIndex + productPerPage;
    const shownProducts = currentFilteredProducts.slice(startIndex, lastIndex);
    displayProducts(shownProducts);
}

function changePageHandler(userSelectedPage) {
    page = userSelectedPage;
    
    const pagesNumbers = document.querySelectorAll(".page");
    pagesNumbers.forEach(function (pageNumber) {
        if (parseInt(pageNumber.dataset.page) === page) {
            pageNumber.classList.add("active");
        } else {
            pageNumber.classList.remove("active");
        }
    });
    
    showPageCourses();
}

if (removeFiltersBtn) {
    removeFiltersBtn.addEventListener("click", () => {
        stockProductCheckbox.checked = false;
        discountProductCheckbox.checked = false;
        todaySendCheckbox.checked = false;

        const catCheckboxes = document.querySelectorAll(".cat-checkbox");
        catCheckboxes.forEach(cb => cb.checked = false);

        priceRangeInput.value = 0;
        priceRange.innerHTML = "0 تومان";

        filters.isStock = false;
        filters.isDiscount = false;
        filters.isTodaySend = false;
        filters.maxPrice = 0;
        filters.selectedCategories = [];

        currentFilteredProducts = [...allProducts];
        page = 1;
        updatePagination();
        showPageCourses();
    });
}

filterBtn.addEventListener("click", applyFilters);
priceRangeInput.addEventListener("input", priceRangeFilter);

window.addEventListener("load", () => {
    getAllCat();
    getAllProduct();
});