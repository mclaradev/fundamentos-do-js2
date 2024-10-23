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

const user = new User("Maria Clara", "mclaradev@gmail.com", "mvmc2810")

user.login('mclaradev@gmail.com', 'mvmc2810')
user.login('mclaradev@gmail.com', 'mcmv2810')