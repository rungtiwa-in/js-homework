let todolist = [
    {
        message: "To Do 1",
        isDone: true
    },
    {
        message: "To Do 2",
        isDone: false
    },
    {
        message: "To Do 3",
        isDone: false
    },
]

function setToDoList() {
    let htmlList = document.getElementById('todo-list')
    let html = ''
    for (let i = 0; i < todolist.length; i++) {
        let liClass = todolist[i].isDone ? ' done' : ''
        html += `<li class="list-group-item${liClass}">
        <span onclick="doneToDo(${i})">${todolist[i].message}</span> 
        <button type="button" class="btn btn-danger float-right btn-sm" onclick="deleteToDo(${i})">X</button></li>`
    }
    htmlList.innerHTML = html
}

function addToDo() {
    let messageInput = document.getElementById('message')
    let message = messageInput.value
    if (!message) return
    todolist.unshift({ message: message, isDone: false })
    setToDoList()
    messageInput.value = ''
}

function deleteToDo(index) {
    todolist.splice(index, 1)
    setToDoList()
}

function doneToDo(index) {
    todolist[index].isDone = !todolist[index].isDone;
    setToDoList()
}

setToDoList()
