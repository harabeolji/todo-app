const db = require('../../models')

const getTodos = (req, res) => {
	db.Todo.find()
	.then((todos) => {
		res.json(todos)
	})
	.catch((error) => {
		res.send(error)
	})
}

const createTodo = (req, res) => {
	db.Todo.create(req.body)
	.then((newTodo) => {
		res.status(201).json(newTodo)
	})
	.catch((error) => {
		res.send(error)
	})
}

const getTodo = (req, res) => {
	db.Todo.findById(req.params.todoId)
	.then((foundTodo) => {
		res.json(foundTodo)
	})
	.catch((error) => {
		res.send(error)
	}
	)
}

const updateTodo = (req, res) => {
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then((todo) => {
		res.json(todo)
	})
	.catch((error) => {
		res.send(error)
	})
}

const deleteTodo = (req, res) => {
	db.Todo.remove({_id: req.params.todoId})
	.then(() => {
		res.json({message: 'deleted'})
	})
	.catch((error) => {
		res.send(error)
	})
}

export default {
	getTodos,
	createTodo,
	getTodo,
	updateTodo,
	deleteTodo
}