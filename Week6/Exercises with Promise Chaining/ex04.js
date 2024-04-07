/*Exercise 4: Delayed Greetings
Simulate a delayed greeting with promises. 
First, wait 2 seconds, then log "Hello", wait another second, and log "World!". 
Each step should be done in a separate .then().*/

function delayedGreetings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
    .then(() => {
        console.log("Hello");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    })
    .then(() => {
        console.log("World!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

delayedGreetings();
