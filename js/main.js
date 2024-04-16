
let footer = document.querySelector("footer p ")
footer.innerHTML = `جميع الحقوق محفوظة<span id="4">أحمد حاتم</span>${new Date().getFullYear()} ©`
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



    const sr = ScrollReveal({
        origin : "top",
        distance:"70px",
        duration: 2500 ,
        delay :250, 
        // reset:true
    })
    sr.reveal(".reveal-top")
    sr.reveal(".reveal-left",{origin:"left"})
    sr.reveal(".reveal-right",{origin:"right"})
    sr.reveal(".reveal-bottom",{origin:"bottom"})
    sr.reveal(".reveal-rotate",{origin:"bottom",rotate:{x:1000,z:1000}})
    // ScrollReveal().reveal('.text ')


}
onscroll = function () {
    scrollY >= 950 ? this.document.querySelector("header").classList.add("header_scroll")
: this.document.querySelector("header").classList.remove("header_scroll")
    let img = document.querySelector(".my-img ")
    let text = this.document.querySelector(".welcome .text")
    if (this.window.screen.width >= 1450) {
        if (this.scrollY < 102) {
            img.style.left = `${0}px`

        }
        if (scrollY >= 102) {
            img.style.width = `${img.style.width}`
        }
        img.style.left = `${(scrollY)}px`
        text.style.right = `${(scrollY)}px`
        if (scrollY >= 150) {
            img.style.left = `${150}px`
            text.style.right = `${150}px`
        }
        if (this.window.screen.width >= 1650) {
            img.style.left = `${(scrollY)}px`
            text.style.right = `${(scrollY)}px`
            if (scrollY >= 304) {
                img.style.left = `${304}px`
                text.style.right = `${304}px`
            }
        }



    }
}

