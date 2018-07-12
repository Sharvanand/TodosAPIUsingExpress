const express = require('express');
const router  = express.Router();
const db      = require('../models');


// Get Request for list of todos..
router.get('/', (req, res) => {
 db.Todo.find()   
    .then((todos) => {
        res.json(todos);
    })
    .catch((err) => {
        res.send(err);
    });


});
// Post Request ...
router.post('/',(req, res) => {
    db.Todo.create(req.body)
    .then((newTodo) => {
        res.json(newTodo);
    })
    .catch((err) => {
        res.send(err);
        
    });
    
});

// Get Request for a todo
router.get('/:todoId',(req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((foundTodo) => {
        res.json(foundTodo);
    })
    .catch((err)=>{
        res.send(err);
    });
});

// Put Request...
router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new:true})
    .then((updatedTodo) => {
        res.json(updatedTodo);
    })
    .catch((err)=>{
        res.send(err);
    });
});

// Delete Request...
router.delete('/:todoId',(req, res) =>{
    db.Todo.remove({_id : req.params.todoId})
    .then(() =>{
        res.send({message : "TODO has been deleted.."})
    })
    .catch((err) =>{
        res.send(err);
    });
});


module.exports = router;