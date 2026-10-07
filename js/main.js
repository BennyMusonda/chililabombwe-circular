// =========================================
// CHILILABOMBWE CIRCULAR - MAIN JAVASCRIPT
// =========================================


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


if (menuButton && mainNav) {

    menuButton.addEventListener("click", function() {

        mainNav.classList.toggle("active");

    });

}


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING
// =========================================

const navLinks =
    document.querySelectorAll("#mainNav a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (mainNav) {

            mainNav.classList.remove("active");

        }

    });

});


// =========================================
// REPORT WASTE DEMO
// =========================================

function showWasteDemo() {

    const choice = confirm(
        "♻️ Waste Reporting Demo\n\n" +
        "In the full MVP, you will be able to report:\n\n" +
        "• Plastic\n" +
        "• Paper\n" +
        "• Cardboard\n" +
        "• Glass\n" +
        "• Metal\n\n" +
        "Would you like to create an account first?"
    );


    if (choice) {

        window.location.href = "register.html";

    }

}


// =========================================
// REPORT BUTTON
// =========================================

const reportWasteButton =
    document.getElementById("reportWasteButton");


if (reportWasteButton) {

    reportWasteButton.addEventListener(
        "click",
        showWasteDemo
    );

}


// =========================================
// CTA REPORT BUTTON
// =========================================

const ctaReportButton =
    document.getElementById("ctaReportButton");


if (ctaReportButton) {

    ctaReportButton.addEventListener(
        "click",
        showWasteDemo
    );

}


// =========================================
// SIMPLE PAGE LOAD MESSAGE
// =========================================

console.log(
    "Chililabombwe Circular frontend loaded successfully."
);