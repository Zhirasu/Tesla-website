const main = document.querySelector(".main-content"),
section1 = document.querySelector(".section-1"),
header = document.querySelector("#landing-header");

main.onscroll = function (){
    isInViewports();
    }

const isInViewports = (e)=>{
    let distance = section1.getBoundingClientRect();
    if(distance.top <= -300){
        header.classList.add("dark");
        console.log("hola1");
    }else if(distance.y >= -700){
        console.log("hola2");
        header.classList.remove("dark");
    }
}