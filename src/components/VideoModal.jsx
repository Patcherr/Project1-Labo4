import ReactModal from "react-modal";
 
const VideoModal = ({ song, isOpen, onClose }) => {
  if (!song) return null;

  return (  
      <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <iframe
        width="560"
        height="315"
        src={song.url.replace("watch?v=", "embed/")}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <button onClick={onClose}>Cerrar</button>
    </ReactModal>
  );
};

export default VideoModal;