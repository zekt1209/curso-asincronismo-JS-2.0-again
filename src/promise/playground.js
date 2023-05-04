function delay(time, message) {
    
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(message)
        }, time);
        
    });
    
}

delay(2000, "Hello after 2s")
    .then((message) => console.log(message))