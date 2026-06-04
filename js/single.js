const insuranceInfoBtn = document.querySelector(".insurance-sidebar-h-info button");

const insuranceModal = document.querySelector(".insurance-modal");

const closeInsuranceModalIcon = document.querySelector(".close-insurance-modal");

const addToBasketModal = document.querySelector(".add-to-basket-modal");

const addToBasketBtn = document.querySelector(".single-sidebar-add-to-cart-btn");

const closeAddToBasketModalIcon = document.querySelector(".close-add-to-basket-modal");
const specTitles = document.querySelectorAll(".spec-title");
const specContents = document.querySelectorAll(".spec-content");

const count = document.querySelector(".count");


document.addEventListener("DOMContentLoaded", function () {

    const galleryItems = document.querySelectorAll('.single-p-gallery-item');
    const moreBox = document.querySelector('.gallery-more-count');
    const moreNumber = document.querySelector('.gallery-more-count-number');

    if (!moreBox || !moreNumber) return;

    const totalImages = galleryItems.length;

    if (totalImages <= 3) {

        // اگر 3 تا یا کمتر بود
        moreBox.style.display = "none";

    } else {

        const remaining = totalImages - 3;
        moreNumber.textContent = remaining;

        // فقط 3 تصویر اول نمایش داده شود
        galleryItems.forEach((item, index) => {
            if (index > 2) {
                item.style.display = "none";
            }
        });

        moreBox.style.display = "flex"; // یا block بسته به CSS
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById('productGalleryModal');
    const mainImage = modal.querySelector('.pgm-main img');
    const thumbsContainer = modal.querySelector('.pgm-thumbs');
    const closeBtn = modal.querySelector('.pgm-close');
    const prevBtn = modal.querySelector('.pgm-prev');
    const nextBtn = modal.querySelector('.pgm-next');

    const galleryImages = document.querySelectorAll('.single-p-gallery-item img');

    let images = [];
    let currentIndex = 0;

    // گرفتن سورس تصاویر
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

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // بستن با کلیک بیرون
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // بستن با ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

});


document.addEventListener("DOMContentLoaded", function () {

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

    // باز کردن مودال
    if (openBtn) {
        openBtn.addEventListener("click", openModal);
    }

    // بستن
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

    // سیستم ستاره‌ای
    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.dataset.value;

            stars.forEach(s => s.classList.remove("active"));

            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    // انتخاب حالت کلی
    options.forEach(btn => {
        btn.addEventListener("click", function () {
            options.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });


    // سیستم ستاره‌ای
    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = parseInt(this.dataset.value);

            // فعال کردن ستاره‌ها
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }

            // فعال کردن دکمه‌ها بر اساس ستاره‌ها
            options.forEach(b => b.classList.remove("active"));
            let buttonIndex = 0; // پیشفرض بد
            switch (selectedRating) {
                case 1: buttonIndex = 0; break; // بد
                case 2: buttonIndex = 1; break; // ضعیف
                case 3: buttonIndex = 2; break; // معمولی
                case 4: buttonIndex = 3; break; // خوب
                case 5: buttonIndex = 4; break; // عالی
            }
            options[buttonIndex].classList.add("active");
        });
    });

    // سیستم دکمه‌ها
    options.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            options.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            // ستاره‌ها بر اساس دکمه فعال شوند
            let starsToActivate = 1; // پیشفرض بد
            switch (index) {
                case 0: starsToActivate = 1; break; // بد
                case 1: starsToActivate = 2; break; // ضعیف
                case 2: starsToActivate = 3; break; // معمولی
                case 3: starsToActivate = 4; break; // خوب
                case 4: starsToActivate = 5; break; // عالی
            }

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < starsToActivate; i++) {
                stars[i].classList.add("active");
            }

            // مقدار rating را هم بروزرسانی می‌کنیم
            selectedRating = starsToActivate;
        });
    });

});

/* Alert */
document.addEventListener("DOMContentLoaded", function () {

    const addInsuranceBtn = document.querySelector(".add-insurance button");
    const modalFooterBtn = document.querySelector(".insurance-modal-f-btn button");
    const modal = document.querySelector(".insurance-modal");
    const modalContainer = document.querySelector(".insurance-modal-container");
    const modalToggleBtn = document.querySelector(".insurance-sidebar-h-info button");
    const modalCloseBtn = document.querySelector(".close-insurance-modal");

    // قیمت محصول (هر دو محل)
    const productPrices = document.querySelectorAll(
        ".single-sidebar-main-price ins bdi, .single-sidebar-price-with-discount ins bdi"
    );

    // قیمت بیمه
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

    /* باز و بسته شدن مودال */

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

});


const showAddToBasketModal = () => {
    addToBasketModal.classList.add("active")
}

const closeAddToBasketModal = (e) => {
    addToBasketModal.classList.remove("active");
    if (e.key === "Escape" && modal.classList.contains("active")) {
    }

    if (e.target === addToBasketModal) {
        closeAddToBasketModal();
    }
}

const showCount = () => {
    count.classList.add("active");
}

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

closeAddToBasketModalIcon.addEventListener("click", closeAddToBasketModal);
document.addEventListener("keydown", closeAddToBasketModal);
addToBasketModal.addEventListener('click', closeAddToBasketModal);
addToBasketBtn.addEventListener("click", showAddToBasketModal);
addToBasketBtn.addEventListener("click", showCount);