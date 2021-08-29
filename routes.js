const router = require('express').Router();

const {

getAllContacts,
createContact,
deleteContact,
getCntById

} = require('./controller')


router.get('/', getAllContacts)
router.get('/:id', getCntById)
router.post('/', createContact)
router.get('/delete/:id', deleteContact)

module.exports = router;