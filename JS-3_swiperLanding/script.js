
let pageSlider = new Swiper('.page',{
    // Мои классы
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',
    
    // Вертикальный слайдер
    direction: 'vertical',

    // Кол-во слайдов для показа
    sliderPerView: 'auto',

    // Вклчаем параллакс
    parallax: true,

    // Управление клавиатурой
    keyboard: {
        // вкл-выкл
        enabled: true,
        onlyInViewport: true,
        // Управление стрелками
        pageUpDown: true,
    },
    
    // Упр. колесом мыши
    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: ".page__pagination",
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet_active',
        bulletActiveClass: 'page__bullet_active'
    },

    //Скролл
    scrollbar: {
        el: ".page__scroll",
        dragClass: 'page__drag-scroll',
        //Возможность перетаскивать скролл
        draggable: true,
    },
}) 
