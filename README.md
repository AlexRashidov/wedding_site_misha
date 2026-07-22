# Свадебный сайт «Секретное дело ЗАГСа»

Интерактивное SPA-приложение для свадьбы, выполненное в концепции «секретного дела». Сайт полностью заменил бумажные приглашения и стал центральным элементом мероприятия.

## 🎯 Особенности проекта

- **Уникальный дизайн** в стиле советских документов и протоколов
- **Многостраничный сценарий** «расследования» с плавными переходами
- **Адаптивная верстка** (ПК, планшет, телефон)
- **Интерактивные элементы**: фото, анимации, QR-код для загрузки фото
- **Интеграция с Telegram** для уведомлений о действиях гостей
- **100% гостей** использовали сайт вместо бумажных приглашений

## 🛠️ Стек технологий

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

- **Frontend:** Vue 3 (Composition API), JavaScript (ES6+), HTML5, CSS3
- **Хостинг:** Vercel
- **Инструменты:** Vite

## 🏗️ Архитектура проекта
```
src/
├── assets/ # статика (шрифты, изображения)
├── components/
│ ├── common/ # основные компоненты
│ │ ├── Protocol.vue # протокол задержания
│ │ ├── Decree.vue # постановление
│ │ ├── Procedure.vue # процессуальные действия
│ │ ├── Witness.vue # свидетели
│ │ ├── Attire.vue # форма одежды
│ │ ├── Conclusion.vue # заключение
│ │ ├── PhotoUpload.vue # загрузка фото
│ │ └── CaseFile.vue # обложка дела
│ └── data/
│ └── wedding.js # конфигурация (имена, даты, фото)
├── services/
│ └── telegram.js # интеграция с Telegram Bot API
├── App.vue # корневой компонент
└── main.js # точка входа
```

## 📦 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/AlexRashidov/wedding_site_misha.git

# Перейти в папку проекта
cd wedding_site_misha

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

🔗 Интеграции
- **Telegram Bot API** — уведомления о заполнении форм и загрузке фото

✍️ Моя роль
##Разработка полного цикла:

- **Концепция и дизайн интерфейса**

- **Создание SPA на Vue 3 (Composition API)**

- **Разработка модульной архитектуры**

- **Адаптивная верстка под все устройства**

- **Интеграция с Telegram Bot API**

- **Настройка деплоя на Vercel**
