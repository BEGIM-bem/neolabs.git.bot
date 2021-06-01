const { Markup, } = require('telegraf')
const { telegram } = require('./token')
// 
module.exports.start = () => {
    return Markup
        .keyboard([
            ['Овен', 'Телец', 'Близнецы', 'Рак'],
            ['Лев', 'Дева', 'Весы', 'Скорпион'],
            ['Стрелец', 'Козерог', 'Водолей', 'Рыбы'],
            ['Назад']
        ])
        .resize()
}
module.exports.datE = () =>
    Markup
        .keyboard([
            ["DATE"]
        ])
        .resize()


