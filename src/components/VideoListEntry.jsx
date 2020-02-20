var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {/* syntax: one object passed in as props and props has one property with the key video. props.video.snippet.thumbnails.default.url*/}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* syntax: one object passed in as props and props has one property with the key video. props.video.snippet.title ADD ONCLICK HERE*/}
      <div className="video-list-entry-title" onClick={() => props.click(props.video)}>{props.video.snippet.title}</div>
      {/* syntax: one object passed in as props and props has one property with the key video. props.video.snippet.description*/}
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
