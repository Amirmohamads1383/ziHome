const createProductCard = (product) => {
    return `
        <div class="swiper-slide">
            <div class="product">
                <div class="product-img">
                    <img src="${product.images[0]}" alt="">
                </div>
                <div class="product-detail">
                    <div class="product-title">
                        <h3>
                           <a href ="single.html?id=${product.id}">${product.title}</a>
                        </h3>
                    </div>
                    <div class="product-price">
                        ${product.discountPercent > 0 ? `
                        <div class="product-price-dis">
                            <div class="dis-product">
                                <span>${product.price.toLocaleString()}</span>
                            </div>
                            <div class="main-price">
                                <div class="dis">
                                    <span>${product.discountPercent}%</span>
                                </div>
                                <div>
                                    <span class="price">
                                        <span class="price-value">${(product.price - (product.price * (product.discountPercent / 100))).toLocaleString()}</span>
                                        <span class="price-currency">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        ` :
            `
                            <div class="main-price">
                                <span class="price">
                                    <span class="price-value">${product.price.toLocaleString()}</span>
                                    <span class="price-currency">تومان</span>
                                </span>
                            </div>
                        `}
                    </div>
                </div>
                <div class="rate">
                    <span>
                        ${product.rate}
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                            viewBox="0 0 17 17" fill="none">
                            <path
                                d="M5.928 3.119C6.878 1.415 7.353.563 8.063.563s1.185.852 2.135 2.556l.246.44c.27.485.405.727.615.887s.473.219.997.338l.477.108c1.845.417 2.768.626 2.987 1.331.22.706-.41 1.441-1.667 2.912l-.325.38c-.358.418-.537.627-.617.886-.08.258-.053.537 0 1.095l.05.507c.19 1.962.285 2.944-.29 3.38-.574.436-1.437.038-3.165-.757l-.447-.206c-.49-.226-.736-.339-.996-.339s-.506.113-.996.34l-.447.205c-1.728.795-2.591 1.193-3.166.757s-.48-1.418-.289-3.38l.05-.507c.053-.558.08-.837 0-1.095-.08-.259-.26-.468-.617-.886l-.325-.38C1.015 7.665.387 6.929.606 6.223c.22-.705 1.142-.914 2.987-1.331l.477-.108c.524-.12.786-.178.997-.338s.345-.402.615-.886z"
                                stroke="#ec8514" stroke-width="1.125" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    `
}

export { createProductCard }