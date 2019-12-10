import { films } from '../assets/films'

films.forEach(film => {
  let filmDiv = document.createElement("div");
  let filmTitle = document.createElement("h1");
  let filmCrawl = document.createElement("p");
  let filmEpisode = document.createElement("p");
  let pic = document.createElement("img");

  let charNum = getCharNumber(film.url);
  pic.setAttribute("class", "photo");
  filmDiv.setAttribute("class", "card");

  filmTitle.textContent = film.title;
  filmCrawl.textContent = film.opening_crawl;
  filmEpisode.textContent = `Episode: ${film.episode_id}`;
  pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`;

  filmDiv.appendChild(filmTitle);
  filmDiv.appendChild(pic);
  filmDiv.appendChild(filmCrawl);
  filmDiv.appendChild(filmEpisode);

  mainArea.appendChild(filmDiv);
});
