console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    try {
        const response = await fetch (url);
        const data = await response.json();

        if (response.ok) {
            console.log(data);
            // console.log(typeof data);
            console.log(data.results);
            console.log(typeof data.results);
            console.log(data.results[0]);
            console.log(data.results[2]);
            // console.log(typeof data.results[2]);
            console.log(data.results[2].eye_color);
        } else {
            console.log("Bad response :-/");
        }
    } catch (error) {
        console.log ("An error occurred");
    }
}

fetchData();
