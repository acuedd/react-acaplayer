import "./SongListHeader.css";

const SongListHeader = () => {
    return (
        <div className="song-item header">
            <div className="index">#</div>
            <div className="name">Title</div>
            <div className="author">Author</div>
            <div className="name">Album</div>
        </div>
    );
};
//<i className="fas fa-chevron-down"></i>

export default SongListHeader;
