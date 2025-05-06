import { useState } from "react";

const AddSongForm = ({ onAddSong }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const isValidYouTubeUrl = (url) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url || !isValidYouTubeUrl(url)) {
      alert("Por favor, ingresa un nombre y una URL válida de YouTube.");
      return;
    }

    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    if (savedSongs.some((song) => song.url === url)) {
      alert("Esta canción ya ha sido agregada.");
      return;
    }

    const newSong = { name, url, plays: 0 };
    localStorage.setItem("songs", JSON.stringify([...savedSongs, newSong]));
    onAddSong(newSong);
    setName("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de la canción" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de YouTube" required />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddSongForm;