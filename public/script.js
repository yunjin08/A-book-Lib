let myLibrary = [];

function Book (name){
    this.name = name;
}

function addBooktoMyLibrary (){

}

const popUp = document.querySelector('#popup');
const jsButton = document.querySelector('.js-button');
const jsOverlay = document.querySelector('#overlay');

jsButton.addEventListener ('click', () => {
    popUp.classList.remove('hidden');
    jsOverlay.classList.remove('hidden');
});


jsOverlay.addEventListener ('click', () => {
    if(event.target === jsOverlay){
        popUp.classList.add('hidden');
        jsOverlay.classList.add('hidden');
    }
});



