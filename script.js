const darkmodeBtn = document.getElementsByClassName("darkmode-btn")[0];
class Mode {

    constructor(btn) {
        this.btn = btn;
    }

    getCurrentMode() {
        const mode = localStorage.getItem("mode");
        if (mode) {
            return mode;
        }
        else {
            localStorage.setItem('mode', 'light');
            return 'light';
        }
    }

    apply() {
        const mode = localStorage.getItem("mode");
        if (this.getCurrentMode() === 'light') this.applyLightMode();
        else this.applyDarkMode();
    }

    applyDarkMode() {

        this.btn.children[0].classList.remove("fa-moon");
        this.btn.children[0].classList.add("fa-sun");

        localStorage.setItem('mode', 'dark');
        document.body.classList.add('darkmode');
    }

    applyLightMode() {  

        this.btn.children[0].classList.remove("fa-sun");
        this.btn.children[0].classList.add("fa-moon");

        localStorage.setItem('mode', 'light');
        document.body.classList.remove('darkmode');
    }
}

const m = new Mode(darkmodeBtn);
m.apply();

darkmodeBtn.addEventListener('click', () => {
    if (m.getCurrentMode() === 'light') {
        m.applyDarkMode();
    }
    else { m.applyLightMode(); }
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


export function AuthPassEyeHandler(btn, input) {
    if (btn.children[0].classList.contains("fa-eye")) {
        btn.children[0].classList.remove('fa-eye');
        btn.children[0].classList.add('fa-eye-slash');
        input.setAttribute("type", "text")
    }
    else {
        btn.children[0].classList.remove("fa-eye-slash");
        btn.children[0].classList.add("fa-eye");
        input.setAttribute("type", "password")
    }
}





// Home Page Carousel
