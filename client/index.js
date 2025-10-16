import { TaskInput } from "./widgets/TaskInput.js";
import { CreateTaskButton } from "./widgets/CreateTaskButton.js";
import { SearchInput } from "./widgets/SearchInput.js";
import { NoTasksLabel } from "./widgets/NoTasksLabel.js";
import { TaskList } from "./widgets/TaskList.js";
import { ELEMENTS_CREATED_EVENT } from "./constants.js";

// test comment 

const taskInput = new TaskInput();
const createButton = new CreateTaskButton({ taskInput });
const searchInput = new SearchInput();
const noTasksLabel = new NoTasksLabel();
const taskList = new TaskList();


// точка входа в рендер
document.addEventListener('DOMContentLoaded', () => { 

    const newTaskContiner = document.getElementById('new-task-container');

    newTaskContiner.insertAdjacentHTML('beforeend', taskInput.html());
    newTaskContiner.insertAdjacentHTML('beforeend', createButton.html());
    // newTaskContiner.insertAdjacentHTML('beforeend', createButton1.html());

    const tasksContainer = document.getElementById('tasks-list-container');

    tasksContainer.insertAdjacentHTML('beforeend', searchInput.html());
    // tasksContainer.insertAdjacentHTML('beforeend', noTasksLabel.html());
    tasksContainer.insertAdjacentHTML('beforeend', taskList.html());

    document.dispatchEvent(new CustomEvent(ELEMENTS_CREATED_EVENT));
})

// CreateTaskButton({ id: 'new-task-button', label: 'Создать' })
// CreateTaskButton.constructor({ id: 'new-task-button', label: 'Создать' })
// HtmlComponent.constructor({ id: 'new-task-button', label: 'Создать' })


// ##############################################################################
// const searchInput = document.getElementById("search-input");
// const input = document.getElementById("new-task-input");
// //const items = document.querySelectorAll("#item-list li"); //статическая коллекция
// const items = document.getElementById("item-list").getElementsByTagName("li"); //динамическая коллекция HTMLCollection
// const noTasksBox = document.getElementById("no-tasks");
// const button = document.getElementById("new-task-button");
// const list = document.getElementById("item-list");
// //const checkboxes = document.querySelectorAll("#item-list input[type=checkbox]");
// const checkboxes = document.getElementById("item-list").getElementsByTagName("input"); // тоже HTMLCollection

// const emptyCheck = (items) => {
//     items.length === 0 ?
//         noTasksBox.classList.remove("hidden") :
//         noTasksBox.classList.add("hidden");
// }

// const arrayFromItems = Array.from(items);

// function processCheckboxes() {

//     for (const cb of checkboxes) {

//         cb.addEventListener("change", () => {
//             if (cb.checked) {
//                 cb.parentElement.classList.add("done");
//             } else {
//                 cb.parentElement.classList.remove("done");
//             }
//         });
//     }
// }

// emptyCheck(items);
// processCheckboxes();

// function handleInput() {
//     const task = input.value;

//     if (task !== '') {                           // если поле не пустое
//         const li = document.createElement('li'); // создаём новый элемент <li>
//         li.textContent = task;                   // добавляем текст
//         list.appendChild(li);                    // добавляем в список
//         arrayFromItems.push(task);

//         const checkbox = document.createElement('input'); // добавляем чекбокс
//         checkbox.type = 'checkbox';
//         li.appendChild(checkbox);
//         processCheckboxes();                      // обработчик чекбокса

//         input.value = '';

//         emptyCheck(items);

//     }
// }

// button.addEventListener('click', handleInput);

// input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         handleInput();
//     }
// });

// // checkboxes.forEach(cb => {
// //     cb.addEventListener("change", () => {
// //         if (cb.checked) {
// //             cb.parentElement.classList.add("done");
// //         } else {
// //             cb.parentElement.classList.remove("done");
// //         }
// //     });
// // });

// searchInput.addEventListener("input", () => {
//     const filter = searchInput.value.toLowerCase();
//     Array.from(items).forEach(li => {
//         const text = li.textContent.toLowerCase();
//         if (text.includes(filter)) {
//             li.classList.remove("hidden");
//         } else {
//             li.classList.add("hidden");
//         }
//     });
// });

