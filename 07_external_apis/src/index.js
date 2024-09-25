//! GLOBAL VARIABLES
const spaceUrl = "https://api.nasa.gov/planetary/apod"
const showsUrl = " https://api.tvmaze.com/search/shows"
const spaceDiv = document.getElementById("potd")
const searchInput = document.getElementById("search-show")
const showDetailName = document.getElementById("show-name")
const showDetailImg = document.getElementById("show-image")
const showDetailSummary = document.getElementById("show-summary")
const showDetailRating = document.getElementById("show-rating")
const showDetailAiring = document.getElementById("show-airing")
const resultsUl = document.getElementById("show-results")

//! CALLBACKS / HELPER FUNCTIONS
const displayImageOnDOM = (imageObj) => {
    //! create an img tag
    const img = document.createElement("img")
    //! set its src equal to url
    img.src = imageObj.hdurl
    //! set its alt to the obj's explanation
    img.alt = imageObj.explanation
    //! add an id to the img
    img.id = "potd-image"
    //! append the img onto the page
    spaceDiv.append(img)
}

const fetchSpaceImage = () => {
    return fetch(`${spaceUrl}?api_key=${key}`)
            .then(response => response.json())
            .then(dataObj => displayImageOnDOM(dataObj))
            .catch(error => alert(error))
}

const displayShowDetails = (showObj) => {
    showDetailName.innerText = showObj.show.name
    showDetailImg.src = showObj.show.image?.medium || showObj.show.image?.original
    showDetailSummary.innerText = showObj.show.summary?.replaceAll("<p>", "")?.replaceAll("</p>", "")
    showDetailRating.innerText = showObj.show.rating.average
    showDetailAiring.innerText = showObj.show.ended ? showObj.show.ended : "Still airing"
}

const displayShowResult = (showObj) => {
    //! create an li
    const li = document.createElement("li")
    li.id = showObj.id
    //! create an img
    const img = document.createElement("img")
    img.src = showObj.show.image?.medium || showObj.show.image?.original
    img.alt = showObj.show.summary?.replaceAll("<p>", "")?.replaceAll("</p>", "")
    //! create an h3
    const h3 = document.createElement("h3")
    h3.innerText = showObj.show.name
    //! create a button for show details
    const button = document.createElement("button")
    button.innerText = "See Details"
    button.addEventListener("click", () => displayShowDetails(showObj))
    //! assemble dom elements inside li
    li.append(h3, img, button)
    //! insert li inside ul
    resultsUl.append(li)
}

const handleSearch = (e) => {
    const userSearch = e.target.value
    fetch(`${showsUrl}?q=${userSearch}`)
    .then(response => response.json())
        .then(resultsArray => resultsArray.forEach(showObj => displayShowResult(showObj)))
    .catch(error => alert(error))
}

const attachListenerToInput = () => {
    searchInput.addEventListener("input", handleSearch)
}

//! START THE LOGIC HERE
fetchSpaceImage()
attachListenerToInput()