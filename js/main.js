// Start

passAplyAdopt()

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