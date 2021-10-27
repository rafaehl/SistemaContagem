let numeroAlunos = 5;
let listaAlunos = ["Mariana","Frederico","Victor","Ismael","Pablo", "Erick"]

for (let contador = 0; contador < listaAlunos.length; contador++){
    // console.log(contador);
    if (contador == 0) {
        console.log( contador + ": ZERO"); //contatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR`); // Interpolação - Template Strings
        } else {
            console.log(`${contador}: PAR`)
        }
    }
