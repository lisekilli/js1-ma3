// Question 1
function(a, b) {
    return a - b;
}

const subtract = (a, b) => a - b; 


// Question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports"; 

fetch(baseUrl)
.then(function(response){
    return response.json();
})
.then(function(json) {
    for (let i = 0; i < json.results.length; i++) {
        console.log(json.results[i].name);
    }
})

.catch(function(error) {
    document.location.href = "error.html";
}); 


// Question 3
const replaceText = "These cats are outrageous.";
console.log(replaceText.replace("cats", "giraffes")); 


// Question 4
const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 

if (params.has("userId")) {
    if(params.get("userId") < 10){
        document.location.href = "first.html";
    }
    else{
        document.location.href = "second.html";
    }
    else{
        document.location.href = "third.html";
    }
}


// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".button");
container.removeChild(button);
}


// Question 6
const animalList = document.querySelector(".animals .cows");
const newListElement = document.createElement("li");
newListElement.innerHTML = "Parrots";
newListElement.className = "parrots";

animalList.after(newListElement); 


// Question 7
const baseUrl2 = "https://api.rawg.io/api/games/3801";

fetch(baseUrl2)
.then(function(response){
    return response.json();
})
.then(function(json){
   const rating = document.querySelector(".rating");
   rating.appendChild(document.createTextNode(json.rating));
})

.catch(function(error){
    console.log(error);
});