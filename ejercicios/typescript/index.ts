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


//funciones
function add(a: number, b: number) : number{
    return a + b
}

const suma = add(5, 6)

function createAdder(a: number): (number) => number{
    return function(b: number){
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)


function optionalLastName(firstName: string, lastName?: string): string {
    return `${firstName } ${lastName}`
}

const sebas = optionalLastName('Sebastian')

function autocompleteLastName(firstName: string, lastName: string = "orozco"): string {
    return `${firstName } ${lastName}`
}

const sebas2 = autocompleteLastName('Sebastian')


///interfaces
interface Rectangulo {
    ancho: number,
    largo: number
}

let rectangulo: Rectangulo = {
    ancho: 4,
    largo: 6
}

function areaRectangulo(r: Rectangulo){
    return r.ancho * r.largo
}
console.log(areaRectangulo(rectangulo))
console.log(rectangulo.toString())

rectangulo.toString = function (){
    return `Rectangulo de largo: ${this.largo} y ancho: ${this.ancho}`
}

console.log(rectangulo.toString())
