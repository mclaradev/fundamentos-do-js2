const dayjs = require("dayjs");

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, "year")

    console.log(`Você tem: ${ageInYears} anos de idade.`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
}

birthday("2003-10-30")