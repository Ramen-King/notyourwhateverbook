window.onload = init;

function init(){
    //runs search function when clicked.
    document.querySelector('#search')
        .addEventListener('click', searchButton);
    document.querySelector('#display-all')
        .addEventListener('click', displayAll);
}

function searchButton(event){
    event.preventDefault();
    const userInput = document.querySelector('#search-input').value;
    //check if userinput equals to property value
   
    for(let i = 0; i < sodas.length; i++){
        if(userInput.includes(sodas[i].brand[i])) {
            appendToUL(sodas[i]);
        }
    }
    
}

function appendToUL(sodas){
    const ul = document.querySelector('#list');
    const newP = document.createElement('p');
    newP.innerText = `Brand: ${sodas.brand}`
    ul.appendChild(newP);
    
    const newP2 = document.createElement('p');
    newP2.innerText = `Sugar: ${sodas.sugar}`
    ul.appendChild(newP2);

    const newP3 = document.createElement('p');
    newP3.innerText = `Calories: ${sodas.calories}`
    ul.appendChild(newP3);
    
}

function displayAll(event) {
    event.preventDefault();
    for(let i = 0; i < sodas.length; i++){
        appendToUL(sodas[i]);
    }
}
