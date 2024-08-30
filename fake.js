
$(document).ready(function(){
  $('.carousel').carousel();
});


function changeBg(bg, title){
  const main1 = document.querySelector('#main1');
  const contents = document.querySelectorAll('.content')
  main1.Style.background = `url("../images/${bg}")`;
  main1.Style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if(content.classList.contains(title)){
      content.classList.add('active');
    }
  });

};


var tl = gsap.timeline({scrollTrigger:{
trigger:"#main",
//markers:true,
start:"50% 50%",
end:"100% 50%",
scrub:1,
pin:true

}});
tl
.to("#top",{
top:"-50%"
},'a')
.to("#bottom",{
  bottom:"-50%"
},'a')

.to("#top-h",{
  top:"86%"
},'a')
.to("#bottom-h",{
  bottom:"-110%"
},'a');


function dom(){
const canvas = document.querySelector("#home>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    img/THIS IS 4K ANIME (Tanjiro Kamado)_000.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_001.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_002.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_003.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_004.jpg
    img/THIS IS 4K ANIME (Tanjiro Kamado)_005.jpg
    img/THIS IS 4K ANIME (Tanjiro Kamado)_006.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_007.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_008.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_009.jpg
    img/THIS IS 4K ANIME (Tanjiro Kamado)_010.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_011.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_012.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_013.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_014.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_015.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_016.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_017.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_018.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_019.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_020.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_021.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_022.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_023.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_024.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_025.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_026.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_027.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_028.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_029.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_030.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_031.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_032.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_033.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_034.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_035.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_036.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_037.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_038.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_039.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_040.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_041.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_042.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_043.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_044.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_045.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_046.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_047.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_048.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_049.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_050.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_051.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_052.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_053.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_054.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_055.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_056.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_057.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_058.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_059.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_060.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_061.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_062.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_063.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_064.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_065.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_066.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_067.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_068.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_069.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_070.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_071.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_072.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_073.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_074.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_075.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_076.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_077.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_078.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_079.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_080.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_081.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_082.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_083.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_084.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_085.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_086.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_087.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_088.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_089.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_090.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_091.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_092.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_093.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_094.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_095.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_096.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_097.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_098.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_099.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_100.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_101.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_102.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_103.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_104.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_105.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_106.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_107.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_108.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_109.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_110.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_111.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_112.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_113.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_114.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_115.jpg 
    img/THIS IS 4K ANIME (Tanjiro Kamado)_116.jpg
    img/THIS IS 4K ANIME (Tanjiro Kamado)_117.jpg 
 `;
  return data.split("\n")[index];
}

const frameCount = 117;

const images = [];
const imageSeq = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 1.8,
    trigger: `#home`,
    start:`top top`,
    end:`100% top`,
    //markers:true,
    pin:true,
    
    
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
}
ScrollTrigger.create({
  trigger:"#home",
  pin:true,
  scroller:`#main3`,
  start:`50% 50%`,
  end:`150% 50%`,
  
}),
dom()


var tl2 = gsap.timeline({scrollTrigger:{
  trigger:"#main4",
 
  //markers:true,
  start:"35% 40%",
  end:"40% 50%",
  
  scrub:1,
 
  
  }});
  


  var tl3 = gsap.timeline();

  document.querySelectorAll("#main4").forEach(function(){
      elem.addEventListener("click",function(){
  
      });
  });
  
  function example(){
      window.location.href = "home.html";
  }
