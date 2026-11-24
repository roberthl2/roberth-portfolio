
// ===================================
// MENU MOBILE
// ===================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===================================
// ANO AUTOMÁTICO
// ===================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===================================
// BOTÃO VOLTAR AO TOPO
// ===================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===================================
// ANIMAÇÃO DAS SEÇÕES
// ===================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity .8s ease, transform .8s ease";

    observer.observe(section);

});

const style = document.createElement("style");

style.textContent = `
    .section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


// ===================================
// EFEITO DE NAVEGAÇÃO
// ===================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        console.log("Mission selected:", link.textContent);

    });

});


// ===================================
// EFEITO DE ENTRADA
// ===================================

window.addEventListener("load", () => {

    console.log("ROBERTH OPEN WORLD LOADED");
    console.log("PLAYER ONLINE");
    console.log("MISSION SYSTEM READY");

});
