# todo-list-jsonserver-backend
Backend with json-server for https://github.com/gbosetti/todo-list-with-angular-6
It could be used interchangeably with https://github.com/gbosetti/todo-list-mongo-backend

## Setup

Clone the repo
```
git clone https://github.com/gbosetti/todo-list-jsonserver-backend.git
```
Install dependencies
```
npm install
```
Run
```
node server.js
```
You can use the frontend application to check the service is working or use some tool like curl: 
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "demo"}' http://localhost:3000/todos
```
```
curl -X GET "http://localhost:3000/todos"
```
