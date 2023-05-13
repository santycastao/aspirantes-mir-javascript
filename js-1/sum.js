// escribe la función suma acá
function sum(resul) {
    let i = 1, suma = 0;
    
    while (i <= resul) {
        suma = suma + i;
        i++;
    }
    resul = suma;
    return resul;
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120