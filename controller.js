const Contact = require('./Contacts')

module.exports.getAllContacts = (req, res) => {
	Contact.find()
		.then((contacts) => {
			console.log(contacts)
			res.json(contacts)
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}

module.exports.createContact = (req, res) => {
	let {name, phone, email} = req.body

	let contact = new Contact({
		name,
		phone,
		email
	})

	contact.save()
		.then((contact) => {
			console.log(contact)
			res.json(contact)
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}

module.exports.getContactById = (req, res) => {
	let { id } = req.params
	// id = parseInt(id)

	Contact.findById(id)
		.then((contact) => {
			console.log(contact)
			res.json(contact)
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}

module.exports.updateContact = (req, res) => {
	let { id } = req.params
	// id = parseInt(id)

	let {name, phone, email } = req.body

	Contact.findOneAndUpdate(
		{_id: id},
		{$set:
			{
				name,
				phone,
				email
			}
		},
		{new: true}
		)
		.then((contact) => {
			console.log(contact)
			res.json(contact)
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}

module.exports.deleteContact = (req, res) => {
	let { id } = req.params
	
	Contact.findOneAndDelete({_id: id})
		.then((contact) => {
			console.log(contact)
			res.json(contact)
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Opps!!! ERROR'
			})
		})
}