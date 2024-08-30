$(document).ready(function(){
    var $scramble = $(".scramble")
    $scramble.scramble(300,20,"alphabet",true)
});

var tl = gsap.timeline();
tl.to(".loading",{
    opacity: 0,
    delay:2.8,

})
.to(".loader",{
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut"
})
.to(".loader",{
   y: "-100%",
   duration: 1, 
   
})


var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function(elem){
    elem.addEventListener("click",function(){

    });
});

function example(){
    window.location.href = "fake.html";
}
