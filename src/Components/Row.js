import React, {useState, useEffect} from 'react'
import axios from '../axios'
import '../css/row.css'
const image= 'https://image.tmdb.org/t/p/original'
function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request  = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])
    console.log(movies);
    return (
        <div className="row">
            {/*title*/}
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie => (
                  <div className="poster_body">
                    <img key={movie.id} className="row_poster" src ={`${image}${movie.backdrop_path}`} alt={movie.title} />
                    <div className="poster_detail">
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row
