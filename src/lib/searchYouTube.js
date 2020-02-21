import YOUTUBE_API_KEY from '../config/youtube.js';


var searchYouTube = (options = {query: 'cats', max: 5, key: YOUTUBE_API_KEY}, callback = (data) => { return data; }) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: callback
  });
};

export default searchYouTube;
