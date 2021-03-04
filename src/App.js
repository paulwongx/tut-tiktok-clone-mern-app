import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        async function fetchPosts() {
            const response = await axios.get('/v2/posts');
            setVideos(response.data);

            return response;
        }

        fetchPosts();
    },[]);

	return (
		<div className='app'>
			<h1>Let's build a full stack tiktok clone!!</h1>

			<div className='app__videos'>
                {videos.map(video => (
                    <Video
                    key={video.url}
                    channel={video.channel}
					description={video.description}
					song={video.song}
					likes={video.likes}
					shares={video.shares}
					messages={video.messages}
					url={video.url}
                    />
                ))}

			</div>
		</div>
	);
}

export default App;
