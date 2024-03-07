const key = "6a7eaccc"
// http://www.omdbapi.com/?apikey=6a7eaccc

const search = document.getElementById('search')
const input = document.getElementById('input')
const prefs = document.getElementById('preferences')
const list = document.querySelector('.list')

search.addEventListener('click', () => {
    if (input.value != "") {
        list.innerHTML = ""
        const url = `https://www.omdbapi.com/?apikey=${key}&s=${input.value}`
        fetch (url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                input.value = ""

                for (let i = 0; i < data.Search.length; i++) {
                    const movie = data.Search[i]
                    console.log(movie.Title)
                    const div = document.createElement('div')
                    div.innerHTML = ` 
                        <img class="poster" src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <h2>${movie.Year}</h2>
                        <h3>${movie.Type}</h3>
                        <button>Ajouter</button>
                    `
                    div.classList.add('movie')
                    list.appendChild(div)
                }

            })
            .catch(e => console.error(e))
    }
})