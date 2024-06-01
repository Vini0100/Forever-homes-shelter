// Start

passAplyAdopt()
passDonate()

// Modal

function passAplyAdopt() {
    const modalApplyAdopt = document.getElementById("apply-adopt-modal");
    const btApplyAdopt = document.getElementsByClassName("apply-adopt-button");

    for (let i = 0; i < btApplyAdopt.length; i++) {
        btApplyAdopt[i].addEventListener('click', function() {
            birthFunctions();
            modalApplyAdopt.showModal();
        });
    }    
}

function passDonate() {
    const modalDonate = document.getElementById("donate-modal");
    const btDonate = document.getElementsByClassName("donate-button");

    for (let i = 0; i < btDonate.length; i++) {
        btDonate[i].addEventListener('click', function() {
            modalDonate.showModal();
        });
    }    
}

function closeModal(modal) {
    const modalClose = document.getElementById(modal);
    modalClose.close();
}

// Birth

function birthFunctions() {
    populateDays();
    populateMonth();
    populateYears();
}

function populateDays() {
    const daySelect = document.getElementById("day-bth");

    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        daySelect.appendChild(option);
    }
}

function populateMonth() {
    const daySelect = document.getElementById("month-bth");

    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        daySelect.appendChild(option);
    }
}

function populateYears() {
    const yearSelect = document.getElementById("year-bth");
    const currentYear = new Date().getFullYear();

    for (var i = currentYear; i >= 1900; i--) {
        var option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        yearSelect.appendChild(option);
    }
}

// Money

const moneyInput = document.getElementById('money');

moneyInput.addEventListener('blur', function() {
    let value = moneyInput.value.trim();

    if (value.startsWith('R$')) {
        value = value.slice(2).trim();
    }
    value = value.replace(',', '.');

    const isNumber = !isNaN(value) && value !== '';
    if (isNumber) {
        moneyInput.value = `R$ ${parseFloat(value).toFixed(2)}`;
    } else {
        moneyInput.value = '';
    }
});

// Event Payment button

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('.custom-check');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            const paymentItems = document.querySelectorAll('.payment-item');
            paymentItems.forEach(item => {
                item.classList.remove('checked');
            });
            if (radio.checked) {
                radio.closest('.payment-item').classList.add('checked');
            }
        });
    });
});

/* Carousel */

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".bt-carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];
const dots = document.querySelectorAll(".dots li");
let cont = 0


function dotChange(direction) {
    dots.forEach(dot => {
        dot.id = null;
    });

    if (direction === "bt-left") {
        cont = (cont > 0) ? cont - 1 : dots.length - 1;
    } else if (direction === "bt-right") {
        cont = (cont < dots.length - 1) ? cont + 1 : 0;
    }

    dots[cont].id = "dot-checked";
}


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "bt-left" ? -firstCardWidth : firstCardWidth;
        dotChange(btn.id);
    });
});
const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}

carousel.addEventListener("scroll", infiniteScroll);


