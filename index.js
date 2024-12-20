import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

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
  pagination.innerText = `${page} / ${maxPage}`;
  characters.forEach((character) => {
    const card = createCharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.episode
    );
    cardContainer.append(card);
  });

  return characters, info;
}
// Prev + Next Button
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
});

// Search
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacters();
  event.target.reset();
});

fetchCharacters();
