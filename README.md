Проект по созданию прототипа мессенджера с возможностью регистрации, авторизация, редактированием профиля и общением между пользователями.

В данном спринте были расширены возможности базового класса Block, который позволяет рендерить полноценные страницы с возможностью передачи "детей", которых можно было бы обновлят, передавать в них пропсы и инициировать их обновление при обновлении главной страницы. Был также реализован Роутер, который позволяет изменить путь страницы в строке, а самое главное, возможность подмены страниц без обновления. К проекту была подключена возможность получения и отправки данных на сервер, что позволило создать авторизацию, регистрацию, создание и удаление чатов, добавление и удаление пользователей из чата и полючение сообщений в реальном времени. К сожалению, на данный момент функционал довольно обрезанный, много оговорок, есть место для улучшений. Была добавлена возможность обновления пользовательской информации: логин, почта, телефон, аватарка, никнейм, фамилия, имя, пароли. Взаимодействие с сервером было вынесено в разные классы(API и контроллеры) для уменьшения связаности блоков.

Как уже было сказано очень многое можно улучшить, многое работает не лучшим образом, но в силу ограничений по времени функционал пришлось урезать, чтобы уложиться по времени

Команды:
npm run start - Сборка и запуск проекта <br/>
npm run dev - Запуск проекта в режиме разработки

Макет из Figma: https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=20-287&mode=design&t=JeJA3ibSWwmE2JaT-0

Страницы:
Авторизация - http://localhost:3000 <br/>
Регистрация - http://localhost:3000/sign-up <br/>
Список чатов - http://localhost:3000/messenger <br/>
Настройка профиля - http://localhost:3000/settings <br/>
404 - http://localhost:3000/404 <br/>
500 - http://localhost:3000/500

Netlify - https://radiant-choux-52af17.netlify.app
