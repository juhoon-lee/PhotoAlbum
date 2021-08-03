const imageBox =document.querySelectorAll(".photo");
const bigImage =document.querySelector(".bigImage");

function showImage() {
  const image = this.querySelector("img");
  console.log(image.src);
  const copyImage = document.createElement("img");
  copyImage.src =image.src;
  bigImage.appendChild(copyImage);
  bigImage.style.visibility="visible";
}

function hideBox(){
  bigImage.style.visibility="hidden";

}

bigImage.onclick = hideBox;

for (let i = 0; i < imageBox.length; i++) {
  imageBox[i].addEventListener("click", showImage);
}