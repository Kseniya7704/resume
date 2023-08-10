// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    title: 'Resume',

    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },
    position: 'Junior Fullstack JS Developer',

    salary: {
      text: 'Desired salary',
      value: '600$ в місяць',
    },

    social: {
      email: {
        text: 'dmytro@mail.com',
        href: 'mailto:dmytro@mail.com',
      },
      phone: {
        text: '+380670000123',
        href: 'tel:+380670000123',
      },
      link: {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dmytro-test',
      },
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
