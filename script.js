// getting all required elements
const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#btn_add");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".clearAll");
const pendingTasks = document.querySelector(".pendingTasks");

// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};
// -----------------------Add--------------

addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  todoList.innerHTML += `<li class="listElement" onclick="markTask(this)">${userEnteredValue}<i class="edit far fa-edit" onclick="editTask(this)"></i><span class="icon" onclick="deleteTask(this)"><i class="fas fa-trash"></i></span></li>`;
  inputBox.value = "";
  addBtn.classList.remove("active");

  pendingTasks.innerText = todoList.childElementCount;
};

// -----------------------Delete--------------
const deleteTask = (e) => {
  const task = e.parentElement;
  task.remove();

  pendingTasks.innerText = todoList.childElementCount;
};
// ------------------------edit------------------
//edit task function
function editTask(e) {
  let p = prompt("Edit your Task.", e.parentElement.innerText);
  if (p != "") {
    let element = e.parentElement;
    element.innerText = p;
    //document.querySelector("listElement").textContent = pp;
    //console.log(pp);
  } else if (p === "") {
  }
}
// ------------------------Mark------------------

function markTask() {
  todoList.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("lineTrough");
      }
    },
    false
  );
}
// ------------------------Clear All------------------
function clearAll() {
  if (todoList.childElementCount != 0) {
    todoList.innerHTML = "";
  }
  pendingTasks.innerText = todoList.childElementCount;
}
deleteAllBtn.addEventListener("click", clearAll);

// ------------------------filterTodo------------------
// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach((todo) => {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }
// addBtn.onclick = () => {
//   //when user click on plus icon button
//   let userEnteredValue = inputBox.value; //getting input field value
//   let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
//   if (getLocalStorageData == null) {
//     //if localstorage has no data
//     listArray = []; //create a blank array
//   } else {
//     listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
//   }
//   listArray.push(userEnteredValue); //pushing or adding new value in array
//   localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
//   showTasks(); //calling showTask function
//   addBtn.classList.remove("active"); //unactive the add button once the task added
// };
