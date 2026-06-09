import { createProductCard } from "./utils.js";

const SingleContainer = document.querySelector(".single-container");
const otherProductContainer = document.querySelector("#other-product-container");
const specTitles = document.querySelectorAll(".spec-title");
const specContents = document.querySelectorAll(".spec-content");
const descProduct = document.querySelector("#desc-product");
const productFeature = document.querySelector("#product-specs");
const addBasketModal = document.querySelector(".add-to-basket-modal")
const closeAddBasketModalIcon = document.querySelector(".close-add-to-basket-modal");
const Loader = document.querySelector("#Loader");
const insuranceModal = document.querySelector(".insurance-modal");
const closeInsuranceModal = document.querySelector(".close-insurance-modal");
const priceInsuranceModal = document.querySelector(".price-insurance");
const addBasketModalImg = document.querySelector(".add-to-basket-modal-pro-img img");
const addBasketModalTitle = document.querySelector(".add-to-basket-modal-pro-title span");
const addBasketModalPrice = document.querySelector(".add-to-basket-modal-price")

/* const insuranceInfoBtn = document.querySelector(".insurance-sidebar-h-info button");
const insuranceModal = document.querySelector(".insurance-modal");
const closeInsuranceModalIcon = document.querySelector(".close-insurance-modal");
 */

/* document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById('productGalleryModal');
    const mainImage = modal.querySelector('.pgm-main img');
    const thumbsContainer = modal.querySelector('.pgm-thumbs');
    const closeBtn = modal.querySelector('.pgm-close');
    const prevBtn = modal.querySelector('.pgm-prev');
    const nextBtn = modal.querySelector('.pgm-next');

    const galleryImages = document.querySelectorAll('.single-p-gallery-item img');

    let images = [];
    let currentIndex = 0;

    galleryImages.forEach((img, index) => {
        images.push(img.src);

        img.addEventListener('click', () => openModal(index));
    });

    function openModal(index) {
        currentIndex = index;
        renderThumbs();
        updateMainImage();
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    function updateMainImage() {
        mainImage.src = images[currentIndex];
    }

    function renderThumbs() {
        thumbsContainer.innerHTML = '';

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;

            if (index === currentIndex) {
                img.classList.add('active');
            }

            img.addEventListener('click', () => {
                currentIndex = index;
                updateMainImage();
                renderThumbs();
            });

            thumbsContainer.appendChild(img);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage();
        renderThumbs();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage();
        renderThumbs();
    }

    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

}); */

/* document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("commentModal");
    const openBtn = document.querySelector(".registry-comment-btn button");
    const closeBtn = modal.querySelector(".cm-close");
    const stars = modal.querySelectorAll(".cm-stars span");
    const options = modal.querySelectorAll(".cm-options button");

    let selectedRating = 0;

    function openModal() {
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    if (openBtn) {
        openBtn.addEventListener("click", openModal);
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.dataset.value;

            stars.forEach(s => s.classList.remove("active"));

            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    options.forEach(btn => {
        btn.addEventListener("click", function () {
            options.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });


    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = parseInt(this.dataset.value);

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }

            options.forEach(b => b.classList.remove("active"));
            let buttonIndex = 0;
            switch (selectedRating) {
                case 1: buttonIndex = 0; break;
                case 2: buttonIndex = 1; break;
                case 3: buttonIndex = 2; break;
                case 4: buttonIndex = 3; break;
                case 5: buttonIndex = 4; break;
            }
            options[buttonIndex].classList.add("active");
        });
    });

    options.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            options.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            let starsToActivate = 1;
            switch (index) {
                case 0: starsToActivate = 1; break;
                case 1: starsToActivate = 2; break;
                case 2: starsToActivate = 3; break;
                case 3: starsToActivate = 4; break;
                case 4: starsToActivate = 5; break;
            }

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < starsToActivate; i++) {
                stars[i].classList.add("active");
            }

            selectedRating = starsToActivate;
        });
    });

}); */

