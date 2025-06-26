# goit-node-postgresql

Це REST API для керування контактами, реалізований з використанням Node.js, Express, Sequelize та PostgreSQL.  
Проєкт створено як домашнє завдання до модуля PostgreSQL у GoIT.

---

## 📦 Встановлення

git clone https://github.com/nataliyatraxler/goit-node-postgresql
cd goit-node-postgresql
npm install
⚙️ Налаштування
Створи файл .env у корені проєкту з такими змінними:


PORT=3000
DB_HOST=your-db-host
DB_PORT=5432
DB_NAME=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password

▶️ Запуск

node index.js
При успішному запуску:

✅ Database connection successful  
🚀 Server running on port 3000
📡 Доступні маршрути
Метод	Endpoint	Опис
GET	/api/contacts	Отримати всі контакти
GET	/api/contacts/:id	Отримати контакт за ID
POST	/api/contacts	Додати новий контакт
PUT	/api/contacts/:id	Оновити контакт повністю
PATCH	/api/contacts/:id/favorite	Змінити статус favorite
DELETE	/api/contacts/:id	Видалити контакт

🧪 Приклад POST-запиту

{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "+1234567890",
  "favorite": true
}
🛠 Технології
Node.js

Express

Sequelize

PostgreSQL

Dotenv

✅ Автор
Nataliya, 2025
Проєкт виконано в рамках навчання в GoIT.

