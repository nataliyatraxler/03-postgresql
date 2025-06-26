# goit-node-cli

Це консольний застосунок для керування контактами. Розроблено як домашнє завдання до модуля Node.js у GoIT.

##  Встановлення

```bash
git clone https://github.com/nataliyatraxler/-goit-node-cli
cd goit-node-cli
npm install
## Запуск

Використовуй наступні команди для роботи з контактами:

🔹 Отримати всі контакти
node index.js -a list
🔹 Отримати контакт за ID
node index.js -a get -i <id>
🔹 Додати новий контакт
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
🔹 Видалити контакт за ID
node index.js -a remove -i <id>

🛠 Технології

Node.js
Commander.js
FS Promises
Nanoid
✅ Автор

Nataliya, 2025
Проєкт виконано в рамках навчання в GoIT