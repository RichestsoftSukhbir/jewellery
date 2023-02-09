// year
document.querySelector('.year').innerHTML = new Date().getFullYear();

// logo small on scroll
let topHeadHeight = document.querySelector('.top-header').clientHeight;
let navigationHeight = document.querySelector('.navigation').clientHeight;

function logoSale() {
    let scrollPos = document.documentElement.scrollTop;
    if (scrollPos > topHeadHeight) {
        document.querySelector('.logo').style.width = "170px";
        document.querySelector('.navigation-wrapper').style.padding = "15px 0";
    } else {
        document.querySelector('.logo').style.width = "280px";
        document.querySelector('.navigation-wrapper').style.padding = "24px 0";
    }
}

document.addEventListener('scroll', logoSale);

let ham = document.querySelector('.hamburger');
let btmNav = document.querySelector('.bottom-nav');
let navOverlay = document.querySelector('.nav-overlay');

ham.addEventListener('click', function () {
    btmNav.classList.toggle('active');
    ham.classList.toggle('active');
    navOverlay.classList.toggle('active');
});
navOverlay.addEventListener('click', function () {
    btmNav.classList.toggle('active');
    ham.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

// navsticky on scroll
if (document.querySelector(".header")) {
    // navbar show and hide on scroll
    let header = document.querySelector(".header");
    let navHeight = header.clientHeight;

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-" + navHeight + "px";
        }
        prevScrollpos = currentScrollPos;
    }
}

// swiper slider
var trndSwiper = new Swiper(".trnd-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".trnd-next",
        prevEl: ".trnd-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    },
});
var erngSwiper = new Swiper(".earring-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".earring-next",
        prevEl: ".earring-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    },
});
var nklsSwiper = new Swiper(".necklace-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".necklace-next",
        prevEl: ".necklace-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    },
});
var catSwiper = new Swiper(".cat-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: true,
    speed: 1000,
    navigation: {
        nextEl: ".cat-slide-btn.next",
        prevEl: ".cat-slide-btn.prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3
        }
    },
});
var testiSwiper = new Swiper(".testi-swiper", {
    slidesPerView: 1.7,
    spaceBetween: 125,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".cat-slide-btn.next",
        prevEl: ".cat-slide-btn.prev",
    },
    pagination: {
        el: '.testi-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 50
        },
        992: {
            slidesPerView: 2.2,
            spaceBetween: 125,
        }
    },
});
var relProdSwiper = new Swiper(".related-prod-swiper", {
    slidesPerView: 3.7,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".cat-slide-btn.next",
        prevEl: ".cat-slide-btn.prev",
    },
    pagination: {
        el: '.testi-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3.7,
        }
    },
});
var logoSwiper = new Swiper(".logo-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
        nextEl: ".cat-slide-btn.next",
        prevEl: ".cat-slide-btn.prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        580: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 5
        }
    },
});
var prodPrevSwiper = new Swiper(".prod-prev-gall", {
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 3.5
        },
        480: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 3.5
        },
        992: {
            slidesPerView: 5
        },
    },
});

// price range
if (document.querySelector(".min-value")) {
    let minValue = document.querySelector(".min-value");
    let maxValue = document.querySelector(".max-value");

    function validateRange(minPrice, maxPrice) {
        if (minPrice > maxPrice) {

            // Swap to Values
            let tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;
        }

        minValue.innerHTML = "$" + minPrice;
        maxValue.innerHTML = "$" + maxPrice;
    }

    const inputElements = document.querySelectorAll(".price-range-slider");

    inputElements.forEach((element) => {
        element.addEventListener("change", (e) => {
            let minPrice = parseInt(inputElements[0].value);
            let maxPrice = parseInt(inputElements[1].value);

            console.log(minPrice, maxPrice);

            validateRange(minPrice, maxPrice);
        });
    });

    validateRange(inputElements[0].value, inputElements[1].value);
}

// grid / list view toggler
if (document.querySelector('.grid-view')) {
    let gridView = document.querySelector('.grid-view');
    let listView = document.querySelector('.list-view');

    let prodWrap = document.querySelector('.product-wrap');

    function toggleMode() {
        if (localStorage.view === 'list') {
            prodWrap.classList.add('list-view');
            listView.classList.add('active');
            gridView.classList.remove('active');
        } else {
            prodWrap.classList.remove('list-view');
            gridView.classList.add('active');
            listView.classList.remove('active');
        }
    }

    toggleMode();

    listView.addEventListener('click', function () {
        localStorage.view = 'list';
        toggleMode();
    });
    gridView.addEventListener('click', function () {
        localStorage.view = 'grid';
        toggleMode();
    });
}

// drift zoom
if (document.querySelector('.drift-demo-trigger')) {
    var driftAll = document.querySelectorAll('.drift-demo-trigger');
    var pane = document.querySelector('.zoom');
    $(driftAll).each(function (i, el) {
        let drift = new Drift(
            el, {
            paneContainer: pane,
            inlinePane: 767,
            inlineOffsetY: 0,
            containInline: true,
            sourceAttribute: 'data-zoom',
            zoomFactor: 3,
            hoverBoundingBox: true
        });
    });
}

// preview image changer
let prevImage = document.querySelector('.prod-preview > img');

let altImages = document.querySelectorAll('.prod-alt');

altImages.forEach(function (element) {
    element.addEventListener('click', function () {
        let imgSrc = element.children[0].src;
        prevImage.src = imgSrc;
        prevImage.setAttribute('data-zoom', imgSrc);
        altImages.forEach(function (e) {
            e.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// product quantity
let qtyInput = document.querySelector('.qty-input');
let qtyInc = document.querySelector('.qty-inc');
let qtyDec = document.querySelector('.qty-dec');

let defaultQty = 1;

qtyDec.addEventListener('click', function () {
    qtyInput.value = --defaultQty;
    localStorage.qty = qtyInput.value;
    qtyLimit(1, this, qtyInc);
});
qtyInc.addEventListener('click', function () {
    qtyInput.value = ++defaultQty;
    localStorage.qty = qtyInput.value;
    qtyLimit(10, this, qtyDec);
});

defaultQty = localStorage.getItem('qty');
qtyInput.value = defaultQty;

qtyLimit(1, qtyDec, qtyInc);

function qtyLimit(limit, item, alter) {
    if(defaultQty == limit) {
        item.setAttribute('disabled', 'true');
        alter.removeAttribute('disabled');
    } else {
        item.removeAttribute('disabled');
        alter.removeAttribute('disabled');
    }
}

// product categories show on small screen
if (document.querySelector('.prod-cat-show')) {
    let prodCatShow = document.querySelector('.prod-cat-show');
    let prodCat = document.querySelector('.prod-cat');

    prodCatShow.addEventListener('click', function () {
        prodCat.classList.toggle('active');
    });
}