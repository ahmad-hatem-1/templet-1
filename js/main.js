
onload = function () {
let welcome = document.querySelector(".view .welcome .text h1")
let spred = document.querySelector(".view .spred")
let text = document.querySelector(".view .welcome .text p")
let img = document.querySelector(".my-img ")


setTimeout(function(){
    let loder = document.querySelector(".lode")
    loder.style.cssText = 
    `
    display:none
`
},3000)
setTimeout(function(){
 
let blur = document.querySelectorAll("section ,header , footer")
for (i=0 ;i<blur.length;++i){
    blur[i].style.cssText = ` filter: blur(0px)`;
}
document.body.style.overflow = "auto"
},3500)
img.style.cssText = `
transform: scale(1) !important;
`

text.style.cssText = `
animation: ahmed 3s 5.8s 1 steps(35) both, a 0.5s infinite;
`
welcome.style.cssText = `
transform: translate(0 , 0) !important ;
opacity: 1;

`
spred.style.cssText =" animation: spred 3s 4.3s cubic-bezier(0, 1.38, 0.48, -1.01) 1 alternate forwards ;"
}    
onscroll = function(){

    scrollY >= 800 ?   this.document.querySelector("header").style.cssText = `
    filter: blur(0px);
    background: rgba( 255, 255, 255, 0.15 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important;
    backdrop-filter: blur( 20px ) !important;
    -webkit-backdrop-filter: blur( 20px ) !important;
    `:  this.document.querySelector("header").style.cssText = `
    filter: blur(0px);
    background: rgba( 255, 255, 255, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    `
}


