let express = require(`express`);
let app = express();
let port = 3000;

app.listen(port, function () {
    console.log(`http://localhost:${3000}`);
});

app.use(express.static(`public`));
app.use(express.urlencoded({extended: true}))

let hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

let { faker } = require('@faker-js/faker/locale/ru');
const { log } = require('console');

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

let allTags = [`JavaScript`, `React`, `Node.js`, `Python`, `Django`, `TypeScript`, `Vue.js`, `Angular`, `PHP`, `Ruby`]

let allProjects = [
    {
        name: "Проект 'Альфа'",
        description: "Разработка фронтенд части веб-приложения",
        year: "2023"
    },
    {
        name: "Проект 'Бета'", 
        description: "Создание REST API на Node.js",
        year: "2022"
    },
    {
        name: "Проект 'Гамма'",
        description: "Разработка мобильного приложения",
        year: "2021"
    },
    {
        name: "Проект 'Дельта'",
        description: "Создание микросервисной архитектуры",
        year: "2020"
    },
    {
        name: "Проект 'Эпсилон'",
        description: "Разработка системы аналитики",
        year: "2019"
    }
];

let employee = [{
    name: faker.person.fullName(),
    photo: faker.image.avatar(),
    city: faker.location.city(),
    tags: faker.helpers.uniqueArray(allTags, faker.number.int({ min: 3, max: 5 })),
    projects: faker.helpers.uniqueArray(allProjects, 2)
}];

app.get('/', (req, res) => {
    res.render('index', { employee: employee, projects: employee[0].projects });
});
