////////////////////////////////////////////////////////////////
// Yesterday's Code
////////////////////////////////////////////////////////////////

console.log(bookStore);

function formatPrice(price) {
    return '$' + Number.parseFloat(price).toFixed(2);
}
function setHeader() {
    const h1 = document.querySelector("#store-name")
    h1.innerText = bookStore.name
}
function changeFooter() {
    const divName = document.getElementById("store")
    divName.innerText = bookStore.name
    const divAddress = document.getElementById("address")
    divAddress.innerText = bookStore.address
    const divNumber = document.getElementById("number")
    divNumber.innerText = bookStore.number
}
function addParagraph() {
    const p = document.createElement("p") // I just created a new orphan node
    p.innerText = "Something random!"
    p.id = "random"
    document.querySelector("main").appendChild(p)
    document.querySelector("main").append(p, "a string here", 7)
}
function removeEl(){
    const h1 = document.querySelector("div#header div h1")
    h1.remove()
}
function changeHeader() {
    const h1 = document.querySelector("div#header div h1")
    h1.innerText = "A new name"
}
function renderBook(book) {
    const li = document.createElement("li")
    li.className = "list-li"
    const h3 = document.createElement("h3")
    h3.innerText = book.title
    const pAuthor = document.createElement("p")
    pAuthor.innerText = book.author
    const pPrice = document.createElement("p")
    pPrice.innerText = formatPrice(book.price)
    const img = document.createElement("img")
    img.src = book.imageUrl
    img.alt = book.title
    const button = document.createElement("button")
    button.innerText = "Delete"
    // button.addEventListener("click", (e) => e.target.parentElement.remove())
    button.addEventListener("click", () => li.remove())
    li.append(h3, pAuthor, pPrice, img, button)
    // figure out where
    // target that place with querySelector/getElementById
    const ulList = document.getElementById("book-list")
    // append
    ulList.appendChild(li)
}
function renderBookAsHTML(book) {
    const ulList = document.getElementById("book-list")
    ulList.innerHTML += `
        <li class="list-li">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${formatPrice(book.price)}</p>
            <img src=${book.imageUrl} alt=${book.title}/>
            <button data-id=${book.id} class="delete-btn">Delete</button>
        </li>
    `
    // const deleteBtn = document.querySelector(`button[data-id='${book.id}']`)
    // deleteBtn.addEventListener("click", (e) => e.target.parentElement.remove())
}


setHeader()
changeFooter()
bookStore.inventory.forEach(bookObj => renderBookAsHTML(bookObj))
// bookStore.inventory.forEach(renderBook) this line leverages JS magic 
// BUT IT'S IDENTICAL TO THE ONE ABOVE

////////////////////////////////////////////////////////////////
// Today's Code
// Event Listeners/Handlers (Behavior => Data => Display)
////////////////////////////////////////////////////////////////
//! Generic Syntax For Attaching Event Listeners

// domNodeElement.addEventListener(theEventInStringformat, callbackFunctionThatDesidesWhatToDo, optionalTrueBooleanHere)

//! Suggestions When Working With the DOM

//TODO 1. Set global selector variables at the top of the file for everyone to use
//TODO 2. Attach event listeners to the correct DOM nodes
//TODO 3. Decide if creating the callback anonymously in-place OR pass a function reference (promotes reusability)
//TODO 4. Does the callback have access to all the data it needs or should it receive parameters?


//! Pattern 1: create the function somewhere to promote reusability
// then pass the function as a callback to addEventListener
//! Attach click for toggle button
const handleToggle = (e) => {
    e.target.nextElementSibling.classList.toggle("collapsed")
}
const toggleBtn = document.getElementById("toggleForm")
const newBookForm = document.getElementById("book-form")
toggleBtn.addEventListener("click", handleToggle)

//! Pattern 2: create the callback function in-place, make it anonymous, and 
// IF YOU WANT use an arrow function for readability.
//! This is an alternative to attaching the click inside the renderBookAsHTML func
document.querySelectorAll("li button").forEach(btn => {
    console.log("hey")
    btn.addEventListener("click", e => e.target.parentElement.remove())
})

//! Attach Submit onto the form
const handleSubmit = (e) => {
    e.preventDefault() //! always the first thing you do in a submit callback
    //! extract data out of the form
    const title = document.querySelector("#form-title").value
    const author = document.querySelector("#form-author").value
    const price = document.querySelector("#form-price").value
    const imageUrl = document.querySelector("#form-imageUrl").value
    const inventory = document.querySelector("#form-inventory").value

    //! validate the data
    if (!title.trim() || !author.trim() || !price.trim()) {
        alert("Please fill in all the required fields: title, author, price")
        return
    }
    //! create an object containing the data
    const newBook = {
        title,
        author,
        price,
        reviews: [],
        inventory, 
        imageUrl 
    }
    //! invoke renderBook with the newly created object
    renderBook(newBook)

    //! Reset the form on a successful submission
    newBookForm.reset()
}
newBookForm.addEventListener("submit", handleSubmit)
