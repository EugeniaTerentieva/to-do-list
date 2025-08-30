
import { createServer } from 'http';


// Список дел
const toDoList = [];

// добавить дело
const addToDo = (newTask) => toDoList.push(newTask);


// Обработчик запросов к серверу
const requestHandler = (request, response) => {
    // Обработку запроса получения списка дел - метод - GET, URL - '/todo'
    // Вернуть массив toDoList

    // console.log('requestHandler: ', request.method, request.url)

    if (request.url === '/todo' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(toDoList));

        return;
    }

    // Обработка запроса создания дела - метод POST, URL - '/todo'
    // Добавить в массив toDoList строку из body

    else if (request.url === '/todo' && request.method === 'POST') {

        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            addToDo(body);
            console.log(toDoList);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end("New task added");
        });

        request.on('error', (err) => {
            console.error('Ошибка чтения запроса:', err);
        });

        return;
    }

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!\n');
}

// 2XX 3XX 4XX 404 - not found, 500 - Error, 200 - OK

const server = createServer(requestHandler);

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});


// Протестировать утилитой curl свой сервер 