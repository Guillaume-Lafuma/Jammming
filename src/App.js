import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Playlist from './Components/Playlist/Playlist';
import SearchResults from './Components/SearchResults/SearchResults';
import Track from './Components/Track/Track';
import TrackList from './Components/TrackList/TrackList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <p>Here is the best App to make and share great music playlists</p>
      </header>
      <body>
        <SearchBar/>
        <SearchResults/>
        <Track/>
        <TrackList/>
        <Playlist/>
      </body>
    </div>
  );
}

export default App;
