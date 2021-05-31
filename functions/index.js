/* const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todo.js')

app.get('/todos', getAllTodos);

app.post('/todo', postOneTodo);

app.delete('/todos/:todoId', deleteTodo);

app.put('/todos/:todoId', editTodo);

exports.api = functions.https.onRequest(app); */

const functions = require('firebase-functions');
const app = require('express')();
// Users
const {
    loginUser,
    signUpUser
} = require('./APIs/users')



 
const {
    getAllTodos,
   // getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo
    
} = require('./APIs/todo.js')

app.get('/todos', getAllTodos);
//app.get('/todo/:todoId', getOneTodo);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);
app.post('/login', loginUser);
app.post('/signup', signUpUser);

exports.api = functions.https.onRequest(app);
