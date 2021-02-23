//Boolean
let muted: boolean = true
//muted = "string" ///--> error 


//Numeros
let numerador: number = 51
let denominador: number = 10
let resultado = numerador / denominador

//string
let nombre: string = 'richard'
let saludo = `me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ['sebas', 'martin']
people.push('julieth')

let peopleAndNumers: Array<string | number> = []
peopleAndNumers.push('Sebas')
peopleAndNumers.push(100)

//enum
enum Color {
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Rojo
console.log(`mi color favorito es  ${colorFavorito}`)


//enum
enum ColorTexto {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavoritoTexto: Color = Color.Rojo
console.log(`mi color favorito es  ${colorFavoritoTexto}`)

let comodin: any = 'joker'
comodin = { type: 'Wildcard'}

let someObject: object = {type: 'algo'}