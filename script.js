const darkmodeBtn = document.getElementsByClassName("darkmode-btn")[0];
darkmodeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    if (darkmodeBtn.children[0].classList.contains("fa-moon")) {
        darkmodeBtn.children[0].classList.remove("fa-moon");
        darkmodeBtn.children[0].classList.add("fa-sun");
    }

    else {
        darkmodeBtn.children[0].classList.remove("fa-sun");
        darkmodeBtn.children[0].classList.add("fa-moon");
    }
})

const navMenubarBtn = document.getElementsByClassName("nav-menubar-btn")[0];
const navMenubar = document.getElementsByClassName("nav-menubar")[0];
let menustate = false;

if (navMenubarBtn) {

    navMenubarBtn.onclick = () => {
        menustate = !menustate;
        if (menustate) {
            navMenubarBtn.children[0].classList.remove('fa-bars');
            navMenubarBtn.children[0].classList.add('fa-xmark');
            navMenubar.style.left = "0%";
        }
        else {
            navMenubar.style.left = '-100%';
            navMenubarBtn.children[0].classList.remove('fa-xmark');
            navMenubarBtn.children[0].classList.add('fa-bars');
        }
    }

}
// Scroll Animations
// Intersection Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');

        }

    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => { observer.observe(element) })


// Auth Back Button Handler

const authBackBtn = document.getElementsByClassName("back-btn")[0];
if (authBackBtn) {
    authBackBtn.addEventListener("click", () => {
        window.history.back()
    })
}


