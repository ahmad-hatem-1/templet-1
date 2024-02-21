
onload = function () {
    let welcome = document.querySelector(".view .welcome .text h1")
    let spred = document.querySelector(".view .spred")
    let text = document.querySelector(".view .welcome .text p span")
    setTimeout(function () {
        let loder = document.querySelector(".lode")
        loder.style.cssText =
        `
    display:none
    `
}, 1000)
setTimeout(function () {

    let blur = document.querySelectorAll("section ,header , footer")
    for (i = 0; i < blur.length; ++i) {
        blur[i].style.cssText = ` filter: blur(0px)`;
    }
    document.body.style.overflow = "auto"
    }, 1300)

    welcome.style.cssText = `
    transform: translate(0 , 0) !important ;
    opacity: 1;
`
    text.parentElement.style.cssText =
        `
transform: translate(0 , 0) !important ;
opacity: 1;
`
    this.setTimeout(_ => {
        i = 0
        let fill = "إسمي أحمد حاتم وأنا سعيد بزيارتك لموقعي"
        let write = this.setInterval(_ => {
            "use strict"
            text.textContent += fill[i]
            if (text.textContent.length == fill.length) {
                this.clearInterval(write)
            }
            i = i + 1
        }, 100)
        
    }, 3200)
    
    spred.style.cssText = " animation: spred 2s 2s  1 alternate forwards ;"
}
onscroll = function () {
    document.querySelector("header").style.cssText = `
    position:fixed !important ;
    `
    scrollY >= 700 ? this.document.querySelector("header").style.cssText = `
    filter: blur(0px);
    position:fixed !important ;
    background: rgba( 255, 255, 255, 0.15 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important;
    backdrop-filter: blur( 20px ) !important;
    -webkit-backdrop-filter: blur( 20px ) !important;
    `: this.document.querySelector("header").style.cssText = `
    position:absolute !important ;
    filter: blur(0px);
    background: rgba( 255, 255, 255, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    `
    let img = document.querySelector(".my-img ")
    let text = this.document.querySelector(".welcome .text")
    if(this.window.screen.width >= 1450){
        if (this.scrollY < 102 ) {
            img.style.width = `${700 - (scrollY * 2)}px`
            img.style.left = `${0}px`

        }
        if (scrollY >= 102) {
            img.style.width = `${img.style.width}`
            console.log(img.style.width)
        }
        img.style.left = `${ (scrollY)}px`
        text.style.right = `${ (scrollY)}px`
        if(scrollY >= 204) {
            img.style.left = `${204}px`
            text.style.right = `${204}px`
        }
        if (this.window.screen.width >= 1650){
            img.style.left = `${ (scrollY)}px`
            text.style.right = `${ (scrollY)}px`
            if(scrollY >= 304) {
                img.style.left = `${304}px`
                text.style.right = `${304}px`
            }
        }

        
            
        }
    }
    
    addEventListener("load",_=>{
        particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#867569" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    })
