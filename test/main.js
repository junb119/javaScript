/*
localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때, 
즉 페이지를 닫을 때 사라지는 점이 다릅니다. 
("사생활 보호 모드" 중 생성한 localStorage 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)
*/


// 아래 코드는 현재 도메인의 로컬 Storage 객체에 접근한 후, 
// Storage.setItem() (en-US)을 사용해 항목 하나를 추가.
localStorage.setItem('myCat', 'Tom');


// 위에서 추가한 localStorage 항목 읽기
const cat = localStorage.getItem('myCat');


// 위에서 추가한 localStorage 항목 제거
localStorage.removeItem('myCat');


// localStorage 항목의 전체 제거 구문
localStorage.clear();
