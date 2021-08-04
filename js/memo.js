const memoForm = document.querySelector("#memoForm");
const memoInput = memoForm.querySelector("input");
const memo = document.querySelector("#memo");
const removeAll =document.querySelector("#removeAll");

const MEMO_KEY = "memoKey";
let memos = [];

function saveMemos (){
  localStorage.setItem(MEMO_KEY,JSON.stringify(memos));
}

function createMemo(event){
  event.preventDefault();
  
  const memoObject ={
    text: memoInput.value,
    id: Date.now(),
  }

  memos.push(memoObject);
  saveMemos();

  const li = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.innerText ="X";
  removeButton.addEventListener("click",removeMemo);
  li.id = Date.now();
  li.innerHTML = `<span> ${memoInput.value} </span>`;
  li.appendChild(removeButton);
  memo.appendChild(li);
  
  memoInput.value = null;
}

function showMemo(object){
  const li = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.innerText ="X";
  removeButton.addEventListener("click",removeMemo);
  li.id = object.id;
  li.innerHTML = `<span> ${object.text} </span>`;
  li.appendChild(removeButton);
  memo.appendChild(li);
}

function removeMemo(){
  const li = this.parentNode;
  memos = memos.filter(memo =>{
    return memo.id !== parseInt(li.id);
  });
  saveMemos();
  memo.removeChild(li);
}

function removeAllMemos(){
  memo.remove("li");
  memos = null;
  localStorage.removeItem(MEMO_KEY);
}

memoForm.addEventListener("submit",createMemo);
removeAll.addEventListener("click", removeAllMemos);

const memoTemp = localStorage.getItem(MEMO_KEY);
if (memoTemp !== null) {
  memos = JSON.parse(memoTemp);
  memos.forEach(showMemo);
}
