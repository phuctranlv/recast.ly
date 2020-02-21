import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';


// var App = () => (
//   <div>
//     <h1>TEST1</h1>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);

    this.videos = exampleVideoData;
    // console.log(this.videos);
    this.state = {
      currentVideos: this.videos,
      currentVideo: this.videos[0],
    };
  }
  onVideoListEntryClick(video) {

    console.log(video);
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos={exampleVideoData} clickEvent={this.onVideoListEntryClick} state ={this.state}/> </div>
          </div>
        </div>
      </div>
    );
  }
}

{ /* <App videos={exampleVideoData} /> */ }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
