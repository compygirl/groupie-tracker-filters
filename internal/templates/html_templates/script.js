
// export const searchInput = document.getElementById("searchInput");
// export const suggestionsContainer = document.getElementById("suggestions");
// export const artistList = document.getElementById("artistList");
// export const list000 = document.getElementById("slideContainer");
// export const copyArtistList = artistList.cloneNode(true).innerHTML;
// export const images = list000.getElementsByTagName("img");
// export const image2 = [...images];
// export const rangeFilter = document.getElementById("rangeFilter");
// export const rangeValue = document.getElementById("rangeValue");    
// export const categoryFilters = document.querySelectorAll(".category-filter");
// export const firstAlbumDate = document.getElementById("firstAlbumDate");


// export function getValues(searchInput, rangeFilter, categoryFilters,firstAlbumDate) {
//   const searchTerm = searchInput.value;
//   const maxRangeValue = rangeFilter.value;
//   const checkedCategories = Array.from(categoryFilters)
//         .filter(filter => filter.checked)
//         .map(filter => filter.value);
//   const checkedCategoriesString = checkedCategories.join(",");

//   const firstAlbumDateVal = firstAlbumDate.value
//   const [year, month, day] = firstAlbumDateVal.split("-");
//   let formattedDate = ""
//   if (typeof day !== 'undefined' && typeof month !== 'undefined' && typeof year !== 'undefined') {
//     formattedDate = day+"-"+month+"-"+year;
//   }
//   return {searchTerm, maxRangeValue, checkedCategoriesString, formattedDate}
// }


// firstAlbumDate.addEventListener("input", () => {
//   let tempObj = getValues(searchInput, rangeFilter, categoryFilters, firstAlbumDate)
//   let searchTerm = tempObj.searchTerm, maxRangeValue = tempObj.maxRangeValue, checkedCategoriesString = tempObj.checkedCategoriesString
//   let firstAlbumDateVal = tempObj.formattedDate
//   fetchSuggestions(searchTerm,maxRangeValue,checkedCategoriesString, firstAlbumDateVal);
// });

// rangeFilter.addEventListener("input", () => {
//   let tempObj = getValues(searchInput, rangeFilter, categoryFilters, firstAlbumDate)
//   let searchTerm = tempObj.searchTerm, maxRangeValue = tempObj.maxRangeValue, checkedCategoriesString = tempObj.checkedCategoriesString
//   let firstAlbumDateVal = tempObj.formattedDate
//   fetchSuggestions(searchTerm,maxRangeValue,checkedCategoriesString, firstAlbumDateVal);
// });

// for (const categoryFilter of categoryFilters) {
//   categoryFilter.addEventListener("change", () => {
//     let tempObj = getValues(searchInput, rangeFilter, categoryFilters, firstAlbumDate)
//     let searchTerm = tempObj.searchTerm, maxRangeValue = tempObj.maxRangeValue, checkedCategoriesString = tempObj.checkedCategoriesString
//     let firstAlbumDateVal = tempObj.formattedDate
//     fetchSuggestions(searchTerm,maxRangeValue,checkedCategoriesString, firstAlbumDateVal);
//   });
// }

// searchInput.addEventListener("input", () => {
//   suggestionsContainer.style = "visibility: visible";
//   let tempObj = getValues(searchInput, rangeFilter, categoryFilters, firstAlbumDate)
//   let searchTerm = tempObj.searchTerm, maxRangeValue = tempObj.maxRangeValue, checkedCategoriesString = tempObj.checkedCategoriesString
//   let firstAlbumDateVal = tempObj.formattedDate
//   fetchSuggestions(searchTerm,maxRangeValue,checkedCategoriesString, firstAlbumDateVal);
// });

// export function fetchSuggestions(searchTerm,maxRangeValue, checkedCategoriesString, firstAlbumDateVal) {
//   fetch(`/search?searchTerm=${searchTerm}&CD=${maxRangeValue}&membersNums=${checkedCategoriesString}&FAD=${firstAlbumDateVal}`)
//     .then(response => response.json())
//     .then(data => displaySuggestions(data))
//     .catch(error => console.error(error));
// }

// export  function displaySuggestions(suggestions) {
//   if (suggestions["suggestions"].length < 1) {
//     suggestionsContainer.innerHTML = ""
//     const notFoundElement = document.createElement("div");
//     notFoundElement.textContent = "NOT FOUND ----FUCK OFFFFFFF!!!!!!:DDDD";
//     artistList.innerHTML = "";
//     artistList.appendChild(notFoundElement);
//     return
//   }
//   suggestionsContainer.innerHTML = "";
//   for (let suggestion of suggestions["suggestions"]) {
//     const checkedCategories = Array.from(categoryFilters)
//     .filter(filter => filter.checked)
//     .map(filter => filter.value);
//     const checkedCategoriesString = checkedCategories.join(",");
//     const suggestionDiv = document.createElement("div");
//     suggestionDiv.classList.add("suggestion");
//     suggestionDiv.textContent = suggestion;
//     suggestionDiv.addEventListener("click", () => {
//         const startIndex = suggestion.indexOf("- ");
//         const trimmedStr = startIndex !== -1 ? suggestion.substring(0, startIndex) : suggestion;
//         searchInput.value = trimmedStr;
//         suggestionsContainer.innerHTML = "";
//         suggestionsContainer.style = "visibility: hidden";
//         let tempObj = getValues(searchInput, rangeFilter, categoryFilters, firstAlbumDate)
//         let trimmedSearchTerm = tempObj.searchTerm, maxRangeValue = tempObj.maxRangeValue, checkedCategoriesString = tempObj.checkedCategoriesString
//         let firstAlbumDateVal = tempObj.formattedDate
//         fetchSuggestions(trimmedSearchTerm, maxRangeValue, checkedCategoriesString, firstAlbumDateVal)
//     });
//     suggestionsContainer.appendChild(suggestionDiv);
//   }

//   // Repopulate "setContainer" with "set" data
//   artistList.innerHTML = "";
//   for (let key in suggestions["set"]) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const img = document.createElement("img");
//     const h2 = document.createElement("h2");

//     a.href = "/artist?id=" + key;
//     img.src = image2[key-1].getAttribute("src");
//     h2.textContent = suggestions["set"].key;

//     a.appendChild(img);
//     a.appendChild(h2);
//     li.appendChild(a);
//     artistList.appendChild(li);
//   }
// }
  