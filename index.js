import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');
const header = document.querySelector('[data-js="header"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";
// Fetch
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  const characters = data.results;
  const info = data.info;
  cardContainer.innerHTML = "";

  // Pagination
  maxPage = data.info.pages;
  paginationElement.innerText = `${page} / ${maxPage}`;
  //Characters
  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

  return characters, info;
}

//Nav Buttons and Pagination
const dynamicPrevButton = NavButton("Previous Page", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

const paginationElement = NavPagination();

const dynamicNextButton = NavButton("Next Page", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});
navigation.append(dynamicPrevButton, paginationElement, dynamicNextButton);

// const homeButton = NavButton("Super", () => {
//   console.log("I am super!");
// });
// header.append(homeButton);

// Search
const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});
searchBarContainer.append(searchBar);

fetchCharacters();
