let todolist = [
    {
        message: "Cras justo odio 1",
        isDone: true
    },
    {
        message: "Cras justo odio 2",
        isDone: false
    },
    {
        message: "Cras justo odio 3",
        isDone: false
    },
]

function setToDoList() {
    let htmlList = document.getElementById('todo-list')
    let html = ''
    for (let i = 0;i<todolist.length;i++){
        let liClass = todolist[i].isDone ? ' done':''
        html += `<li class="list-group-item${liClass}"><span onclick="doneToDo(${i})">${todolist[i].message}</span> <button type="button" class="btn btn-danger" onclick="deleteToDo(${i})">Delete</button></li>`
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

function doneToDo(index){
    todolist[index].isDone = !todolist[index].isDone;
    setToDoList()
}

setToDoList()
