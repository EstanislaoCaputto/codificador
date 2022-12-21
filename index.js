// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/** 
 Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
**/

const codificado = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
const decodificado = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

let botonCopiador = document.getElementById('copiado')
let imagenMunheco = document.getElementById('munheco')
let textoCapturado = document.getElementById('texto')
let textoResultado = document.getElementById('resultado')
let encriptado = []
let desencriptado = []


function encriptar() {
    let miString = textoCapturado.value;
    for (let i = 0; i < miString.length; i++) {
        encriptado.push(codificado[miString[i]] || miString[i]);
    }
    let miResultado = encriptado.join('');
    imagenMunheco.style = 'display:none'
    textoResultado.textContent = miResultado
    botonCopiador.style = 'display:inline'
    

}

function desencriptar(){
    let miString = textoCapturado.value;
    let patron = '';
    
    for (let i = 0; i < miString.length; i++) {
        if(miString[i] in codificado){
            patron = codificado[miString[i]]
            desencriptado.push(decodificado[patron])
            i += patron.length - 1
            patron = ''
        }else{
            desencriptado.push(miString[i])
        }
    }
    imagenMunheco.style = 'display:none'
    let miResultado = desencriptado.join('')
    textoResultado.textContent = miResultado
    botonCopiador.style = 'display:inline'
    
}


function copiar(){
    let textoSeleccionado = textoResultado.value
    navigator.clipboard.writeText(textoSeleccionado)

}