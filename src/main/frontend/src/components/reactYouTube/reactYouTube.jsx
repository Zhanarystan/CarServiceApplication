import React from 'react';
import YouTube from 'react-youtube';

class ReactYouTube extends React.Component {
  
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.seekTo(200);
        
        console.log(event.target);
      }

  render() {
    const opts = {
      height: '700',
      width: '1200',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const {videoId} = this.props;

    return <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />;
  }

  
}
export default ReactYouTube;