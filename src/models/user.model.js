const sql = require('../../mysql')

const checkError = (err, result) => {
	if (err) {
		result(err, null)
	}
}

const resultData = (res, result) => {
	if (res.length) {
		result(null, res[0])
	}
}

// Inicia o objeto construtor
const User = () => (null)

User.create = (user, result) => {
	sql.query(
		`INSERT INTO tb_users
		(name, cpf, email, address, description, backdrop_color, status)
		VALUES (?, ?, ?, ?, ?, ?, ?)`,
		[user.name, user.cpf, user.email, user.address, user.description, user.backdrop, user.status], 
		(err, res) => {
	
		checkError(err, result); // verifica se erro existe
		if (!err) {			
			result(null, { id: res.insertId, ...user })
		}
		
	})
}

User.getById = (id, result) => {
	sql.query('SELECT * FROM tb_users WHERE id = ?', id, (err, res) => {
		checkError(err, result) // verifica se erro existe
		resultData(res, result) // retorna resultado caso exista
		result({ message: 'User id not found.', status: 404 }, null)
	})
}

User.getAll = (result) => {
	sql.query('SELECT * FROM tb_users', (err, res) => {
		checkError(err, result) // verifica se erro existe
		result(null, res) // retorna resultado

	});
}

User.updateById = (id, user, result) => {
	sql.query(
		`UPDATE tb_users SET 
		name = ?,
		cpf = ?,
		email = ?,
		address = ?,
		description = ?,
		backdrop_color = ?,
		status = ?
		WHERE id = ?
		`, [user.name, user.cpf, user.email, user.address, user.description, user.backdrop, user.status, id],
		(err, res) => {
			
			checkError(err, result) // verifica se erro existe
			if (!res.affectedRows || res.affectedRows == 0) {
				result({ message: 'User id not found.', status: 404 }, null)
				return
			}
			result(null, { id: id, ...user })

		})
}

User.removeById = (id, result) => {
  sql.query('DELETE FROM tb_users WHERE id = ?', id, (err, res) => {
    checkError(err, result) // verifica se erro existe
    if (!res.affectedRows || res.affectedRows == 0) {
    	result({ message: 'User id not found.', status: 404 }, null)
    	return
    }
    result(null, res)
  })
}

User.removeAll = result => {
  sql.query('DELETE FROM tb_users', (err, res) => {
    checkError(err, result) // verifica se erro existe
    result(null, res);
  })
}

module.exports = User;