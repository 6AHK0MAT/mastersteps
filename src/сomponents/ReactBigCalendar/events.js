const now = new Date()

export default [
    {
        id: 0,
        title: 'Событие на весь день с длинным названием',
        allDay: true,
        start: new Date(2019, 10, 0),
        end: new Date(2019, 10, 1),
    },
    {
        id: 1,
        title: 'Продолжительное мероприятие',
        start: new Date(2019, 11, 7),
        end: new Date(2019, 11, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Некоторое событие',
        start: new Date(2019, 10, 9, 0, 0, 0),
        end: new Date(2019, 10, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Конференция',
        start: new Date(2019, 9, 11),
        end: new Date(2019, 9, 13),
        desc: 'Большая конференция для важных людей',
    },
    {
        id: 6,
        title: 'Встреча',
        start: new Date(2019, 10, 12, 10, 30, 0, 0),
        end: new Date(2019, 10, 12, 12, 30, 0, 0),
        desc: 'Собрание, для подготовки к встрече',
    },
    {
        id: 7,
        title: 'Ланч',
        start: new Date(2019, 8, 12, 12, 0, 0, 0),
        end: new Date(2019, 8, 12, 13, 0, 0, 0),
        desc: 'Бодрящий ланч',
    },
    {
        id: 8,
        title: 'Встреча с директором',
        start: new Date(2019, 8, 12, 14, 0, 0, 0),
        end: new Date(2019, 8, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Счастливый час',
        start: new Date(2019, 8, 12, 17, 0, 0, 0),
        end: new Date(2019, 8, 12, 17, 30, 0, 0),
        desc: 'Самое важное время для приема пищи',
    },
    {
        id: 10,
        title: 'Обед',
        start: new Date(2019, 9, 12, 20, 0, 0, 0),
        end: new Date(2019, 9, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'День рождения Пети',
        start: new Date(2019, 9, 13, 7, 0, 0),
        end: new Date(2019, 9, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Позднее мероприятие',
        start: new Date(2019, 9, 17, 19, 30, 0),
        end: new Date(2019, 9, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Поднее мероприятие этого же дня',
        start: new Date(2019, 9, 17, 19, 30, 0),
        end: new Date(2019, 9, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Событие на несколько дней',
        start: new Date(2019, 9, 20, 19, 30, 0),
        end: new Date(2019, 9, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'СЕГОДНЯ!',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 15,
        title: 'Мы сейчяс тут.',
        start: now,
        end: now,
    },
    {
        id: 16,
        title: 'Записать видео о работе',
        start: new Date(2019, 9, 14, 15, 30, 0),
        end: new Date(2019, 9, 14, 19, 0, 0),
    },
    {
        id: 17,
        title: 'Собрание в школе',
        start: new Date(2019, 10, 14, 16, 30, 0),
        end: new Date(2019, 10, 14, 20, 0, 0),
    },
    {
        id: 18,
        title: 'Встреча выпускников',
        start: new Date(2019, 11, 14, 16, 30, 0),
        end: new Date(2019, 11, 14, 17, 30, 0),
    },
    {
        id: 19,
        title: 'Тестирование онлайн',
        start: new Date(2019, 9, 14, 17, 30, 0),
        end: new Date(2019, 9, 14, 20, 30, 0),
    },
    {
        id: 20,
        title: 'Закончить проект',
        start: new Date(2019, 11, 14, 17, 0, 0),
        end: new Date(2019, 11, 14, 18, 30, 0),
    },
    {
        id: 21,
        title: 'Собеседование по телефону',
        start: new Date(2019, 9, 14, 17, 0, 0),
        end: new Date(2019, 9, 14, 18, 30, 0),
    },
    {
        id: 22,
        title: 'Мастер класс по JS',
        start: new Date(2019, 10, 14, 17, 30, 0),
        end: new Date(2019, 10, 14, 19, 0, 0),
    },
    {
        id: 23,
        title: 'Go to the gym',
        start: new Date(2019, 3, 14, 18, 30, 0),
        end: new Date(2019, 3, 14, 20, 0, 0),
    },
]