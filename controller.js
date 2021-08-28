const Contact = require('./Contacts')

module.exports.getAllContacts = (req, res) => {
	Contact.find()
		.then((contacts) => {
			// console.log(contacts)
			// res.json(contacts)
			res.render('index',{ contacts, error: {} })
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}

module.exports.createContact = (req, res) => {
	let {name, phone, email, id} = req.body
	
	let error = {}

	if (!name) {
		error.name = "Please Provide Your Name"
	}

	if (!phone) {
		error.phone = "Please Provide Your Number"
	}

	if (!email) {
		error.email = "Please Provide Your Email"
	}

	let isError = Object.keys(error).length > 0

	if (isError) {
		console.log("I'm here")
		Contact.find()
			.then( contacts => {
				return res.render('index', { contacts, error })
			})
			.catch( err => {
				console.log(err)
				return res.json({
				message: 'Opps!!! ERROR'
			})
			})
	} else {
		if (id) {
			Contact.findOneAndUpdate(
						{_id: id},
						{$set:
							{
								name,
								phone,
								email
							}
					})
					.then(() => {
						Contact.find()
							.then( contacts => {
								return res.render('index', { contacts, error: {} })
								})
					})
					.catch((err) => {
						console.log(err)
						res.json({
							message: 'Opps!!! ERROR'
						})
					})
		} else {
			let contact = new Contact({
								name,
								phone,
								email
				})

					contact.save()
						.then(c => {
							Contact.find()
								.then(contacts => {
									return res.render('index', { contacts, error: {} })
								})
						})
						.catch(err => {
							console.log(err.message)
							return res.json({
								message: 'Opps!!! ERROR'
							})
						})
}
		}

	
}



module.exports.deleteContact = (req, res) => {
	let { id } = req.params
	
	Contact.findOneAndDelete({_id: id})
		.then(() => {
			Contact.find()
				.then(contacts => {
					res.render('index', { contacts, error: {} })
				})
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}