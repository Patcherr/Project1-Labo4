import DeleteSongButton from "./DeteleSong";

const SongItem = ({ song, onPlay, onDelete }) => {
    return (
      <div>
        <p>{song.name}</p>
        <button onClick={() => onPlay(song)}>Play ({song.plays})</button>
        { <DeleteSongButton song={song} onDelete={onDelete} /> }
      </div>
    );
  };
  
  export default SongItem;