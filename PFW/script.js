const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");

});

/* ===== TEXT ANIMATION ===== */

const titles = document.querySelectorAll(".title span, .title2 span");

titles.forEach((text, index) => {

    text.style.opacity = "0";
    text.style.transform = "translateY(40px)";

    setTimeout(() => {

        text.style.transition = "1s";
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";

    }, index * 300);

});



/* ========= SKILL BAR ANIMATION ========= */

window.addEventListener("load", () => {

    const lines = document.querySelectorAll(".line-fill");

    lines.forEach((line) => {

        const width = line.style.width;

        line.style.width = "0";

        setTimeout(() => {
            line.style.transition = "2s";
            line.style.width = width;
        }, 300);

    });

});