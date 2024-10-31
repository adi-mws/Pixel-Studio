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


// Navigation of WTC section (Why to choose us?)

// const navs = document.getElementsByClassName("wtc-navigator")[0].children;
// const contents = document.getElementsByClassName("wtc-content")[0].children;

// Array.from(navs).forEach((item, index) => {
//     item.addEventListener("click", () => {
//         wtcSlideTo(index);
//     })
// })

// function wtcSlideTo(index) {
//     contents[index].classList.add("wtc-active");
//     navs[index].classList.add("wtc-nav-active");
//     Array.from(contents).forEach((item, i) => {
//         if (i != index) {
//             item.classList.remove("wtc-active");
//             navs[i].classList.remove("wtc-nav-active");
//         }
//     })
// }



// // Auto slider 

// let wtcInterval, time = 3;

// const wtcNextSlide = () => {
//     let currentIndex;
//     Array.from(contents).forEach((item, index) => {
//         if (item.classList.contains("wtc-active")) {
//             currentIndex = index;
//         }
//     })
//     if (currentIndex === contents.length - 1) return 0;
//     else return currentIndex + 1;

// }


// const wtcStartInterval = () => {
//     interval = setInterval(() => {
//         wtcSlideTo(wtcNextSlide());
//     }, 1000 * time);
// }
// const wtcStopInterval = () => {
//     clearInterval(interval);
// }


// wtcStartInterval();

// Projects Section Carousel ; 

// const projectItems = [
//     "/assets/hero.png", 
//     "assets/wtc/end-to-end.webp",
//     "/assets/wtc/tailored-solutions.webp",
//     "/assets/wtc/tailored-solutions.webp",
//     "/assets/wtc/tailored-solutions.webp",
//     "/assets/wtc/tailored-solutions.webp",
// ]; 



// let projectItem, projectItemImg, projectItemNav, projectItemNavImg;
// const projectSlider = document.getElementsByClassName("project-slider")[0];
// const projectNavs = document.getElementsByClassName("project-navs")[0];
// // array to keep images
// Array.from(projectItems).map((item, index) => {
//     projectItem = document.createElement("div"); // project-item dynamic creation
//     projectItem.classList.add('project-item'); // adding class project-item for styling
//     projectItemImg = document.createElement("img");
//     projectItemImg.setAttribute("src", item);

//     projectItem.appendChild(projectItemImg);

//     // Creating nav for the project item 
//     projectItemNav = document.createElement("div"); // Navigation container
//     projectItemNav.classList.add("project-nav"); // for styling
//     projectItemNavImg = document.createElement("img"); // Navigation img
//     projectItemNavImg.setAttribute("src", item);

//     projectItemNav.appendChild(projectItemNavImg);
//     projectSlider.appendChild(projectItem);
//     projectNavs.appendChild(projectItemNav);
// })





// class ProjectSlider {
// ssss
//     constructor(sliderClass, itemActiveClass, itemClass, navClass, navActiveClass, auto=false, time=5) {
//         this.sliderClass = sliderClass; 
//         this.itemActiveClass = itemActiveClass; 
//         this.itemClass = itemClass; 
//         this.navClass = navClass; 
//         this.navActiveClass = navActiveClass; 
//         this.interval = null;
//         this.currentIndex = 0;

//         this.#callBacks();
//         this.#navHandler();
        
//         this.#initialSet();
//         if (auto) {this.#startInterval()}
//     }

//     #callBacks() {
//         this.slider = document.getElementsByClassName(this.sliderClass)[0];
//         this.items = document.getElementsByClassName(this.itemClass);
//         this.navs = document.getElementsByClassName(this.navClass);
//     }

//     #initialSet() {
//         this.#slideTo(0);
//     }

//     #startInterval() {
//         console.log("hi")
//         this.interval = setInterval(() => {
            
//             this.#slideTo(this.#getNextSlide());
//         }, 1000 * time); 
//     }

//     #stopInterval() {
//         clearInterval(this.interval);
//     }

//     #getNextSlide() {
//         if (this.currentIndex == this.slider.childElementCount - 1)  return 0;   
//         else return this.currentIndex + 1; 
        
//     }

//     #navHandler() {
//         Array.from(this.navs).forEach((value, index) => {
//             value.addEventListener("click", () => {
//                 console.log("hello")
//                 this.#slideTo(index);
//             })
//         })
//     }

//     #slideTo(index) {
//         this.currentIndex = index;
//         Array.from(this.items).map((item, i) => {
//             if (index == i) {
//                 item.classList.add(this.itemActiveClass);
//                 this.navs[i].classList.add(this.navActiveClass);
//             }
//             else {
//                 if (item.classList.contains(this.itemActiveClass)) {
//                     item.classList.remove(this.itemActiveClass);
//                     this.navs[i].classList.remove(this.navActiveClass);
//                 }
//             }
//         }) 
//     }
// }



// // const a = new ProjectSlider("project-slider", "pactive", "project-item", "project-nav","pnavactive", true, 5);