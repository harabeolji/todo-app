import express from 'express'
import helpers from './helpers/todos'

const router = express.Router()

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo)

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)

export default router
