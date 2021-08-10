export default class View {
    constructor() {

    }

    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        taskList: document.getElementById('tasksList')
    }

    renderTasks(taskObject) {
        const taskHTML = `<li class="todo-item">
                                <label class="todo-item-label">
                                        <input class="checkbox" type="checkbox" />
                                        <span>${taskObject}</span>
                                        <button class="btn btn-secondary btn-sm">Удалить</button>
                                </label>
                         </li>`
        this.elements.taskList.insertAdjacentHTML('beforeend', taskHTML)
    }
}