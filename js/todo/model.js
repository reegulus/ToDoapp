export default class Model {
    constructor() {
        this.tasks = []
        this.loadFromLocalStorage()
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    loadFromLocalStorage() {
      const data = localStorage.getItem('tasks')
        if (data) {
            this.tasks = JSON.parse(data)
        }
    }

    addTask(text) {
        const newTask = {
            status: 'active',
            text: text
        }
        this.tasks.push(newTask)
        this.saveToLocalStorage()
    }

    doneTask(task) {
        task.status = 'done'
        this.saveToLocalStorage()
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        this.saveToLocalStorage()
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