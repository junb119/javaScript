
// javascript
import axios from 'axios'

function fetchMovies()  {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') 
    .then(res => {
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title // h1태그에 영화제목 할당
      imgEl.src = res.data.Search[0].Poster // img태그에 영화이미지 할당
    })  
  
  
}
  fetchMovies()