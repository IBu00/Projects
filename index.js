const generateBtn = document.getElementById("generateBtn");
const jokeEl = document.getElementById("joke");

const API_Key = "ZWkoWauwO5dGerIeWwIatA==ptnmgZTOKHjQBjZl"; 

const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": API_Key,
    }
};

const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    const response = await fetch(API_URL, options)
    const joke = await response.json()
    
    jokeEl.innerText = joke[0].joke
}

generateBtn.addEventListener("click", getJoke)