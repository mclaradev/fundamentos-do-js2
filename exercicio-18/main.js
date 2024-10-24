class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password){
            console.log(`Login realizado com sucesso, ${this.fullname}.`)
        } else{
            console.log("Email ou senha incorreto, tente novamente.")
        }
    }
}

class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addInStock(quantidade) {
        this.inStock += quantidade
        console.log(`Foram adicionadas mais ${quantidade} unidades deste produto. Estoque atual: ${this.inStock}`)
    }

    calculateDiscount(normalPrice) {
        const discount = (this.price * normalPrice) / 100
        const finalPrice = this.price - discount
        console.log(`Esse produto custa ${this.price} mas com desconto ele fica ${finalPrice}`)

    }
}

const user = new User("Maria Clara", "mclaradev@gmail.com", "mavi")

user.login('mclaradev@gmail.com', 'mavi')
user.login('mclaradev@gmail.com', 'maviis')

const product = new Product("bike", "bike krw aro 29 quadro 15.5 Alumínio 24 vel Freio a Disco X32", 947, 5)

product.addInStock(25)
product.calculateDiscount(10)