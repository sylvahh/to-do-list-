var addButton = document.getElementById("add_button");
var ul = document.querySelector("ul");
var input = document.getElementById("entry_box");
var clearBtn = document.getElementById("clear");
var saveBtn = document.getElementById("save");
var emptyBtn = document.getElementById("empty");

// add listitem
function newToDoItem() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}


function inputLength() {
  return input.value.length;
}
// click event
function addToDoItem() {
  if (inputLength() > 0) {
    newToDoItem();
  }
}
// key press event 
function keyPressEvent(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    newToDoItem();
  }
}
// completed item
function toggleToDoItemState(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

// clear completed todo
function clearCompletedToDoItems() {
  var completedItems = [...document.getElementsByClassName("done")];
  completedItems.forEach((element) => {
    element.parentNode.removeChild(element);
  });
}

// empty todolist
function emptyButton() {
  var listItem = [...document.querySelectorAll("li")];
  listItem.forEach((element) => {
    element.parentNode.removeChild(element);
  });
}

// save todolist
function saveTodoList() {
  var todoItem = [];
  for (var i = 0; i < ul.children.length; i++) {
    var todo = ul.children.item(i);

    var todoInfo = {
      task: todo.innerText,
      done: todo.classList.contains("done"),
    };
    todoItem.push(todoInfo);
  }
  localStorage.setItem("todoItem", JSON.stringify(todoItem));
  alert("To-Do list saved");
}

// load todolist
function loadTodoList() {
  if (localStorage.getItem("todoItem") != null) {
    var todoItem = JSON.parse(localStorage.getItem("todoItem"));

    for (var i = 0; i < todoItem.length; i++);
    {
      var todo = todoItem[i];
    //   newToDoItem(todo.task, todo.done);
    }
  }
}
loadTodoList();

// eventlisteners
addButton.addEventListener("click", addToDoItem);
saveBtn.addEventListener("click", saveTodoList);
clearBtn.addEventListener("click", clearCompletedToDoItems);
ul.addEventListener("dblclick", toggleToDoItemState);
input.addEventListener("keypress", keyPressEvent);
emptyBtn.addEventListener("click", emptyButton);
