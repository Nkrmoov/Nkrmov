const films = [
  { id: 1, title: "The Shawshank Redemption", year: 1994, img: "https://m.media-amazon.com/images/I/51K-H4Q1EkL._AC_SY679_.jpg" },
  { id: 2, title: "The Godfather", year: 1972, img: "https://m.media-amazon.com/images/I/51GRgFwX24L._AC_.jpg" },
  { id: 3, title: "The Dark Knight", year: 2008, img: "https://m.media-amazon.com/images/I/51jD8h0ZbHL._AC_SY679_.jpg" },
  { id: 4, title: "The Godfather: Part II", year: 1974, img: "https://m.media-amazon.com/images/I/81lRzx1aGTL._AC_SY679_.jpg" },
  { id: 5, title: "The Dark Knight Rises", year: 2012, img: "https://m.media-amazon.com/images/I/71WvQUUpZkL._AC_SY679_.jpg" },
  { id: 6, title: "12 Angry Men", year: 1957, img: "https://m.media-amazon.com/images/I/71lKkDEnM9L._AC_SY679_.jpg" },
  { id: 7, title: "Schindler's List", year: 1993, img: "https://m.media-amazon.com/images/I/91K4XeL7R7L._AC_SY679_.jpg" },
  { id: 8, title: "Pulp Fiction", year: 1994, img: "https://m.media-amazon.com/images/I/91tq9Ypk1XL._AC_SY679_.jpg" },
  { id: 9, title: "The Lord of the Rings: The Return of the King", year: 2003, img: "https://m.media-amazon.com/images/I/81Lf--5qx1L._AC_SY679_.jpg" },
  { id: 10, title: "The Good, the Bad and the Ugly", year: 1966, img: "https://m.media-amazon.com/images/I/81nPknTL1oL._AC_SY679_.jpg" },
  { id: 11, title: "Fight Club", year: 1999, img: "https://m.media-amazon.com/images/I/51deLIf0b1L._AC_SY679_.jpg" },
  { id: 12, title: "Forrest Gump", year: 1994, img: "https://m.media-amazon.com/images/I/51Lt+qltsJL._AC_SY679_.jpg" },
  { id: 13, title: "Inception", year: 2010, img: "https://m.media-amazon.com/images/I/91G82K8zqVL._AC_SY679_.jpg" },
  { id: 14, title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, img: "https://m.media-amazon.com/images/I/81xWqaU6UqL._AC_SY679_.jpg" },
  { id: 15, title: "The Matrix", year: 1999, img: "https://m.media-amazon.com/images/I/71uN5zbx3ML._AC_SY679_.jpg" },
  { id: 16, title: "Goodfellas", year: 1990, img: "https://m.media-amazon.com/images/I/61nIUt+TchL._AC_SY679_.jpg" },
  { id: 17, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, img: "https://m.media-amazon.com/images/I/81QdTckUM7L._AC_SY679_.jpg" },
  { id: 18, title: "One Flew Over the Cuckoo's Nest", year: 1975, img: "https://m.media-amazon.com/images/I/91lXtPY75gL._AC_SY679_.jpg" },
  { id: 19, title: "Seven Samurai", year: 1954, img: "https://m.media-amazon.com/images/I/91syGySfjhL._AC_SY679_.jpg" },
  { id: 20, title: "City of God", year: 2002, img: "https://m.media-amazon.com/images/I/91JhTt9rLgL._AC_SY679_.jpg" },
  { id: 21, title: "Se7en", year: 1995, img: "https://m.media-amazon.com/images/I/91X1i3w-K0L._AC_SY679_.jpg" },
  { id: 22, title: "The Silence of the Lambs", year: 1991, img: "https://m.media-amazon.com/images/I/71dd3Qe8F9L._AC_SY679_.jpg" },
  { id: 23, title: "It's a Wonderful Life", year: 1946, img: "https://m.media-amazon.com/images/I/91mCEmZDNwL._AC_SY679_.jpg" },
  { id: 24, title: "Life is Beautiful", year: 1997, img: "https://m.media-amazon.com/images/I/91cGpa8ps3L._AC_SY679_.jpg" },
  { id: 25, title: "The Usual Suspects", year: 1995, img: "https://m.media-amazon.com/images/I/91DgI2dX8wL._AC_SY679_.jpg" }

  { id: 26, title: "The Lion King", year: 1994, img: "https://m.media-amazon.com/images/I/81yfgIhELjL._AC_SY679_.jpg" },
  { id: 27, title: "Back to the Future", year: 1985, img: "https://m.media-amazon.com/images/I/71bFCxfkpzL._AC_SY679_.jpg" },
  { id: 28, title: "The Prestige", year: 2006, img: "https://m.media-amazon.com/images/I/71b9o3zGk-L._AC_SY679_.jpg" },
  { id: 29, title: "The Departed", year: 2006, img: "https://m.media-amazon.com/images/I/91TSdjj5mfL._AC_SY679_.jpg" },
  { id: 30, title: "Whiplash", year: 2014, img: "https://m.media-amazon.com/images/I/91XgWpx2C4L._AC_SY679_.jpg" },
  { id: 31, title: "The Green Mile", year: 1999, img: "https://m.media-amazon.com/images/I/71wCHCTc0RL._AC_SY679_.jpg" },
  { id: 32, title: "The Intouchables", year: 2011, img: "https://m.media-amazon.com/images/I/91bBxkzV+TL._AC_SY679_.jpg" },
  { id: 33, title: "Interstellar", year: 2014, img: "https://m.media-amazon.com/images/I/91eUNqzH3zL._AC_SY679_.jpg" },
  { id: 34, title: "Parasite", year: 2019, img: "https://m.media-amazon.com/images/I/91q+glOwq6L._AC_SY679_.jpg" },
  { id: 35, title: "The Pianist", year: 2002, img: "https://m.media-amazon.com/images/I/91YnKjoGiKL._AC_SY679_.jpg" },
  { id: 36, title: "Gladiator", year: 2000, img: "https://m.media-amazon.com/images/I/91eJmjAMm1L._AC_SY679_.jpg" },
  { id: 37, title: "The Shining", year: 1980, img: "https://m.media-amazon.com/images/I/81s4Fw9aj9L._AC_SY679_.jpg" },
  { id: 38, title: "American History X", year: 1998, img: "https://m.media-amazon.com/images/I/91h+6zzTa2L._AC_SY679_.jpg" },
  { id: 39, title: "The Great Dictator", year: 1940, img: "https://m.media-amazon.com/images/I/91f0cOlzPLL._AC_SY679_.jpg" },
  { id: 40, title: "The Dark Knight Trilogy", year: 2005, img: "https://m.media-amazon.com/images/I/91o3E72zgsL._AC_SY679_.jpg" },
  { id: 41, title: "The Hunt", year: 2012, img: "https://m.media-amazon.com/images/I/81oAa2Z5MlL._AC_SY679_.jpg" },
  { id: 42, title: "Reservoir Dogs", year: 1992, img: "https://m.media-amazon.com/images/I/91D3n6lveBL._AC_SY679_.jpg" },
  { id: 43, title: "A Clockwork Orange", year: 1971, img: "https://m.media-amazon.com/images/I/81n8AN9kK-L._AC_SY679_.jpg" },
  { id: 44, title: "The Usual Suspects", year: 1995, img: "https://m.media-amazon.com/images/I/81DgI2dX8wL._AC_SY679_.jpg" },
  { id: 45, title: "The Princess Bride", year: 1987, img: "https://m.media-amazon.com/images/I/91Kt9fJZ8gL._AC_SY679_.jpg" },
  { id: 46, title: "The Big Lebowski", year: 1998, img: "https://m.media-amazon.com/images/I/91hA27VVJTL._AC_SY679_.jpg" },
  { id: 47, title: "Spider-Man: No Way Home", year: 2021, img: "https://m.media-amazon.com/images/I/91Kj3Wwp+5L._AC_SY679_.jpg" },
  { id: 48, title: "City Lights", year: 1931, img: "https://m.media-amazon.com/images/I/91iHlydzX0L._AC_SY679_.jpg" },
  { id: 49, title: "The Breakfast Club", year: 1985, img: "https://m.media-amazon.com/images/I/71GpK6+shOL._AC_SY679_.jpg" },
  { id: 50, title: "The Wolf of Wall Street", year: 2013, img: "https://m.media-amazon.com/images/I/91lpdPbmHrL._AC_SY679_.jpg" }
  { id: 51, title: "Memento", year: 2000, img: "https://m.media-amazon.com/images/I/91yPY6pyd-L._AC_SY679_.jpg" },
  { id: 52, title: "The Dark Knight Returns", year: 2012, img: "https://m.media-amazon.com/images/I/91dguwZ4zjL._AC_SY679_.jpg" },
  { id: 53, title: "Good Will Hunting", year: 1997, img: "https://m.media-amazon.com/images/I/91HGt9z9L9L._AC_SY679_.jpg" },
  { id: 54, title: "Star Wars: Episode IV - A New Hope", year: 1977, img: "https://m.media-amazon.com/images/I/91s9BxGsy7L._AC_SY679_.jpg" },
  { id: 55, title: "The Lord of the Rings: The Two Towers", year: 2002, img: "https://m.media-amazon.com/images/I/91kqGJ3SVrL._AC_SY679_.jpg" },
  { id: 56, title: "Coco", year: 2017, img: "https://m.media-amazon.com/images/I/91Q6cgrl8LL._AC_SY679_.jpg" },
  { id: 57, title: "Saving Private Ryan", year: 1998, img: "https://m.media-amazon.com/images/I/91ffG5WXf3L._AC_SY679_.jpg" },
  { id: 58, title: "The Godfather: Part III", year: 1990, img: "https://m.media-amazon.com/images/I/81Ex1dYhQRL._AC_SY679_.jpg" },
  { id: 59, title: "The Great Escape", year: 1963, img: "https://m.media-amazon.com/images/I/91hsHlzQ4XL._AC_SY679_.jpg" },
  { id: 60, title: "The Hunt for Red October", year: 1990, img: "https://m.media-amazon.com/images/I/91jUMt88PbL._AC_SY679_.jpg" },
  { id: 61, title: "The Bridge on the River Kwai", year: 1957, img: "https://m.media-amazon.com/images/I/91EBg7uZTzL._AC_SY679_.jpg" },
  { id: 62, title: "Dr. Strangelove", year: 1964, img: "https://m.media-amazon.com/images/I/81qf6qv8KzL._AC_SY679_.jpg" },
  { id: 63, title: "Apocalypse Now", year: 1979, img: "https://m.media-amazon.com/images/I/91bCRzEuQ9L._AC_SY679_.jpg" },
  { id: 64, title: "The Sixth Sense", year: 1999, img: "https://m.media-amazon.com/images/I/81cJv5lGTbL._AC_SY679_.jpg" },
  { id: 65, title: "Blade Runner", year: 1982, img: "https://m.media-amazon.com/images/I/91psqjs6bKL._AC_SY679_.jpg" },
  { id: 66, title: "The Prestige", year: 2006, img: "https://m.media-amazon.com/images/I/71hPGJVRGvL._AC_SY679_.jpg" },
  { id: 67, title: "The Departed", year: 2006, img: "https://m.media-amazon.com/images/I/91TSdjj5mfL._AC_SY679_.jpg" },
  { id: 68, title: "The Matrix Reloaded", year: 2003, img: "https://m.media-amazon.com/images/I/71+ol2P+fgL._AC_SY679_.jpg" },
  { id: 69, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, img: "https://m.media-amazon.com/images/I/91chHcmqTRL._AC_SY679_.jpg" },
  { id: 70, title: "Jaws", year: 1975, img: "https://m.media-amazon.com/images/I/91cLzwdzRWL._AC_SY679_.jpg" },
  { id: 71, title: "The Wizard of Oz", year: 1939, img: "https://m.media-amazon.com/images/I/81+SObY7CFL._AC_SY679_.jpg" },
  { id: 72, title: "The Sound of Music", year: 1965, img: "https://m.media-amazon.com/images/I/91QQV8EzprL._AC_SY679_.jpg" },
  { id: 73, title: "Star Wars: Episode VI - Return of the Jedi", year: 1983, img: "https://m.media-amazon.com/images/I/81JXl-Yw1wL._AC_SY679_.jpg" },
  { id: 74, title: "Monty Python and the Holy Grail", year: 1975, img: "https://m.media-amazon.com/images/I/81c7jUbHmAL._AC_SY679_.jpg" },
  { id: 75, title: "The Maltese Falcon", year: 1941, img: "https://m.media-amazon.com/images/I/91BsdjoD4dL._AC_SY679_.jpg" }
  { id: 76, title: "A Beautiful Mind", year: 2001, img: "https://m.media-amazon.com/images/I/91PjtD1L5hL._AC_SY679_.jpg" },
  { id: 77, title: "The Godfather: Part II", year: 1974, img: "https://m.media-amazon.com/images/I/91Pjr94hsSL._AC_SY679_.jpg" },
  { id: 78, title: "The Terminator", year: 1984, img: "https://m.media-amazon.com/images/I/91m+Lts46nL._AC_SY679_.jpg" },
  { id: 79, title: "Inception", year: 2010, img: "https://m.media-amazon.com/images/I/91iV-H4y8sL._AC_SY679_.jpg" },
  { id: 80, title: "The Shawshank Redemption", year: 1994, img: "https://m.media-amazon.com/images/I/91WRAwzU8nL._AC_SY679_.jpg" },
  { id: 81, title: "The Big Lebowski", year: 1998, img: "https://m.media-amazon.com/images/I/91g99-MI3KL._AC_SY679_.jpg" },
  { id: 82, title: "Back to the Future Part II", year: 1989, img: "https://m.media-amazon.com/images/I/91cM4hxptML._AC_SY679_.jpg" },
  { id: 83, title: "Citizen Kane", year: 1941, img: "https://m.media-amazon.com/images/I/91Uj14kHcZL._AC_SY679_.jpg" },
  { id: 84, title: "Sunset Boulevard", year: 1950, img: "https://m.media-amazon.com/images/I/91ftfwS5KlL._AC_SY679_.jpg" },
  { id: 85, title: "The Good, the Bad and the Ugly", year: 1966, img: "https://m.media-amazon.com/images/I/91k+qxXrkGL._AC_SY679_.jpg" },
  { id: 86, title: "12 Angry Men", year: 1957, img: "https://m.media-amazon.com/images/I/91YExHg8l+L._AC_SY679_.jpg" },
  { id: 87, title: "The Silence of the Lambs", year: 1991, img: "https://m.media-amazon.com/images/I/91V0mJ2fECL._AC_SY679_.jpg" },
  { id: 88, title: "The Dark Knight Rises", year: 2012, img: "https://m.media-amazon.com/images/I/91QeLjm5epL._AC_SY679_.jpg" },
  { id: 89, title: "The Lion King", year: 1994, img: "https://m.media-amazon.com/images/I/91ckg6v5LqL._AC_SY679_.jpg" },
  { id: 90, title: "The Third Man", year: 1949, img: "https://m.media-amazon.com/images/I/91mgsScIXlL._AC_SY679_.jpg" },
  { id: 91, title: "The Princess Bride", year: 1987, img: "https://m.media-amazon.com/images/I/91UlVjp81AL._AC_SY679_.jpg" },
  { id: 92, title: "Paths of Glory", year: 1957, img: "https://m.media-amazon.com/images/I/91TCE8zn1mL._AC_SY679_.jpg" },
  { id: 93, title: "The Great Escape", year: 1963, img: "https://m.media-amazon.com/images/I/91sB3kw3V9L._AC_SY679_.jpg" },
  { id: 94, title: "Chinatown", year: 1974, img: "https://m.media-amazon.com/images/I/91T0knY4LKL._AC_SY679_.jpg" },
  { id: 95, title: "Unforgiven", year: 1992, img: "https://m.media-amazon.com/images/I/91Z1npD27XL._AC_SY679_.jpg" },
  { id: 96, title: "L.A. Confidential", year: 1997, img: "https://m.media-amazon.com/images/I/91tkB8o6uOL._AC_SY679_.jpg" },
  { id: 97, title: "The Sting", year: 1973, img: "https://m.media-amazon.com/images/I/91RO4OXYBGL._AC_SY679_.jpg" },
  { id: 98, title: "The Deer Hunter", year: 1978, img: "https://m.media-amazon.com/images/I/91vXzG6PlrL._AC_SY679_.jpg" },
  { id: 99, title: "The Big Sleep", year: 1946, img: "https://m.media-amazon.com/images/I/91o+xCm2FQL._AC_SY679_.jpg" },
  { id: 100, title: "Some Like It Hot", year: 1959, img: "https://m.media-amazon.com/images/I/91d6OtDQnkL._AC_SY679_.jpg" }
);
function generateFilmCards() {
  const grid = document.querySelector(".grid");

  films.forEach(film => {
    const filmCard = document.createElement("a");
    filmCard.href = `film.html?id=${film.id}`;
    filmCard.classList.add("card");

    const img = document.createElement("img");
    img.src = film.img;
    img.alt = film.title;

    const p = document.createElement("p");
    p.textContent = `${film.title} (${film.year})`;

    filmCard.appendChild(img);
    filmCard.appendChild(p);

    grid.appendChild(filmCard);
  });
}

// Appeler la fonction au chargement de la page
window.onload = generateFilmCards;

