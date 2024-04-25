// Comandos Ctrl Shift I - Para abrir el inspector de una pagina html
//CTRL B - panel lateral - de par to.


numero = 100;

for ( let i = 1 ; i < numero ; i++ ) {
    document.write(`<p>${respuesta(i)}</p>`)
}

function respuesta(i)
{
    if (i % 15 === 0){ 
        return "FIZZBUZZ"
    }
    if (i % 3 === 0){
        return "FIZZ"
    }
    if (i % 5 === 0){
        return "BUZZ"
    }else {
        return i
    }
}