/* Alert */
/* document.addEventListener("DOMContentLoaded", function () {

    const addInsuranceBtn = document.querySelector(".add-insurance button");
    const modalFooterBtn = document.querySelector(".insurance-modal-f-btn button");
    const modal = document.querySelector(".insurance-modal");
    const modalContainer = document.querySelector(".insurance-modal-container");
    const modalToggleBtn = document.querySelector(".insurance-sidebar-h-info button");
    const modalCloseBtn = document.querySelector(".close-insurance-modal");

    const productPrices = document.querySelectorAll(
        ".single-sidebar-main-price ins bdi, .single-sidebar-price-with-discount ins bdi"
    );

    const insurancePriceEl = document.querySelector(
        ".single-sidebar-price-insurance ins bdi"
    );

    let insuranceAdded = false;

    function parsePrice(text) {
        return parseInt(text.replace(/[^0-9]/g, ""));
    }

    function formatPrice(num) {
        return num.toLocaleString("fa-IR");
    }

    const basePrice = parsePrice(productPrices[0].innerText);
    const insurancePrice = parsePrice(insurancePriceEl.innerText);

    function updatePrice() {

        let newPrice = insuranceAdded
            ? basePrice + insurancePrice
            : basePrice;

        productPrices.forEach(function (el) {
            el.innerHTML = `
                ${formatPrice(newPrice)}
                <span class="woocommerce-Price-currencySymbol">
                    تومان
                </span>
            `;
        });
    }

    function updateButtons() {

        const addIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M7.999 12.667V3.333M12.665 8H3.332"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round"></path>
    </svg>
    بیمه میخواهم
    `;

        const removeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none">
        <path d="M18 6V18.75C18 19.993 16.973 21 15.731 21H8.231C6.988 21 6 19.993 6 18.75V6"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.5 6H4.5"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 3H14"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 10V17"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 17V10"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    حذف بیمه
    `;

        if (insuranceAdded) {
            addInsuranceBtn.innerHTML = removeIcon;
            modalFooterBtn.innerHTML = removeIcon;
        } else {
            addInsuranceBtn.innerHTML = addIcon;
            modalFooterBtn.innerHTML = addIcon;
        }
    }

    function toggleInsurance() {
        insuranceAdded = !insuranceAdded;

        updateButtons();
        updatePrice();

        showAlert(insuranceAdded ? "add" : "remove");
    }

    addInsuranceBtn.addEventListener("click", toggleInsurance);
    modalFooterBtn.addEventListener("click", toggleInsurance);


    modalToggleBtn.addEventListener("click", function () {
        modal.classList.add("active");
    });

    modalCloseBtn.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", function (e) {
        if (!modalContainer.contains(e.target)) {
            modal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.classList.remove("active");
        }
    });

    const alertBox = document.querySelector(".insurance-alert");
    let alertTimeout;

    function showAlert(type) {

        clearTimeout(alertTimeout);

        if (type === "add") {
            alertBox.className = "insurance-alert active success";
            alertBox.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#00c853"
                stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
            </svg>
            بیمه با موفقیت اضافه شد
        `;
        } else {
            alertBox.className = "insurance-alert active remove";
            alertBox.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6"
                stroke="#DC2655" stroke-width="2"
                stroke-linecap="round"/>
            </svg>
            بیمه حذف شد
        `;
        }

        alertTimeout = setTimeout(() => {
            alertBox.classList.remove("active");
        }, 2000);
    }

}); */

