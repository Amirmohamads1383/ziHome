import { createProductCard } from "./utils.js";

const tabSaleTitles = document.querySelectorAll(".most-sale-tab-title");
const tabSaleContents = document.querySelectorAll(".most-sale-tab-content");
const tabPopularTitles = document.querySelectorAll(".most-popular-tab-title");
const tabPopularContents = document.querySelectorAll(".most-popular-tab-content");
const navMIcon = document.querySelector(".nav-m-icon");
const closeOffCanvasIcon = document.querySelector(".close-off-canvas");
const offCanvasNav = document.querySelector(".off-canvas-nav");
const specTitles = document.querySelectorAll(".spec-title");
const specContents = document.querySelectorAll(".spec-content");
const offerContainer = document.querySelector("#offer");
const categoryContainer = document.querySelector("#category-container");
const blogContainer = document.querySelector("#blog-container");

/* Fetching Data From Data.json */
const fetchData = async () => {
    try {
        const response = await fetch("../data/data.json");

        const data = await response.json();

        let offerHTML = "";

        data.forEach((item) => {
            if (item.discountPercent > 0) {
                offerHTML += createProductCard(item)
            }
        })

        if (offerContainer) {
            offerContainer.innerHTML = offerHTML;
        }

    } catch (error) {

    }
}

/* Fetching Data From  */
const fetchCategoriesData = async () => {
    try {
        let response = await fetch("../data/categories.json");

        let data = await response.json();

        let categoryHTML = "";

        data.forEach((item) => {
            categoryHTML += createCategoriesBox(item);
        })

        if (categoryContainer) {
            categoryContainer.innerHTML = categoryHTML;
        }
    } catch (error) {

    }
}

/* Fetching Data From  */
const fetchArticlesData = async () => {
    try {
        let response = await fetch("../data/articles.json");

        let data = await response.json();

        let blogHTML = "";

        data.forEach((item) => {
            blogHTML += createBlogBox(item);
        })

        if (blogContainer) {
            blogContainer.innerHTML = blogHTML;
        }
    } catch (error) {

    }
}

tabSaleTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener("click", function () {
        document.querySelector(".most-sale-tab-title.active")?.classList.remove("active");
        document.querySelector(".most-sale-tab-content.active")?.classList.remove("active");
        this.classList.add("active");
        if (tabSaleContents[index]) {
            tabSaleContents[index].classList.add("active");
        }
    });
});

tabPopularTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener("click", function () {
        document.querySelector(".most-popular-tab-title.active")?.classList.remove("active");
        document.querySelector(".most-popular-tab-content.active")?.classList.remove("active");
        this.classList.add("active");
        if (tabPopularContents[index]) {
            tabPopularContents[index].classList.add("active");
        }
    });
});

specTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener("click", function () {
        document.querySelector(".spec-title.active")?.classList.remove("active");
        document.querySelector(".spec-content.active")?.classList.remove("active");
        this.classList.add("active");
        if (specContents[index]) {
            specContents[index].classList.add("active");
        }
    });
});

/* Category Box */
const createCategoriesBox = (cat) => {
    return `
        <div class="swiper-slide">
            <div class="category-item">
                <div class="category-item-img">
                    <img src="${cat.image}" alt="">
                </div>
                <div class="category-item-title">
                    <h3>${cat.name_fa}</h3>
                </div>
            </div>
        </div>
    `
}

/* Blog Box */
const createBlogBox = (article) => {
    return `
        <div class="swiper-slide">
            <div class="blog-box">
                <img src="${article.coverImage}" alt="">
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
    `
}

/* Show Offcanvas */
const showOffCanvas = () => {
    offCanvasNav.classList.add("active");
}

/* Hide Offcanvas */
const hideOffCanvas = () => {
    offCanvasNav.classList.remove("active");
}

window.addEventListener("load", fetchData);
window.addEventListener("load", fetchCategoriesData);
window.addEventListener("load", fetchArticlesData);
navMIcon.addEventListener("click", showOffCanvas);
closeOffCanvasIcon.addEventListener("click", hideOffCanvas);