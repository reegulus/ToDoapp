export default class Model {
    constructor() {
        this.tasks = []
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    addTask(text) {
        const newTask = {
            status: 'active',
            text: text
        }
        this.tasks.push(newTask)
    }

    doneTask(task) {
        task.status = 'done'
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
    }
}

// tasks = [
//     {
//         status: 'active',
//         text: 'Заверстать стартовый шаблон'
//     },
//     {
//         status: 'active',
//         text: 'Написать скрипт'
//     },
//     {
//         status: 'active',
//         text: 'Записать урок'
//     }
// ]