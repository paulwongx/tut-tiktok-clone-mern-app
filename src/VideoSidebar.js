import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, shares, messages}) {
	const [liked, setLiked] = useState(false);

	return (
		<div className='videoSidebar'>
			<div className='videoSiderbar__button'>
				{liked ? (
					<FavoriteBorderIcon
						onClick={e => setLiked(false)}
						fontSize='large'
					/>
				) : (
					<FavoriteIcon
						onClick={e => setLiked(true)}
						fontSize='large'
					/>
				)}
				<p>{liked ? likes : likes+1}</p>
			</div>
			<div className='videoSiderbar__button'>
				<MessageIcon fontSize='large' />
				<p>250</p>
			</div>
			<div className='videoSiderbar__button'>
				<ShareIcon fontSize='large' />
				<p>12</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
