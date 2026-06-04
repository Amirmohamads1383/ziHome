import { createProductCard } from "./utils.js";

const navMIcon = document.querySelector(".nav-m-icon");
const closeOffCanvasIcon = document.querySelector(".close-off-canvas");
const offCanvasNav = document.querySelector(".off-canvas-nav");
const offerContainer = document.querySelector("#offer");
const categoryContainer = document.querySelector("#category-container");
const blogContainer = document.querySelector("#blog-container");
const mostSaleContainer = document.querySelector("#most-sale-container");
const mostPopularContainer = document.querySelector("#most-popular-container");

let allProducts = [];
let allCategories = [];

/* Fetching Data From Data.json */
const fetchData = async () => {
    try {
        const response = await fetch("../data/data.json");
        const data = await response.json();
        allProducts = data;

        let offerHTML = "";
        data.forEach((item) => {
            if (item.discountPercent > 0) {
                offerHTML += createProductCard(item);
            }
        });

        if (offerContainer) {
            offerContainer.innerHTML = offerHTML;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

/* Fetching Categories Data */
const fetchCategoriesData = async () => {
    try {
        let response = await fetch("../data/categories.json");
        let data = await response.json();
        allCategories = data;

        let categoryHTML = "";
        data.forEach((item) => {
            categoryHTML += createCategoriesBox(item);
        });

        if (categoryContainer) {
            categoryContainer.innerHTML = categoryHTML;
        }

        buildMostSaleTabs();
        buildMostPopularTabs();
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
};

/* Most Sale Tab */
const buildMostSaleTabs = () => {
    if (!mostSaleContainer) return;

    const topCategories = allCategories.slice(0, 4);

    let tabsHTML = `
        <div class="most-sale-b-container">
            <div class="most-sale-b-tab-title-container">
                <div class="most-sale-b-tab-title">
    `;

    topCategories.forEach((category, index) => {
        const activeClass = index === 0 ? "active" : "";
        tabsHTML += `
            <h3 class="most-sale-tab-title ${activeClass}" data-category-slug="${category.slug}">
                ${category.name_fa}
            </h3>
        `;
    });

    tabsHTML += `
                </div>
            </div>
            <div class="most-sale-b-tab-content">
    `;

    topCategories.forEach((category, index) => {
        const activeClass = index === 0 ? "active" : "";
        tabsHTML += `
            <div class="most-sale-tab-content ${activeClass}" data-category-slug="${category.slug}">
                <div class="products-grid">
                </div>
            </div>
        `;
    });

    tabsHTML += `
            </div>
        </div>
    `;

    mostSaleContainer.innerHTML = tabsHTML;

    populateTabProducts(".most-sale-tab-content");

    attachTabEvents(".most-sale-tab-title", ".most-sale-tab-content");
};

/* Most Popular Tab */
const buildMostPopularTabs = () => {
    if (!mostPopularContainer) return;

    const popularCategories = allCategories.slice(4, 7);

    if (popularCategories.length === 0) return;

    let tabsHTML = `
        <div class="most-popular-b-container">
            <div class="most-popular-b-tab-title-container">
                <div class="most-popular-b-tab-title">
    `;

    popularCategories.forEach((category, index) => {
        const activeClass = index === 0 ? "active" : "";
        tabsHTML += `
            <h3 class="most-popular-tab-title ${activeClass}" data-category-slug="${category.slug}">
                ${category.name_fa}
            </h3>
        `;
    });

    tabsHTML += `
                </div>
            </div>
            <div class="most-popular-b-tab-content">
    `;

    popularCategories.forEach((category, index) => {
        const activeClass = index === 0 ? "active" : "";
        tabsHTML += `
            <div class="most-popular-tab-content ${activeClass}" data-category-slug="${category.slug}">
                <div class="products-grid">
                </div>
            </div>
        `;
    });

    tabsHTML += `
            </div>
        </div>
    `;

    mostPopularContainer.innerHTML = tabsHTML;

    populateTabProducts(".most-popular-tab-content");

    attachTabEvents(".most-popular-tab-title", ".most-popular-tab-content");
};

/* Categories Product Handler */
const populateTabProducts = (contentClassName) => {
    const tabContents = document.querySelectorAll(contentClassName);

    tabContents.forEach((content) => {
        const categorySlug = content.getAttribute("data-category-slug");
        const productsGrid = content.querySelector(".products-grid");

        if (productsGrid && allProducts.length > 0) {
            const filteredProducts = allProducts.filter(product =>
                product.category === categorySlug
            );

            let productsHTML = "";
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    productsHTML += createProductCard(product);
                });
            } else {
                productsHTML = `<div class="no-products">محصولی در دسته یافت نشد</div>`;
            }

            productsGrid.innerHTML = productsHTML;
        }
    });
};

/* Tab Switcher */
const attachTabEvents = (titleClassName, contentClassName) => {
    const tabTitles = document.querySelectorAll(titleClassName);
    const tabContents = document.querySelectorAll(contentClassName);

    tabTitles.forEach((tabTitle, index) => {
        tabTitle.addEventListener("click", function () {
            document.querySelectorAll(titleClassName).forEach(title => {
                title.classList.remove("active");
            });

            document.querySelectorAll(contentClassName).forEach(content => {
                content.classList.remove("active");
            });

            this.classList.add("active");

            if (tabContents[index]) {
                tabContents[index].classList.add("active");
            }
        });
    });
};

/* Fetching Articles Data */
const fetchArticlesData = async () => {
    try {
        let response = await fetch("../data/articles.json");
        let data = await response.json();

        let blogHTML = "";
        data.forEach((item) => {
            blogHTML += createBlogBox(item);
        });

        if (blogContainer) {
            blogContainer.innerHTML = blogHTML;
        }
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
};

/* Category Box */
const createCategoriesBox = (cat) => {
    return `
        <div class="swiper-slide">
            <div class="category-item">
                <div class="category-item-img">
                    <img src="${cat.image}" alt="${cat.name_fa}">
                </div>
                <div class="category-item-title">
                    <h3>${cat.name_fa}</h3>
                </div>
            </div>
        </div>
    `;
};

/* Blog Box */
const createBlogBox = (article) => {
    return `
        <div class="swiper-slide">
            <div class="blog-box">
                <img src="${article.coverImage}" alt="${article.title}">
                <div class="blog-info">
                    <div class="blog-t-info">
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                    </div>
                    <div class="blog-b-info">
                        <span class="date">${article.publishDate}</span>
                        <div class="blog-b-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m-9-5-5 5m5 5-5-5" stroke="#676f71"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/* Show Offcanvas */
const showOffCanvas = () => {
    offCanvasNav.classList.add("active");
};

/* Hide Offcanvas */
const hideOffCanvas = () => {
    offCanvasNav.classList.remove("active");
};

window.addEventListener("load", async () => {
    await fetchData();
    await fetchCategoriesData();
    await fetchArticlesData();
});

navMIcon.addEventListener("click", showOffCanvas);
closeOffCanvasIcon.addEventListener("click", hideOffCanvas);