const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === '') {
    alert("Cannot add an empty list");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
    
  listInput.value = "";
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
}, false);

function removeTask() {
  const list = document.getElementById("list-container");
  list.removeChild(list.lastElementChild);
}


