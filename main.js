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
   
    for(let i = 0; i < data.length; i++){
        if(userInput === data[i].soda);
        appendToUL();
    }
    
}

function appendToUL(event){
    event.preventDefault
    list.appendChild('ul');
    
    const newLi = document.createElement('li');
    newLi.innerText = `Brand: ${data.soda}`
    ul.appendChild(newLi);
    
    const newLi2 = document.createElement('li');
    newLi2.innerText = `Sugar: ${data.sugar}`
    ul.appendChild(newLi2);

    const newLi3 = document.createElement('li');
    newLi3.innerText = `Calories: ${data.calories}`
    ul.appendChild(newLi3);
    
}

function info(){
    
}
