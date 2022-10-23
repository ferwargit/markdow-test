const tasks = [
    {
        id: 1,
        name: 'Practicar HTML',
        deadline: 'Jueves 12/10',
        status: 'Pendiente'
    },
    {
        id: 2,
        name: 'Practicar CSS',
        deadline: 'Jueves 14/10',
        status: 'Pendiente'
    },
    {
        id: 3,
        name: 'Practicar Javascript',
        deadline: 'Jueves 16/10',
        status: 'Pendiente'
    },
]
const tasksContainer = document.getElementById('tasks');
const taskName = document.getElementById('task');
const taskDeadline = document.getElementById('deadline');
const taskStatus = document.getElementById('status');
const btn = document.getElementById('btn');

function appendNewTask(task) {
    const article = document.createElement('article');
    article.setAttribute('class', 'task');
    article.innerHTML = `
        <h2>Tarea #${task.id}: ${task.name}</h2>
        <p>Plazo: ${task.deadline}</p>
        <p>Estado: ${task.status}</p>`;
    tasksContainer.appendChild(article);
}
// 1ro mapea el tasks por cada uno de los objetos, 
// llamando a la funcion appendNewTask()
tasks.map(task => {
    appendNewTask(task);
});

btn.addEventListener('click', () => {
    const newTask = {
        id: tasks.length + 1,
        name: taskName.value,
        deadline: taskDeadline.value,
        status: taskStatus.value
    }
    tasks.push(newTask);
    appendNewTask(newTask);
})