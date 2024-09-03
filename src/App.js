
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Rows from './Components/Rows';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rows title = "NetFlix Originals" fetchUrl = {requests.fetchNetFlixOriginals}/>
      <Rows title = "Trending" fetchUrl = {requests.fetchTrending}/>
      <Rows title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Rows title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Rows title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Rows title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Rows title = "Romantic Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Rows title = "Documentries" fetchUrl = {requests.fetchDocumentries}/>



    </div>
  );
}

export default App;
