const dayjs = require("dayjs");

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, "year")
    const dayToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`Você tem: ${ageInYears} anos de idade.`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${dayToNextBirthday} dias para você completar ${ageInYears + 1} anos de idade.`)
}

birthday("2003-10-30")