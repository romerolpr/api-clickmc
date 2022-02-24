const User = require('../models/user.model.js');

const result = (err, request) => {
	if (err) {
	  request.res.status(500).send({
	    message:
	      err.message || "Some error occurred while creating const object User."
	  })
	} else {
		request.res.send(request.data)
	}
}

const checkError = (body, res) => {
	if (body == undefined) {
	  res.status(400).send({
	    message: "Content cannot be empty."
	  });
	}
}

// cria e exporta todos os métodos do controller

exports.create = (req, res) => {
	// console.log(req.body)
	checkError(req.body ? req.body : undefined, res)

  User.create({
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    address: req.body.address,
    description: req.body.description,
    backdrop: req.body.backdrop != undefined ? req.body.backdrop : '',
    status: req.body.status != undefined ? req.body.status : 1
  }, (err, data) => {
    result(err, { data: data, res: res })
  })

}

exports.getAll = (req, res) => {
	User.getAll((err, data) => {
		if (err) {
			res.status(500).send({
				message: `Error while getting users`
			})
			return;
		}
		result(err, { data: data, res: res })
	})
}

exports.getById = (req, res) => {
	const id = req.params.id
	User.getById(id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: `Error while retrieving User by id ${id}`
			})
			return;
		}
		result(err, { data: data, res: res })
	})
}
exports.updateById = (req, res) => {
	
	checkError(req.body ? req.body : undefined, res)

	const id = req.params.id

	User.updateById(id, {
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    address: req.body.address,
    description: req.body.description,
    backdrop: req.body.backdrop != undefined ? req.body.backdrop : '',
    status: req.body.status != undefined ? req.body.status : 1
  }, (err, data) => {
		if (err) {
			res.status(500).send({
				message: `Error while updating User by id ${id}`,
				sqlMessage: err.sqlMessage
			});
			return;
		}
		result(err, { data: data, res: res })
	})

}
exports.removeById = (req, res) => {
	const id = req.params.id
	User.removeById(id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: `Error while deleting User by id ${id}`
			})
			return;
		}
		res.send(data)
	})
}
exports.removeAll = (req, res) => {
	User.removeAll((err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || 'Error while removing all Users.'
			})
			return;
		}
		res.send({
			message: 'All Users were deleted.'
		})
	})
}