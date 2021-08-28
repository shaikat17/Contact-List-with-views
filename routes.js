const router = require('express').Router();

const {

getAllContacts,
createContact,
deleteContact

} = require('./controller')


router.get('/', getAllContacts)
router.post('/', createContact)
router.get('/delete/:id', deleteContact)

module.exports = router;