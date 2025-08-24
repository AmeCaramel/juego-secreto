function encontrarPosicion(lista, elementoBuscado) {
    for (let indice = 0; indice < lista.length; indice++) {
        if (lista[indice]) === elementoBuscado) {
            return indice; //lo encontramos, devolvemos su posicion
        }
    }
    return -1; //si no aparece en la lista
}

// ejemplo 1
console.log(encontrarPosicion([10, 20, 30, 40], 30)); //devuelve 2
//ejemplo 2
console.log(encontrarPosicion([10, 20, 30, 40], 99)); //-1


/*function sumaElementos(lista) {
    let suma = 0; //empezamos desde 0
    for (let indice = 0; indice < lista.length; indice++) {
        suma += lista[indice]; //sumamos cada elemento a la variable "suma"
    }
    return suma; //devolvemos el resultado final

}

//ejemplo
console.log(sumaElementos([3,5,7])); //15*/

/*function mostrarMinMax(listaNumeros) {
    //usamos funciones de Math para encontrar el menor y mayor
    let minimo = Math.min(...listaNumeros);
    let maximo = Math.max(...listaNumeros);

    console.log('Numero mas pequeño:', minimo);
    console.log('Numero mas grande:', maximo);
}
// Ejemplo de uso
mostrarMinMax([3,7,2,9,5]);*/

// version manual

/*function mostrarMinMax(listaNumeros) {
    let minimo = listaNumeros[0]; //arrancamos con el primero
    let maximo = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) { //empezamos desde el segundo elemento?(comentatio del programa)
        if (listaNumeros[i] < minimo) {
            minimo = listaNumeros[i];
        }
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i];
        }
}

console.log('Numero mas pequeño:', minimo);
console.log('Numero mas grande:', maximo);
}

// Ejemplo
mostrarMinMax([3, 7, 2, 9, 5]);*/

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/
/*function calcularPromedio(listaNumeros) {
    let suma = 0; //acá guardamos la suma de todos los números

    for (let i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i]; //sumamos cada numero
    }

    let promedio = suma / listaNumeros.length; //calculamos el promedio dividiendo la suma por la cantidad de números
    return promedio; //devolvemos el promedio

}

let numeros = [4, 8, 6, 10];
console.log(calcularPromedio(numeros)); // 7*/

/*let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
/*console.log(lenguagesDeProgramacion);*/
/*function mostrarInverso() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarInverso();*/

/*let listaGenerica = [];*/

