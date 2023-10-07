//Classe para criação de poções
class pocoes {
    constructor(nome, tipo, ingredients, valor){
        this.name = nome 
        this.type = tipo // cura, sorte, transformação
        this.ingredients = ingredients || []
        this.value = valor
    }
}

//classe para criação dos personagens estudantes
class student {
    constructor(nome, idade, casa, dinheiro){
        this.name = nome
        this.age = idade // 11 até 17
        this.house = casa //Grifinória, Corvinal, Lufa-lufa, Sonserina
        this.money = dinheiro
    }

    acessoDeCompra(){
        if(this.age >= 15 && this.money > 0){
            console.log(`O aluno ${this.name} tem acesso a todas as poções.`)
        } else if (this.age < 15 && this.age >= 11 && this.money > 0){
            console.log(`O aluno ${this.name} tem acesso apenas às poções de cura.`)
        } else if (this.age < 11){
            console.log(`O aluno ${this.name} não pode comprar poções. É novo demais.`)
        } else if(this.money == 0) {
            console.log(`O aluno ${this.name} não possui dinheiro para comprar poções.`)
        }
    }
}

//Poções
let polissuco = new pocoes("Polissuco", "transformação", ["Hemeróbios", "sanguessugas", "descurainia", "sanguinária", "pele de araramboia", "Pó de Chifre de Bicórnio", "dna da pessoa"], 5 )

let sacebak = new pocoes("Sacebak", "cura", ["pus de Bubotúbera", "gengibre descascado e picado", "1/2 limão espremido", "3 colheres de sopa de mel"], 3.50)

let felixFelicis = new pocoes("Felix Felicis", "sorte", ["ovo de cinzal", " tentáculos de murtisco", "Tintura de timo", "Casca de ovo de Occami", "Arruda comum em pó"])

//Alunos
let Harry = new student("Harry Potter", 17, "Grifinória", 50)

let Luna = new student("Luna Lovegood", 13, "Corvinal", 15)

let Rony = new student("Rony Wealey", 10,"Grifinoria", 0)

Harry.acessoDeCompra()
Luna.acessoDeCompra()
Rony.acessoDeCompra()
