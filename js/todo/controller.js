import Model from "./model.js";
import View from "./view.js";

let model = new Model()
let view = new View()

model.addTask('Заверстать стартовый шаблон')
model.addTask('Написать скрипт')
model.addTask('Записать урок')
console.log(model)

view.renderTasks(model.tasks[2])