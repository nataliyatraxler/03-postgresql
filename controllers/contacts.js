const Contact = require('../models/contact');

const getAllContacts = async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByPk(id);
  contact ? res.json(contact) : res.status(404).json({ message: 'Not found' });
};

const addContact = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Missing request body' });
  }

  const { name, email, phone, favorite = false } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newContact = await Contact.create({ name, email, phone, favorite });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create contact', error });
  }
};


const updateContact = async (req, res) => {
  const { id } = req.params;
  const [updated] = await Contact.update(req.body, { where: { id } });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  const updatedContact = await Contact.findByPk(id);
  res.json(updatedContact);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  if (typeof favorite !== 'boolean') {
    return res.status(400).json({ message: 'Missing or invalid favorite field' });
  }

  const [updated] = await Contact.update({ favorite }, { where: { id } });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  const updatedContact = await Contact.findByPk(id);
  res.json(updatedContact);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByPk(id);
  if (!contact) return res.status(404).json({ message: 'Not found' });
  await contact.destroy();
  res.json({ message: 'Contact deleted' });
};

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
};
