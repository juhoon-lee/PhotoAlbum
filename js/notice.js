const notice = document.querySelector(".notice");
const hello = document.querySelector(".hello");

const noticeBox = document.querySelector(".noticeBox");
const helloBox = document.querySelector(".helloBox");

const veiwNotice=()=>{
  noticeBox.style.display ="block";
  helloBox.style.display = "none";
}


const veiwHello=()=>{
  helloBox.style.display ="block";
  noticeBox.style.display = "none";
}


notice.onclick = veiwNotice;
hello.onclick = veiwHello;