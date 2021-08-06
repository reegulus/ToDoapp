export default class Model {
    constructor() {
        this.tasks = []
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

    removeTask() {

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