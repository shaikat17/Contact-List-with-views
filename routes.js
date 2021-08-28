const router = require('express').Router();

const {

getAllContacts,
createContact,
getContactById,
updateContact,
deleteContact

} = require('./controller')


router.get('/', getAllContacts)
router.get('/:id', getContactById)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router;