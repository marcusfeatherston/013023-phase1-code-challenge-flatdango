const url = "http://localhost:3000/films";

const moviePoster = document.querySelector("#poster");

const movieTitle = document.querySelector("#title");

const movieRuntime = document.querySelector("#runtime");

const movieDescription = document.querySelector("#film-info");

const showtime = document.querySelector("#showtime");

const ticketsRemaining = document.querySelector("#ticket-num");

const filmList = document.querySelector("#films");

const ticketBtn = document.querySelector("#buy-ticket");

const renderFilm = (film) => {
  moviePoster.src = film.poster;
  movieTitle.textContent = film.title;
  movieRuntime.textContent = film.runtime;
  movieDescription.textContent = film.description;
  showtime.textContent = film.showtime;
  ticketsRemaining.textContent = film.capacity - film.tickets_sold;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const film = data[0];
    renderFilm(film);
    //build a for each to populate the movie list thing
    data.forEach((oneFilm) => {
      const listElement = document.createElement("li");
      listElement.textContent = oneFilm.title;
      listElement.className = "film item";
      filmList.append(listElement);
    });
  });
// Create event listener for buy ticket button
// Breath breath breath breath
ticketBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(parseInt(ticketsRemaining.textContent));
  const remainingNum = parseInt(ticketsRemaining.textContent);
  console.log(remainingNum);
  if (remainingNum > 0) {
    ticketsRemaining.textContent = remainingNum - 1;
  }
});
//holy shit it works!
