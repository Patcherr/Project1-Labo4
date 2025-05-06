import SongItem from "./SongItem";

const SongList = ({ songs, onPlay,}) => {
  return (
    <div>
      {songs.map((song, index) => (
        <SongItem key={index} song={song} onPlay={onPlay}  />
      ))}
    </div>
  );
};

export default SongList;