/** 카카오 지도 api 실행코드 */
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.478190, 126.953100), //지도의 중심좌표.
	level: 5, //지도의 레벨(확대, 축소 정도)
  draggable: false
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.478190, 126.953100); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);