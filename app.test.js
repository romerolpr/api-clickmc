const request = require('supertest')
const app = require('./app')

describe('POST /users stress dynamic users', () => {
	it('(1) should be able to insert new user into database, and return status code 200', async () => {
		const response = await request(app)
		.post('/api/v1/users').send({
			name: 'Joseph Lennon',
			cpf: '000.000.000-00',
			email: 'lennon@gmail.com',
			backdrop: 'f72585',
			address: 'Av. Pires do Rio, 687',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 1
		})
		expect(response.status).toBe(200)
	})
	it('(2) should be able to insert new user into database, and return status code 200', async () => {
		const response = await request(app)
		.post('/api/v1/users').send({
			name: 'Ronald Willians',
			cpf: '000.000.000-00',
			email: 'ronald.willians@outlook.com',
			backdrop: '7209b7',
			address: 'Av. Pires do Rio, 687',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 1
		})
		expect(response.status).toBe(200)
	})
	it('(3) should be able to insert new user into database, and return status code 200', async () => {
		const response = await request(app)
		.post('/api/v1/users').send({
			name: 'Lucas Romero',
			cpf: '000.000.000-00',
			email: 'pblucasromero@gmail.com',
			backdrop: '219ebc',
			address: 'Av. Pires do Rio, 687',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 1
		})
		expect(response.status).toBe(200)
	})
	it('(3) should be able to insert new user into database, and return status code 200', async () => {
		const response = await request(app)
		.post('/api/v1/users').send({
			name: 'Julia Reis',
			cpf: '000.000.000-00',
			email: 'pblucasromero@gmail.com',
			backdrop: 'f28482',
			address: 'Av. Pires do Rio, 687',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 1
		})
		expect(response.status).toBe(200)
	})
})

describe('GET /users', () => {
	it('should be able to return status code 200', async () => {
		const response = await request(app)
			.get('/api/v1/users')
		expect(response.status).toBe(200)
	})
	it('should be able to get user by id param', async () => {
		const response = await request(app)
			.get(`/api/v1/users/1`)
		expect(response.status).toBe(200)
	})
})

describe('DELETE ALL /users', () => {
	it('should be able to delete all rows into database', async () => {
		const response = await request(app)
		.delete('/api/v1/users').
		expect(response.status).toBe(200)
	})
})