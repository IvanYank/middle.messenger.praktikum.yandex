Проект по созданию прототипа мессенджера с возможностью регистрации, авторизация, редактированием профиля и общением между пользователями.

Данный проект реализован путём создания отдельных компонентов и их интеграции в уже заданный макет, для добавления динамичности и возмодности изменения содержимого онных. В основу компонентов были положены Proxy и паттерн Event Bus, что позволило инкапсулировать информацию и изолировать её от других блоков. Был создан класс в котором реализовывается вся логика и уже от него наследовались другие классы, в которых были свои стили и разметки.

Большинство вспомогательных функций, например, рендер, были вынесены в отдельную папку utils, все основополагающие классы для реализации компоненнтов были вынесены в папку services. Также был реализован класс fetch на основе XHR, который позволяет делать запросы по заданным url-ам и определёнными методами и телами.

Был реализован переход на TypeScript, также были добавлены ESLint и Stylelint

Команды:
npm run start - Сборка и запуск проекта <br/>
npm run dev - Запуск проекта в режиме разработки

Макет из Figma: https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=20-287&mode=design&t=JeJA3ibSWwmE2JaT-0

Страницы:
Авторизация - http://localhost:3000 <br/>
Регистрация - http://localhost:3000/src/pages/registration/index.html <br/>
Список чатов - http://localhost:3000/src/pages/chats/index.html <br/>
Настройка профиля - http://localhost:3000/src/pages/profile/index.html <br/>
404 - http://localhost:3000/src/pages/404/index.html <br/>
500 - http://localhost:3000/src/pages/500/index.html

Netlify - https://radiant-choux-52af17.netlify.app
