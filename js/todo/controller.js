import Model from "./model.js";
let model = new Model()


model.addTask('Заверстать стартовый шаблон')
model.addTask('Написать скрипт')
model.addTask('Записать урок')

model.removeTask(model.tasks[2])
console.log(model)