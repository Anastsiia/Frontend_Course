/*Exercise 5: Error Handling
Create a promise chain that attempts to parse JSON data. 
Use a try/catch block within a .then() method to handle JSON parsing errors. 
If successful, log the parsed object; 
if an error occurs, log "Invalid JSON".
Bonus
Make an async await version*/

function parseJSONPromise(jsonData) {
    return Promise.resolve(jsonData)
        .then(data => {
            try {
                const parsedData = JSON.parse(data);
                console.log(parsedData);
            } catch (error) {
                console.log("Invalid JSON");
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

async function parseJSONAsync(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        console.log(parsedData);
    } catch (error) {
        console.log("Invalid JSON");
    }
}

const data = '{"name": "Ann", "age": 29}';

parseJSONPromise(data);
parseJSONAsync(data);
