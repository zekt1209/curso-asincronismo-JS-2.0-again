// El valor que tiene async / await en realidad esta en el await
    // porque lo que se declare con await dentro de otra funcion significa que va a esperar a que suceda y luego ejecuta lo que esta despues, no solamente intenta hacer una corrida, sino que va por pasos.

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    })
}

const normalFn = () => {
    fnAsync();
    console.log('Hello');
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');