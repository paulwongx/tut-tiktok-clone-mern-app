import React, { useRef, useState } from 'react';
import './video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, messages, shares}) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

	return (
		<div className='video'>
			<video
            onClick={handleVideoPress}
            ref={videoRef}
            className="video__player"
            loop
            src={url}></video>
			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
		</div>
	);
}

export default Video;
