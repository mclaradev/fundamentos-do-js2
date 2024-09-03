// revisando objetos

const book = {
    title: "Diário de um Banana.",
    pagers: 217,
    published: true,
    inStock: 300,
    tags: ["Ficção Juvenil", "Humor"],
    author: {
        name: "Jeff Kinney"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    }
}

console.log(book)

book.addOnStock(700)

console.log(book.inStock)

console.log(book)