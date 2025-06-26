const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
} = require('../controllers/contacts');

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', addContact);
router.put('/:id', updateContact);
router.patch('/:id/favorite', updateStatusContact);
router.delete('/:id', removeContact);

module.exports = router;