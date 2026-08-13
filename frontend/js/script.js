/*=====================================
        TYPING ANIMATION
======================================*/

const typingText = document.getElementById("typing");

const words = [

    "UI/UX Designer",

    "Frontend Developer",

    "Web Designer",

    "HTML & CSS Expert",

    "JavaScript Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

/*=====================================
      SCROLL REVEAL ANIMATION
======================================*/

const revealElements = document.querySelectorAll(

".about,.service-box,.skill,.project,.testimonial-box,.contact form"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

    element.style.transition =
    "all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*=====================================
      ANIMATE SKILL BARS
======================================*/

const progressBars =
document.querySelectorAll(".progress");

function animateSkills(){

    progressBars.forEach(bar=>{

        const top =
        bar.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            bar.style.transform = "scaleX(1)";
        }

    });

}

progressBars.forEach(bar=>{

    bar.style.transformOrigin = "left";

    bar.style.transform = "scaleX(0)";

    bar.style.transition =
    "transform 1.5s ease";

});

window.addEventListener("scroll",animateSkills);

animateSkills();

/*=====================================
      COUNTER ANIMATION
======================================*/

/*
Example HTML

<div class="counter" data-target="120">
0
</div>

*/

const counters =
document.querySelectorAll(".counter");

function startCounter(){

    counters.forEach(counter=>{

        const target =
        +counter.dataset.target;

        let count = 0;

        const speed = target / 150;

        function update(){

            if(count < target){

                count += speed;

                counter.innerHTML =
                Math.ceil(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerHTML = target;

            }

        }

        update();

    });

}

if(counters.length > 0){

    startCounter();

}

/*=====================================
      HERO IMAGE FLOAT EFFECT
======================================*/

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

    window.addEventListener("mousemove",(e)=>{

        const x =
        (window.innerWidth / 2 - e.pageX) / 45;

        const y =
        (window.innerHeight / 2 - e.pageY) / 45;

        heroImage.style.transform =
        `translate(${x}px,${y}px)`;

    });

}

/*=====================================
      PROJECT HOVER EFFECT
======================================*/

const projects =
document.querySelectorAll(".project");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform =
        "translateY(-12px)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform =
        "translateY(0)";

    });

});

/*=====================================
        CONSOLE MESSAGE
======================================*/

console.log("Animations Loaded");

/*=====================================
        CONTACT FORM
======================================*/

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value.trim() === ""){

            input.style.border = "2px solid red";

            valid = false;

        }else{

            input.style.border = "2px solid #22c55e";

        }

    });

    if(valid){

        alert("Message sent successfully!");

        form.reset();

        inputs.forEach(input=>{

            input.style.border="none";

        });

    }

});

}

/*=====================================
        PRELOADER
======================================*/

const loader = document.createElement("div");

loader.className = "loader";

loader.innerHTML =

'<div class="spinner"></div>';

document.body.prepend(loader);

loader.style.position = "fixed";
loader.style.left = "0";
loader.style.top = "0";
loader.style.width = "100%";
loader.style.height = "100vh";
loader.style.background = "#fff";
loader.style.display = "flex";
loader.style.justifyContent = "center";
loader.style.alignItems = "center";
loader.style.zIndex = "99999";

const spinner = loader.querySelector(".spinner");

spinner.style.width = "60px";
spinner.style.height = "60px";
spinner.style.border = "6px solid #ddd";
spinner.style.borderTop = "6px solid #2563eb";
spinner.style.borderRadius = "50%";
spinner.style.animation = "spin 1s linear infinite";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.transition=".5s";

        setTimeout(()=>{

            loader.remove();

        },500);

    },700);

});

/*=====================================
      SCROLL PROGRESS BAR
======================================*/

const progressBar =
document.createElement("div");

progressBar.style.position="fixed";
progressBar.style.left="0";
progressBar.style.top="0";
progressBar.style.height="5px";
progressBar.style.background="#2563eb";
progressBar.style.zIndex="99999";
progressBar.style.width="0%";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const totalHeight =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const progress =

    (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=====================================
      BUTTON RIPPLE EFFECT
======================================*/

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const circle = document.createElement("span");

const x =
e.clientX -
button.getBoundingClientRect().left;

const y =
e.clientY -
button.getBoundingClientRect().top;

circle.style.left = x + "px";
circle.style.top = y + "px";

circle.className = "ripple";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

console.log("Premium Features Loaded");