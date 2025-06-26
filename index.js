const express = require('express');
const dotenv = require('dotenv');
const contactsRouter = require('./routes/contacts');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/contacts', contactsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
