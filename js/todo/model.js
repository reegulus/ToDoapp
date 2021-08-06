export default class Modul {
    constructor () {
       this.tasks = []
    }

    addTask(text) {
        this.tasks.push(text)
    }
}

// tasks = ['Заверстать стартовый шаблон', 'Написать скрипт', 'Записать урок']