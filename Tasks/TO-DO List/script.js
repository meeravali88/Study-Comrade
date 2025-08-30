document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    li.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
            saveTasks();
        }
    });

    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
    saveTasks();
}

document.getElementById('taskInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        li.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                li.classList.toggle('completed');
                saveTasks();
            }
        });
        taskList.appendChild(li);
    });
}

window.addEventListener('DOMContentLoaded', loadTasks);