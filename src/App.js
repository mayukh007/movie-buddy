
import './App.css';
import Row from './Components/Row'
import request from './request'

function App() {
  return (
    <div className="App">
      <Row className = "r" title="Current Movies" fetchUrl={request.fetchLatest} />
      <Row className = "r" title="Top rated movies" fetchUrl={request.fetchTopRated}/>
      <Row className = "r" title="Trending" fetchUrl={request.fetchTrending}/>
      <Row className = "r" title="Action" fetchUrl={request.fetchActionMovies}/>
      <Row className = "r" title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row className = "r" title="Drama" fetchUrl={request.fetchDramaMovies}/>
      <Row className = "r" title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      <Row className = "r" title="Romance" fetchUrl={request.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