/* Fetching Data */
const fetchData = async () => {
    try {
        const response = await fetch("../data/data.json");
        const products = await response.json();

        const params = new URLSearchParams(window.location.search);
        const productId = params.get("id");

        const product = products.find((item) => String(item.id) === String(productId));

        if (!productId) {
            SingleContainer.innerHTML = "<p>محصول مورد نظر پیدا نشد.</p>";
        }

        const sameCategoryProducts = products.filter(
            (item) => item.categorypersian === product.categorypersian && String(item.id) !== String(productId)
        );

        const relatedProducts = sameCategoryProducts.slice(0, 6);

        SingleContainer.insertAdjacentHTML("beforeend",
            `
               <div class="single-p">
                    <div class="single-p-images">
                        <div class="single-p-image">
                            <img src="${product.images[0]}" alt="">
                        </div>
                        <div class="single-p-gallery">
                            ${product.images.slice(0, 3).map((img, index) => `
                                <div class="single-p-gallery-item">
                                    <img class="other-images-single-product" src="${img}" alt="${product.title}">
                                </div>
                            `).join("") || ""}
                            ${product.images.length > 4 ?
                `
                            <div class="gallery-more-count" style="display :${product.images.length > 4 ? "flex" : "none"}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"
                                    fill="none">
                                    <path
                                        d="m2.374 17.493-.018.019a5.7 5.7 0 0 1-.47-1.84c.065.67.24 1.278.488 1.821M8.28 9.552a2.19 2.19 0 1 0 0-4.38 2.19 2.19 0 0 0 0 4.38"
                                        fill="#676f71" />
                                    <path
                                        d="M14.897 1.84h-7.71c-3.35 0-5.347 1.997-5.347 5.347v7.71c0 1.004.175 1.878.515 2.614.792 1.749 2.485 2.733 4.831 2.733h7.711c3.35 0 5.347-1.997 5.347-5.346V7.187c0-3.35-1.997-5.347-5.347-5.347m3.847 9.662c-.718-.616-1.877-.616-2.595 0l-3.828 3.285c-.718.617-1.877.617-2.595 0l-.313-.257c-.653-.57-1.693-.626-2.43-.13l-3.44 2.31a4.9 4.9 0 0 1-.323-1.812V7.187c0-2.595 1.371-3.966 3.966-3.966h7.711c2.595 0 3.966 1.37 3.966 3.966v4.417z"
                                        fill="#676f71" />
                                </svg>
                                <div class="gallery-more-count-number-container">
                                    <span class="gallery-more-count-number">${product.images.length - 3}</span>
                                    <span>+ تصویر</span>
                                </div>
                            </div>
                            `
                : ""}
                        </div>
                    </div>
                    <div class="single-p-info">
                        <div class="single-p-title">
                            <h1>${product.title}</h1>
                        </div>
                        ${product.color ?
                `    
                        <div class="single-p-color">
                            <div class="single-p-color-title-container">
                                <h4 class="single-p-color-title">
                                    طرح و رنگبندی
                                </h4>
                            </div>
                            <div class="single-p-color-container">
                                <div class="single-p-color-item">
                                    <span class="single-p-color-item-bg" style="background-color: ${product.color.en};"></span>
                                    <span class="single-p-color-item-title">${product.color.fa}</span>
                                </div>
                            </div>
                        </div>
                        ` : ""
            }
                        ${product.warranties ?
                `     
                        <div class="single-p-gara">
                            <div class="single-p-gara-title-container">
                                <h4 class="single-p-gara-title">
                                    گارانتی
                                </h4>
                            </div>
                            <div class="single-p-gara-options">
                            ${product.warranties.map((warranty) => {
                    return `
                                <label class="gara-item">
                                    <input type="radio" name="gara" checked>
                                    <span class="gara-box">
                                        ${warranty}
                                    </span>
                                </label>
                                `
                }).join("")}
                            </div>
                        </div>
                        `
                : ""}
                        ${product.specs ?
                `    
                        <div class="single-p-feature">
                            <div class="single-p-feature-title-container">
                                <h4 class="single-p-feature-title">
                                    ویژگی های اصلی
                                </h4>
                            </div>
                            <div class="single-p-feature-item-container">
                                ${product.specs.slice(0, 3).map((spec) => {
                    return `
                                    <div class="single-p-feature-item">
                                        <span class="single-p-feature-item-title">
                                            ${spec.title}
                                        </span>
                                        <span class="single-p-feature-item-content">
                                            ${spec.value}
                                        </span>
                                    </div>
                                    `
                }).join("")}
                            </div>
                        </div>
                        `
                : ""}
                    </div>
                    ${product.rate ?
                `
                        <div class="single-p-rate">
                        <span>${product.rate}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.0002 17.768L16.0112 19.876C16.7922 20.286 17.7042 19.623 17.5552 18.754L16.7892 14.288L20.0352 11.127C20.6672 10.511 20.3192 9.43798 19.4452 9.31098L14.9612 8.65898L12.9562 4.59398C12.5662 3.80298 11.4372 3.80298 11.0472 4.59398L9.04121 8.65898L4.55721 9.31098C3.68421 9.43798 3.33521 10.511 3.96721 11.127L7.21321 14.288L6.44721 18.754C6.29821 19.623 7.21021 20.287 7.99121 19.876L12.0022 17.768H12.0002Z"
                                stroke="#F3A62C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                        `
                : ""}
                    <div class="single-p-action-container">
                        <div class="single-p-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.696 4C18.871 4 21 6.98 21 9.755C21 15.388 12.161 20 12 20C11.839 20 3 15.388 3 9.755C3 6.98 5.129 4 8.304 4C10.119 4 11.311 4.905 12 5.711C12.689 4.905 13.881 4 15.696 4Z"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="single-p-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M8.55286 10.1141C9.59439 11.1556 9.59439 12.8443 8.55286 13.8858C7.51133 14.9273 5.82268 14.9273 4.78115 13.8858C3.73962 12.8443 3.73962 11.1556 4.78115 10.1141C5.82268 9.07256 7.51133 9.07256 8.55286 10.1141"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M19.2208 4.78115C20.2624 5.82268 20.2624 7.51133 19.2208 8.55286C18.1793 9.59439 16.4906 9.59439 15.4491 8.55286C14.4076 7.51133 14.4076 5.82268 15.4491 4.78115C16.4906 3.73962 18.1793 3.73962 19.2208 4.78115"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M19.2208 15.4471C20.2624 16.4886 20.2624 18.1773 19.2208 19.2188C18.1793 20.2603 16.4906 20.2603 15.4491 19.2188C14.4076 18.1773 14.4076 16.4886 15.4491 15.4471C16.4906 14.4056 18.1793 14.4056 19.2208 15.4471"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M9.03906 10.81L14.9591 7.84998" stroke="#676F71" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.03906 13.19L14.9591 16.15" stroke="#676F71" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="single-p-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.5028 17.3612C18.5503 17.3612 19.4003 16.5139 19.4036 15.4665V15.4665V15.4665C19.403 14.9335 19.1902 14.4227 18.8124 14.0469L17.5529 12.7863V9.04178C17.5526 7.56994 16.9673 6.15856 15.9259 5.11847C14.8845 4.07837 13.4724 3.49487 12.0005 3.49646V3.49646C8.93897 3.49812 6.45779 5.9802 6.45724 9.04178V12.7833L5.19772 14.0439C4.81959 14.4196 4.60651 14.9304 4.60547 15.4635V15.4635V15.4635C4.60878 16.5109 5.45882 17.3582 6.50626 17.3582L17.5028 17.3612Z"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M10.5195 20.5035H13.4778" stroke="#676F71" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="single-p-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M21 11V14" stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M15 20H19C20.1046 20 21 19.1046 21 18V17" stroke="#676F71" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 8V6C21 4.89543 20.1046 4 19 4H15" stroke="#676F71" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 2V22" stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H12"
                                    stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <aside class="single-aside">
                    ${product.insurance.hasInsurance ?
                `   
                    <div class="insurance-sidebar">
                        <div class="insurance-sidebar-h">
                            <div class="insurance-sidebar-h-text">
                                <span>بیمه به کالا اضافه شد</span>
                            </div>
                            <div class="insurance-sidebar-h-info">
                                <button onclick="showInsuranceModal()">
                                    نمایش جزیئات
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M9.335 5.333 6.668 8l2.667 2.667" stroke="#0038bc" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="insurance-sidebar-c">
                            <div class="add-insurance">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M7.999 12.667V3.333M12.665 8H3.332" stroke="#dc2655" stroke-width="2"
                                            stroke-linecap="round" />
                                    </svg>
                                    بیمه میخواهم
                                </button>
                            </div>
                            <div class="price-insurance">
                                ${product.insurance.insuranceDiscountPercent > 0 ?
                    `    
                                <!-- قیمت تخفیف خورده -->
                                <div class="single-sidebar-price-insurance">
                                    <p class="price">
                                        <del aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>${product.insurance.insurancePrice.toLocaleString()}
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>${(product.insurance.insurancePrice - (product.insurance.insurancePrice * (product.insurance.insuranceDiscountPercent / 100))).toLocaleString()}
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </ins>
                                    </p>
                                    <span class="price-insurance-discount">${product.insurance.insuranceDiscountPercent}%</span>
                                </div>
                                ` : ""}

                                <!-- قیمت اصلی -->
                                <div class="single-sidebar-price-insurance-with-discount">
                                    <p class="price">
                                        <del aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>${product.insurance.insurancePrice.toLocaleString()}
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>${(product.insurance.insurancePrice - (product.insurance.insurancePrice * (product.insurance.insuranceDiscountPercent / 100))).toLocaleString()}
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </ins>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                : ""}
                    <div class="single-sidebar">
                        <div class="single-sidebar-h">
                            <div class="gara-select">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4.9506 16.9818L4.69135 15.0265L3.49409 13.46C2.8353 12.5973 2.8353 11.4004 3.49409 10.5377L4.69135 8.97311L4.9524 7.01774C5.09629 5.94143 5.94295 5.0947 7.01924 4.95074L8.97266 4.69147L10.539 3.49412C11.4016 2.83529 12.5984 2.83529 13.461 3.49412L15.0273 4.69147L16.9826 4.95255C18.0586 5.09709 18.9049 5.94353 19.0494 7.01955L19.3086 8.97312L20.5059 10.5378C21.1647 11.4005 21.1647 12.5973 20.5059 13.46L19.3086 15.0265L19.0476 16.9818C18.9039 18.0586 18.0573 18.9059 16.9808 19.0506L15.0273 19.3081L13.461 20.5072C12.5978 21.1642 11.4022 21.1642 10.539 20.5072L8.97266 19.3081L7.01744 19.047C5.94116 18.9044 5.09408 18.058 4.9506 16.9818Z"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.1036 8.08572C11.272 7.74434 11.6197 7.5282 12.0004 7.5282C12.3811 7.5282 12.7287 7.74434 12.8972 8.08572L13.406 9.11713C13.5516 9.41234 13.8332 9.61697 14.1589 9.66431L15.297 9.82973C15.6736 9.88451 15.9865 10.1483 16.1041 10.5102C16.2217 10.8721 16.1238 11.2694 15.8514 11.5351L15.0275 12.3387C14.792 12.5685 14.6845 12.8994 14.7401 13.2236L14.9345 14.3569C14.9988 14.732 14.8446 15.1111 14.5368 15.3349C14.2289 15.5586 13.8207 15.5882 13.4838 15.4111L12.4656 14.876C12.1743 14.7229 11.8264 14.7229 11.5351 14.876L10.5169 15.4111C10.18 15.5882 9.77183 15.5586 9.46395 15.3349C9.15606 15.1111 9.00186 14.732 9.06617 14.3569L9.26057 13.2236C9.31619 12.8994 9.20874 12.5685 8.97322 12.3387L8.14938 11.5351C7.87699 11.2694 7.77903 10.8721 7.89667 10.5102C8.01432 10.1483 8.32718 9.8845 8.70376 9.82973L9.84189 9.66431C10.1676 9.61697 10.4492 9.41234 10.5948 9.11713L11.1036 8.08572Z"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                            </div>
                            <div class="color-select">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M11.998 6.37502C11.846 6.37502 11.723 6.49802 11.725 6.65002C11.725 6.80202 11.848 6.92502 12 6.92502C12.152 6.92502 12.275 6.80202 12.275 6.65002C12.273 6.49802 12.151 6.37502 11.998 6.37502"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M6.92294 11.999C6.92294 11.847 6.79994 11.724 6.64894 11.726C6.49694 11.726 6.37394 11.849 6.37394 12.001C6.37394 12.153 6.49694 12.276 6.64894 12.276C6.80094 12.276 6.92294 12.152 6.92294 11.999"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15.9782 8.02199C15.8712 7.91499 15.6972 7.91499 15.5912 8.02299C15.4842 8.12999 15.4842 8.30399 15.5912 8.41099C15.6982 8.51799 15.8722 8.51799 15.9792 8.41099C16.0862 8.30299 16.0862 8.12999 15.9782 8.02199"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M8.41181 15.589C8.30481 15.482 8.13081 15.482 8.02481 15.59C7.91781 15.697 7.91781 15.871 8.02481 15.978C8.13181 16.085 8.30581 16.085 8.41281 15.978C8.51981 15.871 8.51981 15.697 8.41181 15.589"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M8.40941 8.40998C8.51641 8.30298 8.51641 8.12898 8.40841 8.02298C8.30141 7.91598 8.12741 7.91598 8.02041 8.02298C7.91341 8.12998 7.91341 8.30398 8.02041 8.41098C8.12741 8.51798 8.30141 8.51798 8.40941 8.40998"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.9995 21C6.94455 21 2.86255 16.832 3.00355 11.745C3.13355 7.04897 7.04855 3.13397 11.7445 3.00397C16.8315 2.86297 20.9995 6.94497 20.9995 12V13C20.9995 14.105 20.1045 15 18.9995 15H16.9365C15.6075 15 14.6485 16.272 15.0135 17.549L15.2705 18.45C15.6365 19.728 14.6765 21 13.3485 21H11.9995Z"
                                        stroke="#676F71" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>${product.color.fa}</span>
                            </div>
                        </div>
                        <div class="single-sidebar-b">
                            <!-- قیمت تخفیف خورده -->
                            ${product.discountPercent > 0 ?
                `    
                            <div class="single-sidebar-main-price">
                                <p class="price">
                                    <del aria-hidden="true">
                                        <span class="woocommerce-Price-amount amount">
                                            <bdi>${product.price.toLocaleString()}
                                                <span class="woocommerce-Price-currencySymbol">
                                                    تومان
                                                </span>
                                            </bdi>
                                        </span>
                                    </del>
                                    <ins aria-hidden="true">
                                        <span class="woocommerce-Price-amount amount">
                                            <bdi>${product.price.toLocaleString()}
                                                <span class="woocommerce-Price-currencySymbol">
                                                    تومان
                                                </span>
                                            </bdi>
                                        </span>
                                    </ins>
                                </p>
                                <span class="single-p-discount">${product.discountPercent}%</span>
                            </div>
                            `
                : ""
            }

                            <!-- قیمت اصلی -->
                            <div class="single-sidebar-price-with-discount">
                                <p class="price">
                                    <del aria-hidden="true">
                                        <span class="woocommerce-Price-amount amount">
                                            <bdi>${product.price.toLocaleString()}
                                                <span class="woocommerce-Price-currencySymbol">
                                                    تومان
                                                </span>
                                            </bdi>
                                        </span>
                                    </del>
                                    <ins aria-hidden="true">
                                        <span class="woocommerce-Price-amount amount">
                                            <bdi>${(product.price - (product.price * (product.discountPercent / 100))).toLocaleString()}
                                                <span class="woocommerce-Price-currencySymbol">
                                                    تومان
                                                </span>
                                            </bdi>
                                        </span>
                                    </ins>
                                </p>
                            </div>

                        </div>
                        <div class="single-sidebar-f">
                            <div class="count">
                                <!-- Plus -->
                                <div class="plus">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M12 19V5m7 7H5" stroke="#676f71" stroke-width="2"
                                            stroke-linecap="round" />
                                    </svg>
                                </div>
                                <!-- Count -->
                                <div class="count-number">1</div>
                                <!-- Minus -->
                                <div class="minus">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M18 6v12.75c0 1.243-1.027 2.25-2.269 2.25h-7.5A2.233 2.233 0 0 1 6 18.75V6m13.5 0h-15M10 3h4m0 7v7m-4 0v-7"
                                            stroke="#676f71" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <a href="#" class="single-sidebar-add-to-cart-btn" onclick="showAddToBasketModal(event)">
                                افزودن به سبدخرید
                            </a>
                        </div>
                        <div class="single-sidebar-mobile">
                            <div class="single-sidebar-b">
                                <!-- قیمت تخفیف خورده -->
                                <div class="single-sidebar-main-price">
                                    <p class="price">
                                        <del aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>590,000
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>468,000
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </ins>
                                    </p>
                                    <span class="single-p-discount">۳۰%</span>
                                </div>

                                <!-- قیمت اصلی -->
                                <div class="single-sidebar-price-with-discount">
                                    <p class="price">
                                        <del aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>590,000
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins aria-hidden="true">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>468,000
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        تومان
                                                    </span>
                                                </bdi>
                                            </span>
                                        </ins>
                                    </p>
                                </div>

                            </div>
                            <div class="single-sidebar-f">
                                <div class="count">
                                    <!-- Plus -->
                                    <div class="plus">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M12 19V5m7 7H5" stroke="#676f71" stroke-width="2"
                                                stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <!-- Count -->
                                    <div class="count-number">1</div>
                                    <!-- Minus -->
                                    <div class="minus">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M18 6v12.75c0 1.243-1.027 2.25-2.269 2.25h-7.5A2.233 2.233 0 0 1 6 18.75V6m13.5 0h-15M10 3h4m0 7v7m-4 0v-7"
                                                stroke="#676f71" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <a href="#" class="single-sidebar-add-to-cart-btn" onclick="showAddToBasketModal(event)">
                                    افزودن به سبدخرید
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            `
        )

        if (relatedProducts.length > 0) {
            relatedProducts.forEach((relatedItem) => {
                otherProductContainer.insertAdjacentHTML("beforeend", createProductCard(relatedItem));
            });
        } else {
            otherProductContainer.insertAdjacentHTML("beforebegin",
                `<p class="no-related-products">محصول دیگری در این دسته‌بندی موجود نیست.</p>`
            );
        }

        descProduct.innerHTML = product.description;

        productFeature.innerHTML = product.specs.map((spec) => {
            return `
            <tr class="product-specs__row">
                <th scope="row" class="product-specs__label">
                ${spec.title}
                </th>
                <td class="product-specs__value">
                ${spec.value}
                </td>
             </tr>
            `
        }).join("");

        priceInsuranceModal.insertAdjacentHTML("beforeend",
            `
               ${product.insurance.insuranceDiscountPercent > 0 ?
                `
               <div class="single-sidebar-price-insurance">
                    <p class="price">
                        <del aria-hidden="true">
                            <span class="woocommerce-Price-amount amount">
                                <bdi>${product.insurance.insurancePrice.toLocaleString()}
                                    <span class="woocommerce-Price-currencySymbol">
                                        تومان
                                    </span>
                                </bdi>
                            </span>
                        </del>
                        <ins aria-hidden="true">
                            <span class="woocommerce-Price-amount amount">
                                <bdi>${(product.insurance.insurancePrice - (product.insurance.insurancePrice * (product.insurance.insuranceDiscountPercent / 100))).toLocaleString()}
                                    <span class="woocommerce-Price-currencySymbol">
                                        تومان
                                    </span>
                                </bdi>
                            </span>
                        </ins>
                    </p>
                    ${product.insurance.insuranceDiscountPercent > 0 ? `<span class="price-insurance-discount">${product.insurance.insuranceDiscountPercent}%</span>` : ""}
                </div>
                ` : ""}
                <div class="single-sidebar-price-insurance-with-discount">
                    <p class="price">
                        <del aria-hidden="true">
                            <span class="woocommerce-Price-amount amount">
                                <bdi>${product.insurance.insurancePrice.toLocaleString()}
                                    <span class="woocommerce-Price-currencySymbol">
                                        تومان
                                    </span>
                                </bdi>
                            </span>
                        </del>
                        <ins aria-hidden="true">
                            <span class="woocommerce-Price-amount amount">
                                <bdi>${(product.insurance.insurancePrice - (product.insurance.insurancePrice * (product.insurance.insuranceDiscountPercent / 100))).toLocaleString()}
                                    <span class="woocommerce-Price-currencySymbol">
                                        تومان
                                    </span>
                                </bdi>
                            </span>
                        </ins>
                    </p>
                </div>
            `
        )

        addBasketModalImg.src = product.images[0];

        addBasketModalTitle.innerText = product.title;

        if (product.discountPercent) {
            addBasketModalPrice.innerText = (product.price - (product.price * (product.discountPercent / 100))).toLocaleString()
        } else {
            addBasketModalPrice.innerText = (product.price).toLocaleString();
        }

    } catch (error) {

    }
}

/* Tabs Switcher */
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

/* Show Modal */
window.showAddToBasketModal = function (event) {
    const count = document.querySelector(".count");

    event.preventDefault();
    addBasketModal.classList.add("active");
    count.classList.add("active");
}

/* Hide Modal */
const closeAddToBasketModal = () => {
    addBasketModal.classList.remove("active");
}

/* Show Insurance Modal */
window.showInsuranceModal = function () {
    loader();
    insuranceModal.classList.add("active");
}

/* Hide Insurance Modal */
const hideInsuranceModal = () => {
    insuranceModal.classList.remove("active");
}

/* Loader */
const loader = () => {
    Loader.classList.add("active");
    setTimeout(() => {
        Loader.classList.remove("active");
    }, 1000);
}

window.addEventListener("load", fetchData);
closeAddBasketModalIcon.addEventListener("click", closeAddToBasketModal);
closeInsuranceModal.addEventListener("click", hideInsuranceModal)
window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        closeAddToBasketModal()
        hideInsuranceModal()
    }
});