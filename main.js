/** 카카오 지도 api 실행코드 */
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.478216, 126.953023), //지도의 중심좌표.
	level: 5, //지도의 레벨(확대, 축소 정도)
  // draggable: false
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.478216, 126.953023); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


/** main line */

// get queries
const body = document.querySelector('body');
const title = document.querySelector(".title");
const lego = document.querySelector(".lego");
const penguin1 = document.querySelector(".penguin1");
const text2 = document.querySelector(".text2");
const t2line1 = document.querySelector(".text2 .line1");
const t2line2 = document.querySelector(".text2 .line2");
const penguin2 = document.querySelector(".penguin2");
const text1 = document.querySelector(".text1");
const arrow = document.querySelector(".arrow");
const scroll_prevent = document.querySelector(".empty_scroll");
let started = false;
const width = window.innerWidth;
const height = window.innerHeight;


// functions
function timer(time){
  return new Promise((res)=>{
    setTimeout(()=>{
      res(time);
    }, time);
  });
};

async function start(){
  await timer(1000);
  window.scrollTo(0,0);
  penguin2.classList.remove("disapear");
  await timer(300);
  text1.classList.remove("disapear");
  await timer(500);
  text2.classList.remove("disapear");
  await timer(300);
  penguin1.classList.remove("warigari");
  t2line1.classList.remove("disapear");
  await timer(500);
  t2line2.classList.remove("disapear");
  await timer(500);
  title.classList.remove("disapear");
  await timer(300);
  lego.classList.remove("disapear");
  lego.classList.add("fade_close");
  await timer(500);
  arrow.classList.remove("disapear");
  scroll_prevent.classList.add("disapear");
  started = true;
};



// excute codes
start();
window.addEventListener('scroll', (e)=>{
  let winscry = window.scrollY;
  if (winscry > 99 & started==true) {
    text1.classList.add('disapear');
    text2.classList.add('disapear');
    arrow.classList.add('disapear');
    penguin1.style.transform = 'translateY('+ winscry +'px) translateX(100px) rotate(180deg)';
  } else if(winscry < 99 & started==true){
    text1.classList.remove('disapear');
    text2.classList.remove('disapear');
    penguin1.style.transform = '';
  };
  if(winscry > height*0.4 + width*0.4){
    penguin1.classList.add('blur');
  } else {
    penguin1.classList.remove('blur');
  }
  if(winscry > height*1 + width*1){
    penguin1.classList.add('disapear');
  } else {
    penguin1.classList.remove('disapear');
  }
});
