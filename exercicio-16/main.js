const dayjs = require("dayjs");

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')

    console.log(`Você tem: ${ageInYears} anos de idade.`)
}

birthday("2003-10-30")