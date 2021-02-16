//1er uso de los closures: para crear variables privadas
function crearContador(){
    let contador = 0 // la variable es privada, solo se puede modificar llamando la funcion

    setTimeout(() => { // modificara el valor anclado (contador)
        contador = 100
    }, 2000);

    return function incrementar(){
        contador += 1
        return contador
    }
}

const contador1 = crearContador()
console.log(contador1())
console.log(contador1())
console.log(contador1())
const contador2 = crearContador()
console.log(contador2())
console.log(contador2())
console.log(contador2()) 



//2do uso de los closures: fabrica de funciones
const estilosPorDefecto = 'color: white'
function crearImpresoraDeMensajes(tipo, estilos, str){
    /*  
        la variable estilosPorDefecto no se deja dentro de la funcion, ya que cuando se llama, se almacena este valor en el 
        entorno lexico de cada funcion, si esta constante ocupara mas espacio, o hubieran mas variables,
        se podria consumir la memoria muy rapido, por lo tanto es mejor dejar una variable global,
        pero declarada cercana a la funcion para que se sepa que estan relacionadas.
    */
    //const estilosPorDefecto = 'color: white' 

    return function mensaje(str){
        console.log(`%c ${tipo}: ${str}`, estilosPorDefecto + estilos)
    }
}

const error = crearImpresoraDeMensajes('Error', 'background:red;')
const warning = crearImpresoraDeMensajes('Warning', 'background:orange;')
const success = crearImpresoraDeMensajes('Success', 'background:green;')
const info  = crearImpresoraDeMensajes('Info', 'background:blue;')
const js = crearImpresoraDeMensajes('JS', 'background:blue; color:black')

error('Se produjo un error')


