export const weddingData = {
    case: {
        number: '001',
        title: 'ПРОТОКОЛ',
        subtitle: 'об административном задержании',
        status: 'Открыто'
    },

    groom: {
        lastName: 'Мурза',
        firstName: 'Михаил',
        patronymic: 'Сергеевич',
        birthDate: '03.11.2002',
        birthPlace: 'г. Заринск, Алтайский край',
        rank: 'Старший лейтенант',
        department: 'Управление ЗАГС',
        badge: '№ 042',
        photo: '/images/groom.jpg'
    },

    bride: {
        lastName: 'Фискова',
        firstName: 'Екатерина',
        patronymic: 'Игоревна',
        birthDate: '06.05.2005',
        birthPlace: 'г. Заринск, Алтайский край',
        place: 'г. Заринск, ЗАГС',
        article: 'ст. 1 Семейного кодекса РФ',
        photo: '/images/bride.jpg'
    },

    decree: {
        date: '18 июля 2026 года',
        time: '11:30',
        place: 'Батунская ривьера',
        judge: 'А. П. Свадебный'
    },

    procedures: [
        { id: 1, title: 'Сбор гостей', time: '11:15' },
        { id: 2, title: 'Роспись', time: '11:30' },
        { id: 3, title: 'Фотосессия', time: '13:30' },
        { id: 4, title: 'Банкет', time: '13:30' },
        { id: 5, title: 'Тамада', time: '16:00' },
    ],



    attire: [
        { label: 'Мужчины', text: 'костюм, галстук' },
        { label: 'Женщины', text: 'вечернее платье' },
        { label: 'Аксессуары', text: 'шляпки, перчатки' }
    ],

    gifts: [
        { id: 1, name: 'денежный конверт' },
        { id: 2, name: 'кухонный комбайн' },
        { id: 3, name: 'постельное бельё' },
        { id: 4, name: 'посуда' },
        { id: 5, name: 'бытовая техника' }
    ]
}