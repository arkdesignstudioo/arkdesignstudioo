/* ==========================================
        MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");

    menuBtn.classList.toggle("open");

    if(menuBtn.classList.contains("open")){
        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    }

});


/* ==========================================
        CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        navButtons.classList.remove("active");

        menuBtn.classList.remove("open");
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});


/* ==========================================
        STICKY HEADER
========================================== */

const header=document.querySelector("#header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(32,20,12,.95)";
        header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(30,18,10,.45)";
        header.style.boxShadow="none";

    }

});


/* ==========================================
        SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-70,

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/* ==========================================
        FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
`
.section-title,
.about-container,
.feature-box,
.stat-card,
.why-card,
.product-card,
.gallery-item,
.testimonial-card,
.contact-box,
.contact-map
`
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================================
        HERO IMAGE FLOAT EFFECT
========================================== */

const heroImage = document.querySelector(".image-card");

if(heroImage){

    window.addEventListener("mousemove",(e)=>{

        const x = (window.innerWidth/2 - e.clientX)/45;
        const y = (window.innerHeight/2 - e.clientY)/45;

        heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

}


/* ==========================================
        PRODUCT CARD TILT
========================================== */

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;
        const rotateY = (x - rect.width/2)/18;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
/* ==========================================
        STATS COUNTER
========================================== */

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            if (isNaN(number)) return;

            let value = 0;

            const speed = Math.max(10, Math.floor(number / 80));

            const timer = setInterval(() => {

                value += speed;

                if (value >= number) {

                    value = number;

                    clearInterval(timer);

                }

                if (text.includes("+")) {

                    counter.innerText = value + "+";

                } else if (text.includes("%")) {

                    counter.innerText = value + "%";

                } else {

                    counter.innerText = value;

                }

            }, 20);

        });

    }

}

window.addEventListener("scroll", runCounters);

runCounters();



/* ==========================================
        HERO PARALLAX
========================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const y = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPosition =
            `center ${y * 0.35}px`;

    }

});



/* ==========================================
        BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("div");

topButton.className = "back-top";

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================
        PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log(
"%cARK Wooden Studios",
"color:#C89B3C;font-size:20px;font-weight:bold;"
);

console.log(
"Website Designed with ❤️"
);
