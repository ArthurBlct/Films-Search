const key = "6a7eaccc"
// http://www.omdbapi.com/?apikey=6a7eaccc

const search = document.getElementById('search')
const input = document.getElementById('input')
const prefs = document.getElementById('preferences')

search.addEventListener('click', () => {
    if (input.value != "") {
        const url = `https://www.omdbapi.com/?apikey=${key}&s=${input.value}`
        fetch (url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // console.log(data.totalResults)
                
                input.value = ""
                // console.log('displayMovies')
                
                // for (movie in data) {
                //     console.log(data.Title)
                // }

                for (let i = 0; i < data.Search.length; i++) {
                    const movie = data.Search[i]
                    console.log(movie.Title)
                    const div = document.createElement('div')
                    div.innerHTML = ` 
                        <img class="poster" src="${movie.Poster}" alt="${movie.Title}">
                        <h1>${movie.Title}</h1>
                        <h2>${movie.Year}</h2>
                        <h3>${movie.Type}</h3>
                        <button>Ajouter</button>
                    `
                    prefs.appendChild(div)
                }






            })
            .catch(e => console.error(e))
    }
})