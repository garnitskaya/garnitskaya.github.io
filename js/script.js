window.addEventListener('DOMContentLoaded', () => {

    const objData = {
        contacts: [
            { label: 'Киев', href: "https://goo.gl/maps/ApLT34yqsNifCtSy8", src: "./icon/map.svg", alt: "map" },
            { label: '+38(093)-520-78-88', href: "tel:3809352078888", src: "./icon/phone.svg", alt: "phone" },
            { label: '9972211@gmail.com', href: "mailto:9972211@gmail.com", src: "./icon/envelope.svg", alt: "envelope" },
            { label: 'garnitskaya', href: "https://github.com/garnitskaya", src: "./icon/github.svg", alt: "github" },
            { label: 'alenagarnitskaya', href: "https://www.linkedin.com/in/alenagarnitskaya/", src: "./icon/linkedin.svg", alt: "linkedin" },
        ],
        techSkills: [
            'HTML5',
            'CSS3, SASS, SCSS',
            'JavaScript',
            'TypeScript',
            'React',
            'React Native',
            'Redux',
            'styled-components',
            'Адаптивная верстка'
        ],
        softSkills: [
            'Внимательность',
            'Усидчивость',
            'Дисциплинированность',
            'Готовность улучшать свои навыки и обучаться'
        ],
        trainingCourses: [
            '"WEB-разработчик 2021"',
            '"Посадка верстки и создание тем на CMS WordPress"',
            '"Полный курс по JavaScript + React - с нуля до результата"',
            '"Практический JavaScript"'
        ],
        educationalProjects: [
            '5 landing-pages разной направленности с помощью технологий HTML, CSS.',
            '1 web-сайт на HTML, CSS, JS, Wordpress',
            '4 web-сайта на JS, HTML, CSS',
            '5 SPA на React.JS-Redux'
        ],
        petProjects: [
            { label: 'landing pages на HTML, CSS, JS' },
            { label: '1 web-сайт на HTML, CSS, JS, Wordpress' },
            { label: 'SPA My-Todo-List (добавление, удаление, фильтрация, поиск задач) React.JS', href: "https://garnitskaya.github.io/My-Todo-List" },
            { label: 'SPA RickAndMorty (получение и обработка данных с сервера, вывод блока со случайным персонажем, вывод страницы со списком персонажей, пагинация, фильтрация, поиск) React.JS', href: "https://garnitskaya.github.io/RickAndMorty/" },
            { label: ' SPA Weather', href: "https://garnitskaya.github.io/Weather/" },
            { label: 'SPA My-Todo-List (добавление, удаление, фильтрация, поиск задач) React Native', href: "https://github.com/garnitskaya/myTodoList-expo" },
            { label: 'SPA Coffee Shop ( фильтрация, поиск товара, изпользование hooks, TypeScript и Redux)', href: "https://garnitskaya.github.io/coffee-shop/" },
        ],
        aboutMe: 'Начинающий Front-end разработчик, коммерческого опыта нет, но есть огромное желание расти и развиваться в этом направлении.'
    };

    const contactsBlock = document.querySelector('.contacts__block'),
        techSkillsBlock = document.querySelector('.tech-skills__items'),
        softSkillsBlock = document.querySelector('.soft-skills__items'),
        trainingCoursesBlock = document.querySelectorAll('.training-courses__items'),
        petProjectsBlock = document.querySelector('.more-info__items'),
        aboutMeBlock = document.querySelector('.about-me__item');

    objData.contacts.forEach(({ label, href, src, alt }) => {
        const element = document.createElement('a');
        element.classList.add('contacts__link');
        element.setAttribute('href', href);
        element.setAttribute('target', '_blank');

        element.innerHTML = `
            <div class="contacts__link-img">
                <img src=${src} alt=${alt}>
            </div>
            ${label}
        `

        contactsBlock.append(element)
    })

    const skills = (skillsItem, className, skillsBlock) => {
        skillsItem.forEach(item => {
            const element = document.createElement('li');
            element.classList.add(className, 'block__item');

            if (typeof item === 'string') {
                element.textContent = item;
            } else {
                element.innerHTML =
                    !item.href ?
                        item.label :
                        `
                    ${item.label}
                    <a class="more-info__link" target="_blank"
                        href=${item.href}> ⮫
                    </a>
                    `
            }

            skillsBlock.append(element);
        })
    };


    trainingCoursesBlock.forEach(item => {
        if (item.getAttribute('data-1') === 'one') {
            skills(objData.trainingCourses, 'training-courses__item', item);
        } else {
            skills(objData.educationalProjects, 'training-courses__item', item);
        }
    });

    skills(objData.techSkills, 'tech-skills__item', techSkillsBlock);
    skills(objData.softSkills, 'soft-skills__item', softSkillsBlock);
    skills(objData.petProjects, 'more-info__item', petProjectsBlock);

    aboutMeBlock.textContent = objData.aboutMe;

});
