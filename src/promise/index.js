// Hacer uso de las promises

const promise = new Promise(function (resolve, reject) {
    resolve("Hey, this was resolved! ")
});


// Example

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`Good!, We have ${cows} cows on the farm`)
    } else {
        reject(`Sorry! We have just ${cows} cows on the farm, they are not enough`)
    }
});


// Es importante usar el .catch para el manejo de errores en las Promises, porque si no se cumple la condicion de resolved, va a tronar.
countCows.then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => console.log("Finally"));

