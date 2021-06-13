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

const auth = require('./util/auth');    

const functions = require('firebase-functions');
const app = require('express')();
// Users
const {
    loginUser,
    signUpUser,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')


app.get('/user', auth, getUserDetail);
app.post('/user', auth,updateUserDetails);
 
const {
    getAllTodos,
   // getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo
    
} = require('./APIs/todo.js')

app.get('/todos', auth, getAllTodos);
//app.get('/todo/:todoId', getOneTodo);
app.post('/todo', auth, postOneTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);
app.post('/login', auth, loginUser);
app.post('/signup', auth, signUpUser);
//app.post('/signup', getUserDetail);

exports.api = functions.https.onRequest(app);
