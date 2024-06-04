passAplyAdopt();
passDonate();
carouselStats();
carouselDonation();

function passAplyAdopt() {
    const modalApplyAdopt = document.getElementById("apply-adopt-modal");
    const btApplyAdopt = document.getElementsByClassName("apply-adopt-button");

    for (let i = 0; i < btApplyAdopt.length; i++) {
        btApplyAdopt[i].addEventListener("click", function() {
            birthFunctions();
            modalApplyAdopt.showModal();
        });
    }    
}

function passDonate() {
    const modalDonate = document.getElementById("donate-modal");
    const btDonate = document.getElementsByClassName("donate-button");

    for (let i = 0; i < btDonate.length; i++) {
        btDonate[i].addEventListener("click", function() {
            modalDonate.showModal();
        });
    }    
}

function closeModal(modal) {
    const modalClose = document.getElementById(modal);
    modalClose.close();
}

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

const daySelect = document.getElementById("day-bth");
const monthSelect = document.getElementById("month-bth");
const yearSelect = document.getElementById("year-bth");
daySelect.addEventListener("blur", () => updateSelectStyle(daySelect));
monthSelect.addEventListener("blur", () => updateSelectStyle(monthSelect));
yearSelect.addEventListener("blur", () => updateSelectStyle(yearSelect));
function updateSelectStyle(selectElement) {
    if (selectElement.selectedIndex !== 0) {
        selectElement.style.color = "#1E1F27";
        selectElement.style.opacity = "unset";
    }
}

const moneyInput = document.getElementById("money");
moneyInput.addEventListener("click", () => {
    moneyInput.value = "";
});

moneyInput.addEventListener("blur", () => {
    const currencyFormatter = (lang, currency, balance) => {
        return Intl.NumberFormat(lang, {
            style: "currency",
            maximumFractionDigits: 2,
            currency,
        }).format(balance);
    };
    const value = moneyInput.value.replace(",", ".");
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
        moneyInput.value = currencyFormatter("pt-BR", "BRL", numberValue);
    } else {
        moneyInput.value = "";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll(".custom-check");
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", () => {
            const paymentItems = document.querySelectorAll(".payment-item");
            for (let j = 0; j < paymentItems.length; j++) {
                paymentItems[j].classList.remove("checked");
            }
            if (radios[i].checked) {
                radios[i].closest(".payment-item").classList.add("checked");
            }
        });
    }
});

function carouselStats() {
    const carousel = document.querySelector("#stats-block .carousel");
    const arrowBtns = document.querySelectorAll("#stats-block .bt-carousel");
    const firstCardWidth = carousel.querySelector("#stats-block .card").offsetWidth;
    const carouselChildrens = [...carousel.children];
    const dots = document.querySelectorAll("#stats-block .dots li");
    let contStats = 0

    function dotChange(direction) {
        dots.forEach(dot => {
            dot.id = null;
        });

        if (direction === "bt-left") {
            contStats = (contStats > 0) ? contStats - 1 : dots.length - 1;
        } else if (direction === "bt-right") {
            contStats = (contStats < dots.length - 1) ? contStats + 1 : 0;
        }

        dots[contStats].id = "dot-checked";
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

    carousel.addEventListener("scroll", () => {
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
    });    
}

function carouselDonation() {
    const carousel = document.querySelector("#donation-block .carousel");
    const arrowBtns = document.querySelectorAll("#donation-block .bt-carousel");
    const firstCardWidth = carousel.querySelector("#donation-block .card").offsetWidth;
    const carouselChildrens = [...carousel.children];
    const dots = document.querySelectorAll("#donation-block .dots li");
    let contStats = 0

    function dotChange(direction) {
        dots.forEach(dot => {
            dot.id = null;
        });

        if (direction === "bt-left") {
            contStats = (contStats > 0) ? contStats - 1 : dots.length - 1;
        } else if (direction === "bt-right") {
            contStats = (contStats < dots.length - 1) ? contStats + 1 : 0;
        }

        dots[contStats].id = "dot-checked";
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

    carousel.addEventListener("scroll", () => {
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
    });    
}



