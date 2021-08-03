// let images = document.querySelector(".imageBox > img");
// let before = document.getElementsByClassName("before");
// let after = document.getElementById('after');
// let current = 0;
// //current = 0~4
// let width = 798.312;
// let move = 0
// // slides(current);
// before.onclick = beforeSlide(current);
// after.onclick = afterSlide(current);

// // function slides(n){

// // }

// function beforeSlide(n){
//   if(n==0){    
//     move = width * 4 ;
//     for (let i = 0; i < images.length; i++) {
//       images[i].style.transform = 'translateX(${move}px)'; 
//     }
//   }
//   else {
//     move = width * (n+1);
//     for (let i = 0; i < images.length; i++) {
//       images[i].style.transform = 'translateX(-${move}px)'; 
//     }
//   }
// }

// function afterSlide(n){
// for (let i = 0; i < images.length; i++) {
//   images[i].style.transform = 'translateX(-798.312px)';
// }
// }

//------------ 자바스크립트 작성 실패.. 다시 생각해보자.

let slides1 = document.querySelectorAll(".imageBox > img");
let prev1 = document.getElementById("before");
let next1 = document.getElementById("after");
let current1 = 0;

showSlides1(current1);
prev1.onclick = prevSlide;
next1.onclick = nextSlide;

function showSlides1(n){
  for(let i =0; i < slides1.length; i++){
    slides1[i].style.display = "none";
  }
  slides1[n].style.display = "block";
}

function prevSlide(){
  if(current1 > 0) current1 -= 1;
  else{
    current1 = slides1.length -1;
  }
  showSlides1(current1);
}

function nextSlide(){
  if(current1 < slides1.length - 1) current1 +=1;
  else {
    current1 = 0 ; 
  }
  showSlides1(current1);
}