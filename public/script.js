let indexHtml = '';
const bookInfo = [];

const popUp = document.querySelector('#popup');
const jsButton = document.querySelector('.js-button');
const jsOverlay = document.querySelector('#overlay');
const jsSubmitElement = document.querySelector('.jsSubmit');
const content = document.querySelector('.jsContent');


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

function Book(title,author,page, checkBox){
    this.title = title;
    this.author = author;
    this.page = page;
    this.checkBox = checkBox;
}

Book.prototype.info = function (){
    this.checkBox = !this.checkBox;
};

jsSubmitElement.addEventListener('click', () => {
    const titleElement = document.querySelector('.jsTitle');
    const authorElement = document.querySelector('.jsAuthor');
    const pageElement = document.querySelector('.jsPages');
    const checkboxElement = document.querySelector('#readBook');

    const title = titleElement.value;
    const author = authorElement.value;
    const page = pageElement.value;
    const checkBox = checkboxElement.checked;

    const newBook = new Book (title,author, page, checkBox);
    bookInfo.push(newBook);


    titleElement.value = '';
    authorElement.value ='';
    pageElement.value = '';
    checkboxElement.checked = false; 

    printHTML();

    //Reset the Popup Bar
    popUp.classList.add('hidden');
    jsOverlay.classList.add('hidden');
});

function printHTML() {
    content.innerHTML = '';
    bookInfo.forEach((book, i) => {
        const readButtonText = book.checkBox ? "Read" : "Not Read"; // Toggle button text
        content.insertAdjacentHTML('beforeend', `
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center bg-white space-y-4 mt-4 rounded-lg">
                    <div class="text-2xl font-semibold pt-5">${book.title}</div>
                    <div class="text-2xl font-semibold"> ${book.author}</div>
                    <div class="text-2xl font-semibold"> ${book.page} Pages</div>
                    <div class="px-6"><button class="bg-${book.checkBox ? 'green-300': 'red-400'} w-22rem text-2xl font-medium rounded-md py-4" onclick="isRead(${i})">${readButtonText}</button></div>
                    <div class="pb-5 px-6"><button class="bg-gray-300 w-22rem text-2xl font-medium rounded-md py-4 jsRemove" onclick="removeBook(${i})">Remove</button></div>
                </div>
            </div>`);
    });
}

function removeBook(index) {
    bookInfo.splice(index, 1);
    printHTML();
};


function isRead(index) {
    bookInfo[index].info(); // Toggle the value
    printHTML(); // Update the content
};











