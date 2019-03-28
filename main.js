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
        if(userInput === sodas[i].brand);
        appendToUL(sodas[i]);
    }
    
}

function appendToUL(sodas){
    
    const ul = document.querySelector('#list');
    
    const newLi = document.createElement('li');
    newLi.innerText = `Brand: ${sodas.brand}`
    ul.appendChild(newLi);
    
    const newLi2 = document.createElement('li');
    newLi2.innerText = `Sugar: ${sodas.sugar}`
    ul.appendChild(newLi2);

    const newLi3 = document.createElement('li');
    newLi3.innerText = `Calories: ${sodas.calories}`
    ul.appendChild(newLi3);
    
}

function displayAll(){
    
}
