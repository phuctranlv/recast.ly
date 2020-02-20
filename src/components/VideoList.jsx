import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
var VideoList = (props) => (
  <div className="video-list">
    {/* props passed in would be one object with a key called videos (passsed in from App). call map on props.videos */}
    {/* set each videoListEntry to have */}
    {props.videos.map(video =>
      <VideoListEntry video={video} click={props.clickEvent} state = {props.state}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
