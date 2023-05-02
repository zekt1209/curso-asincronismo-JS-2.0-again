// Callback
// Es una funcion que recibe otra funcion para hacer su uso segun sea el caso

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(3, 2, sum));


// setTimeout

setTimeout(function() {
    console.log("Hello World");
}, 2000);

const greetings = (name) => {
    console.log(`Hello ${name}`)
}

setTimeout(greetings, 5000, "Victor");


// Playground #1

function execCallback(callback) {
    // Tu código aquí 👈
    window.setTimeout(callback, 2000);
  }

  const myFunc = () => console.log("Log after 2s");
  execCallback(myFunc);
  