import { useState, useEffect } from "react";
import AddSongForm from "./components/AddSongForm";
import SongList from "./components/SongList";
import VideoModal from "./components/VideoModal";


const App = () => {
  const [songs, setSongs] = useState(() => {
    return JSON.parse(localStorage.getItem("songs")) || [];
  });
  const [selectedSong, setSelectedSong] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(savedSongs);
  }, []);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]); // Se ejecuta cada vez que 'songs' cambia

  const handleAddSong = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  };

  const handlePlaySong = (song) => {
    song.plays += 1;
    localStorage.setItem("songs", JSON.stringify(songs));
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleDeleteSong = (songToDelete) => {
    const updatedSongs = songs.filter((s) => s.url.trim() !== songToDelete.url.trim());
    setSongs(updatedSongs);
    localStorage.setItem("songs", JSON.stringify(updatedSongs));
  };

  

  return (
    <div> 
      {!modalOpen && (
        <>
          <h1>🎵 YouTube Songs App</h1>
          <AddSongForm onAddSong={handleAddSong} />
          <SongList songs={songs} onPlay={handlePlaySong} onDelete={handleDeleteSong} />
        </>
      )}
        <VideoModal song={selectedSong} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;