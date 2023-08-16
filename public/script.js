let indexHtml = '';
const bookInfo = [];

const popUp = document.querySelector('#popup');
const jsButton = document.querySelector('.js-button');
const jsOverlay = document.querySelector('#overlay');
const jsSubmitElement = document.querySelector('.jsSubmit')

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

function Book(title,author,page){
    this.title = title;
    this.author = author;
    this.page = page;
}

Book.prototype.info = function (){
    indexHtml += `<div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center bg-white space-y-4 mt-4 rounded-lg">
        <div class="text-2xl font-semibold pt-5">${this.title}</div>
        <div class="text-2xl font-semibold"> ${this.author}</div>
        <div class="text-2xl font-semibold"> ${this.page} Pages</div>
        <div class="px-6"><button class="bg-green-300 w-22rem text-2xl font-medium rounded-md py-4">Read</button></div>
        <div class="pb-5 px-6"><button class="bg-gray-300 w-22rem text-2xl font-medium rounded-md py-4">Remove</button></div>
    </div>
</div>`
    ;
};

jsSubmitElement.addEventListener('click', () => {
    const titleElement = document.querySelector('.jsTitle');
    const authorElement = document.querySelector('.jsAuthor');
    const pageElement = document.querySelector('.jsPages');

    const title = titleElement.value;
    const author = authorElement.value;
    const page = pageElement.value;

    const newBook = new Book (title,author, page);
    bookInfo.push(newBook);


    titleElement.value = '';
    authorElement.value ='';
    pageElement.value = '';

    console.log(bookInfo);

    const content = document.querySelector('.jsContent');

    bookInfo.forEach((book) => {
        content.insertAdjacentHTML('beforeend', `
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center bg-white space-y-4 mt-4 rounded-lg">
                <div class="text-2xl font-semibold pt-5">${book.title}</div>
                <div class="text-2xl font-semibold"> ${book.author}</div>
                <div class="text-2xl font-semibold"> ${book.page} Pages</div>
                <div class="px-6"><button class="bg-green-300 w-22rem text-2xl font-medium rounded-md py-4">Read</button></div>
                <div class="pb-5 px-6"><button class="bg-gray-300 w-22rem text-2xl font-medium rounded-md py-4">Remove</button></div>
            </div>
        </div>
    `)});

});





