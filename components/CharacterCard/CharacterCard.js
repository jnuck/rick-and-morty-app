export function createCharacterCard(image, name, status, type, episode) {
  const card = document.createElement("li");
  card.innerHTML = `<li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${image}" alt="${name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${episode.length}</dd>
            </dl>
          </div>
        </li>`;

  //   <div class="card__image-container">
  //     <img
  //       class="card__image"
  //       src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  //       alt="Rick Sanchez"
  //     />
  //     <div class="card__image-gradient"></div>
  //   </div>
  //   <div class="card__content">
  //     <h2 class="card__title">Rick Sanchez</h2>
  //     <dl class="card__info">
  //       <dt class="card__info-title">Status</dt>
  //       <dd class="card__info-description">Alive</dd>
  //       <dt class="card__info-title">Type</dt>
  //       <dd class="card__info-description"></dd>
  //       <dt class="card__info-title">Occurrences</dt>
  //       <dd class="card__info-description">51</dd>
  //     </dl>
  //   </div>
  // </li>`;
  return card;
}
