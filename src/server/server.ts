import express from 'express'
import http from 'http'
import path from 'path'

import todoRoutes from './routes'
import bodyParser from 'body-parser'

const port = 8080

class App {
	private server: http.Server
	private port: number

	constructor(port: number) {
		this.port = port
		const app = express()

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({extended: true}))

		app.use(express.static(path.join(__dirname, '../client')))
		app.use('/jquery', express.static(path.join(__dirname, '../../node_modules/jquery/dist/')))

		app.use('/api/todos', todoRoutes)

		this.server = new http.Server(app)
	}

	public Start() {
		this.server.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}`)
		})
	}
}

new App(port).Start()