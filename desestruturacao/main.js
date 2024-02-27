const person = {
    name: "flora",
    job: "developer fullstack",
    parents: ["Roberto", "Tatiana"]
}

// const name = person.name
// console.log(name)

const {name, job, parents} = person
console.log(name, job, parents)

const [father, mother] = parents
console.log(father, mother)

function createUser({name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const user = createUser(person)
console.log(user)