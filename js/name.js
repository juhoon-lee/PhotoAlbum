const nameForm = document.querySelector("#info");
const userName = document.querySelector("#info > input");
const button = document.querySelector("#info > button");
const p = document.querySelector(".box2-1 > p");
const clear =document.querySelector(".box2-2 > button");

const clearLocal = (event) =>{
  event.preventDefault();
  localStorage.clear();
  location.reload();
}

const check = () =>{
  const nameValue = localStorage.getItem("name");
  if (nameValue === null) {
    return;
  }
  else{
    printUserName(nameValue);
  }
}

const printUserName = (userName) => {
  nameForm.style.display = "none";
  p.style.display="block";
  if (userName.length > 4) {
    p.innerHTML=`${userName}님 <br> 안녕하세요.`;
  }
  else {
  p.innerText=`${userName}님 안녕하세요.`;
  }
}

const handleButton = (event) =>{
  event.preventDefault();
  localStorage.setItem("name" , userName.value);
  printUserName(userName.value);
  userName.value = "";
}

button.onclick = handleButton;
clear.onclick = clearLocal;

check();