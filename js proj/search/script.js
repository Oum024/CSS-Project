const movies = [
    // Hollywood Movies
    "The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Schindler's List",
    "The Lord of the Rings: The Return of the King", "Fight Club", "Forrest Gump", "Inception", "The Matrix",
    "Goodfellas", "The Empire Strikes Back", "One Flew Over the Cuckoo's Nest", "Interstellar", "Parasite",
    "The Green Mile", "Gladiator", "Saving Private Ryan", "The Departed", "Whiplash",
    "The Prestige", "The Lion King", "Terminator 2: Judgment Day", "The Pianist", "The Silence of the Lambs",
    "Se7en", "It's a Wonderful Life", "Léon: The Professional", "The Usual Suspects", "Spirited Away",
    "The Intouchables", "Back to the Future", "Psycho", "The Green Mile", "American History X",
    "City of God", "Casablanca", "The Shining", "WALL-E", "Django Unchained",
    "The Dark Knight Rises", "Braveheart", "Toy Story", "Coco", "The Terminator",
    "The Wolf of Wall Street", "Jurassic Park", "A Beautiful Mind", "The Truman Show", "Slumdog Millionaire",
    // Bollywood Movies
    "3 Idiots", "Dangal", "Lagaan", "Sholay", "Dilwale Dulhania Le Jayenge",
    "Taare Zameen Par", "PK", "Mughal-e-Azam", "Gully Boy", "Bajrangi Bhaijaan",
    "Queen", "Andhadhun", "Zindagi Na Milegi Dobara", "Barfi!", "Gangs of Wasseypur",
    "Rang De Basanti", "Swades", "Kuch Kuch Hota Hai", "Udaan", "Drishyam",
    "Paan Singh Tomar", "Black", "My Name Is Khan", "A Wednesday", "Hera Pheri",
    "Jo Jeeta Wohi Sikandar", "Anand", "Khosla Ka Ghosla", "Dil Chahta Hai", "Haider",
    "Rockstar", "Kabhi Khushi Kabhie Gham", "Chak De! India", "Bahubali: The Beginning", "Bahubali: The Conclusion",
    "Taare Zameen Par", "Parineeta", "Devdas", "Lage Raho Munna Bhai", "Ek Villain",
    "Om Shanti Om", "Golmaal", "Chennai Express", "Race", "Singham",
    "Badlapur", "Dear Zindagi", "Highway", "Raazi", "Sanju",
    "Pink", "Mulk", "Article 15", "Piku", "Masaan"
];

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = movies.filter(movie => movie.toLowerCase().includes(query));
    results.sort((a, b) => a.localeCompare(b));
    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        resultsContainer.appendChild(li);
    });
}
